import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Panier from "./components/Panier";
import { useEffect, useState } from "react";
import Table_Product from "./components/Table_Product";
import Add_Product from "./components/Add_Product";
import Product_info from "./components/Product_info";
import Display_Product from "./components/Display_Product";
import PanierLink from "./components/PanierLink";
import { PanierProvider } from "./components/PanierContext";

function App() {
  const [panier, setPanier] = useState([]);
  const [show5, setShow5] = useState(false); // Assurez-vous d'initialiser show5 selon votre logique
  const nombreProduitsPanier = panier.length;

  useEffect(() => {
    // Récupérez le panier depuis le localStorage
    const storedPanier = JSON.parse(localStorage.getItem('panier'));
    if (storedPanier) {
      setPanier(storedPanier);
    }
  }, []);
  return (
    <>
      <BrowserRouter>

     
        <Header />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/admin" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/TableProduct" element={<Table_Product />} />
            <Route path="/Add_Prodcut" element={<Add_Product />} />
            <Route path="/EditProduct/:id" element={<Add_Product />} />
            <Route path="/product" element={<Display_Product />} />
            <Route path="/product_info/:id" element={<Product_info />} />
            <Route
              path="/panier"
              element={show5 ? <PanierLink panier={panier} /> : <Panier panier={panier} />}
            />

            {/* <Route path="/panier" element={<Panier />} /> */}
            
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
