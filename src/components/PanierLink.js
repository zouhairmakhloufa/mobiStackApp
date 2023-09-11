import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const PanierLink = ({ panier, nombreProduitsPanier }) => (
  <div className="nav-item">
    <Link to="/panier" className="nav-link">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge badge-pill badge-primary">{nombreProduitsPanier}</span>
      {console.log("2222222222",panier)}
    </Link>
  </div>
);

export default PanierLink;
