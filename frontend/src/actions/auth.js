export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const registerSuccess = (userData) => ({
  type: 'REGISTER_SUCCESS',
  payload: userData,
});

export const registerFailure = (error) => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});