import React, { useEffect } from "react";
import { AppRoutes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { getUserGitHub } from "./store/user/userThunk";

const AppContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserGitHub());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </BrowserRouter>
  );
};
