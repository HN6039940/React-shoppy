const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log(action.type);
  console.log(action.payload);
  console.log(store.getState());

  next(action);
  console.log(store.getState());
};
