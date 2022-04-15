import React from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Switch >
                {localStorage.getItem("userToken") !== null && localStorage.getItem("isAuth") && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component}/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component}/>
                )}
                <Redirect to={HOME_ROUTE}/>
            </Switch>
        </div>
    );
};

export default AppRouter;