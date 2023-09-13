import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez un contexte pour le panier
const PanierContext = createContext();

// Créez un composant PanierProvider pour fournir le contexte
export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([]);
  const [nombreProduitsPanier, setNombreProduitsPanier] = useState(0);

  useEffect(() => {
    // Récupérez le panier depuis le localStorage lors de la première charge
    const storedPanier = JSON.parse(localStorage.getItem('panier'));
    if (storedPanier) {
      setPanier(storedPanier);
    }
  }, []);

  // Fonction pour ajouter un produit au panier
  const ajouterAuPanier = (produitId) => {
    const nouveauPanier = [...panier, produitId];
    setPanier(nouveauPanier);
    // Enregistrez le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(nouveauPanier));
  };

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produitId) => {
    const nouveauPanier = panier.filter((id) => id !== produitId);
    setPanier(nouveauPanier);
    // Enregistrez le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(nouveauPanier));
  };

  // Fonction pour vider le panier
  const viderLePanier = () => {
    setPanier([]);
    // Effacez le panier dans le localStorage
    localStorage.removeItem('panier');
  };

  // Valeur du contexte à fournir aux composants enfants
  const contextValue = {
    panier,
    ajouterAuPanier,
    supprimerDuPanier,
    viderLePanier,
    nombreProduitsPanier: panier.length,
  };

  return (
    <PanierContext.Provider value={contextValue}>
      {children}
    </PanierContext.Provider>
  );
}

// Fonction personnalisée pour utiliser le contexte du panier
export function usePanier() {
  return useContext(PanierContext);
}

