import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import { BasicResponse, ErrorResponse } from "../../types/Response";
import useStyles from "./styles";

const UpdateAddressForm = () => {
    const classes = useStyles();
    const user = useSelector((state: RootReducerType) => state.user);
    const dispatch = useDispatch();
    const [address, setAddress] = useState(user.address);

    const confirmChangeAddress = () => {
        console.log("confirm!");
        axios
            .post(`/user/update-address`, { address }, axiosConfigs)
            .then((r) => r.data)
            .then((response: BasicResponse) => {
                dispatch(showMessage(response.message, "info"));
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
    };

    return (
        <div className={classes.container}>
            <div className={classes.userName}>
                {user.lastName + user.firstName}님의 주소
            </div>
            <div>
                <TextField
                    className={classes.input}
                    variant="filled"
                    value={address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAddress(e.target.value);
                    }}
                />
            </div>
            <Button onClick={confirmChangeAddress} className={classes.button}>
                주소 수정하기
            </Button>
        </div>
    );
};

export default UpdateAddressForm;
