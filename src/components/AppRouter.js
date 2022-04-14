import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {Redirect, Route, Switch} from "react-router-dom";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <Switch >
                {user.isAuth && authRoutes.map(({path, Component}) =>
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