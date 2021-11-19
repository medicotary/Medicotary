export const isAuthenticated = (state) => {
  if (state.auth.isLoggedIn) return true;
  return false;
};
