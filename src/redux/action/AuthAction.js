export const ADD_CONECTED_USER = "ADD_CONECTED_USER";
export const DELETE_CONECTED_USER = "DELETE_CONECTED_USER";

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