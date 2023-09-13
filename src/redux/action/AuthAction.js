export const ADD_CONECTED_USER = "ADD_CONECTED_USER";
export const DELETE_CONECTED_USER = "DELETE_CONECTED_USER";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addConnectedUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONECTED_USER,
      payload: user,
    });
  };
};

export const deleteConnectedUser = () => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONECTED_USER,
      payload: {}
    });
  };
};

// CartAction.js
export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (lieuTouristique) => {
  return (dispatch) => {
    // Vous pouvez ajouter des opérations de requête API ici si nécessaire
    // Par exemple, vous pouvez envoyer une requête POST pour ajouter au panier côté serveur

    // Une fois l'opération API réussie, dispatchez l'action pour mettre à jour le panier dans Redux
    dispatch({
      type: ADD_TO_CART,
      payload: lieuTouristique,
    });
  };
};

export const removeFromCart = (lieuId) => {
  return (dispatch) => {
    // Vous pouvez inclure des opérations de requête API pour supprimer l'élément du panier côté serveur ici si nécessaire
    
    // Dispatchez l'action pour supprimer l'élément du panier
    dispatch({
      type: REMOVE_FROM_CART,
      payload: lieuId,
    });
  };
};

// export const addToCart = (product) => ({
//   type: 'ADD_TO_CART',
//   payload: product,
// });

// export const fetchProducts = () => ({
//   type: 'FETCH_PRODUCTS',
// });

// export const ADD_TO_CART = 'ADD_TO_CART';
// export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';