import React, {useEffect} from "react";
import {AppRoutes} from "./routes/routes";
import {BrowserRouter, useLocation} from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import {store} from "./store";
import {injectStore} from "./config/axiosInstance";
import {authActions} from "./store/auth/authSlice";

injectStore(store);

const AppContent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const token = location.pathname.split("=");
    const access_token = token[1];

    if (access_token) {
        localStorage.setItem("token", access_token);
    }

    useEffect(() => {
        const json = localStorage.getItem("token");
        dispatch(authActions.login(json));
    }, [dispatch]);

    return (<>
        <AppRoutes token={`token=${access_token}`}/>
    </>);
};

export const App = () => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContent/>
        </Provider>
    </BrowserRouter>);
};
