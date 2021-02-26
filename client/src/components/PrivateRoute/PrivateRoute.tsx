import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { setUser, UserState } from "../../redux/actions/UserAction";
import { ErrorResponse, MeResponse } from "../../types/Response";

function PrivateRoute(Component: React.FC) {
    const dispatch = useDispatch();
    function AuthenticationCheck(props: any) {
        useEffect(() => {
            axios
                .post("/user/me", null, axiosConfigs)
                .then((r) => r.data)
                .then((response: MeResponse) => {
                    const userInfo: UserState = response.userInfo;
                    dispatch(setUser(userInfo));
                })
                .catch((e: ErrorResponse) => {
                    if (e.response) {
                        dispatch(
                            showMessage(e.response.data.message, "warning")
                        );
                        props.history.push("/login");
                    }
                });
        }, []);

        return <Component />;
    }
    return AuthenticationCheck;
}

export default PrivateRoute;
