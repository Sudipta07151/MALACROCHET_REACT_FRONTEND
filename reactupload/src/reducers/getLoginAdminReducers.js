const getLoginAdminReducers = (user = null, action) => {
  switch (action.type) {
    case "LOGIN_ADMIN_USER":
      return { ...action.payload, loader: false };
    case "LOGOUT_ADMIN_USER":
      return { user: null, loader: false };
    case "START_LOADER":
      return { ...action.payload, loader: true };
    default:
      return { ...user, loader: false };
  }
};

export default getLoginAdminReducers;
