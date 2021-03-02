import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CURRENT_USER } from "../../constants";
import { cookie } from "../../lib/cookies";

export const isAuth = () => {
    const cookieChecked = cookie.get("X-TOKEN");
    if (cookieChecked) {
        if (localStorage.getItem(CURRENT_USER)) {
            return JSON.parse(localStorage.getItem(CURRENT_USER)!!);
        } else {
            return false;
        }
    }
};

interface Props {
    component: any;
    exact: boolean;
    path: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                    }}
                />
            )
        }
    ></Route>
);

export default PrivateRoute;
