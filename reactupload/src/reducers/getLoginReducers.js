const getLoginReducers = (user = null, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...action.payload, loader: false };
    case "LOGOUT_USER":
      return { user: null, loader: false };
    case "START_LOADER":
      return { user: null, loader: true };
    default:
      return { ...user, loader: false };
  }
};

export default getLoginReducers;
