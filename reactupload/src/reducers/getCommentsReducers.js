const getCommentsReducers = (allComment = [], action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      return [...allComment, ...action.payload];
    case "GET_ALL_COMMENT":
      return [...action.payload];
    default:
      return [...allComment];
  }
};

export default getCommentsReducers;
