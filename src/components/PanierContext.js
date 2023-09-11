import React, { createContext, useContext, useEffect, useState } from 'react';

const PanierContext = createContext();

export function usePanier() {
  return useContext(PanierContext);
}

export function PanierProvider({ children }) {
    const [panier, setPanier] = useState([]);
console.log("1111111111",panier)
  const [nombreProduitsPanier, setNombreProduitsPanier] = useState(0);
  useEffect(() => {
    // Mettez à jour nombreProduitsPanier avec la longueur du panier
    setNombreProduitsPanier(panier.length);
  }, [panier]);
  return (
    <PanierContext.Provider value={{ panier,nombreProduitsPanier, setNombreProduitsPanier,setPanier }}>
      {children}
    </PanierContext.Provider>
  );
}
