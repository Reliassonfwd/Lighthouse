const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case 'REGISTER_FAILURE':
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };

    case 'LOGIN_SUCCESS':
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;





