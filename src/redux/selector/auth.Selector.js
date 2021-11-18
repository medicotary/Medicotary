export const isAuthenticated = (state) => {
  if (state.auth.user.token) return true;
  return false;
};
