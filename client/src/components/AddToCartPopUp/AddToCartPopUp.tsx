import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { ItemType } from "../../types/Item";
import { ErrorResponse } from "../../types/Response";
import CapsuleSlider from "./CapsuleSlider";
import useStyles from "./styles";

interface Props {
    itemId: number;
    handleClose: () => void;
    itemType: ItemType;
}

const AddToCartPopUp: React.FC<Props> = ({ itemType, itemId, handleClose }) => {
    const classes = useStyles();
    const [amount, setAmount] = useState(10);
    const dispatch = useDispatch();
    const sliderAmount = (value: any) => {
        setAmount(value);
        return value;
    };

    const addToCart = () => {
        axios
            .post(`/cart`, { itemId, amount }, axiosConfigs)
            .then((r) => r.data)
            .then((response) => {
                dispatch(showMessage(response.message, "info"));
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
        handleClose();
    };

    return (
        <div className={classes.container}>
            {itemType === ItemType.CAPSULE ? (
                <CapsuleSlider
                    defaultValue={10}
                    min={10}
                    max={100}
                    step={10}
                    headerText="캡슐의 수량을 정해주세요."
                    sliderAmount={sliderAmount}
                />
            ) : (
                <CapsuleSlider
                    defaultValue={1}
                    min={1}
                    max={5}
                    step={1}
                    headerText="머신의 수량을 정해주세요."
                    sliderAmount={sliderAmount}
                />
            )}
            <Button
                className={classes.button}
                onClick={() => {
                    addToCart();
                }}
            >
                {amount} 개 추가
            </Button>
        </div>
    );
};

export default AddToCartPopUp;
