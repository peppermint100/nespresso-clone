import {
    Button,
    Hidden,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { CartItem } from "../../types/Item";
import {
    BasicResponse,
    ErrorResponse,
    GetCartItemResponse,
} from "../../types/Response";
import useStyles from "./styles";

const CartPage = () => {
    const classes = useStyles();
    const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalRef = useRef(0);
    const dispatch = useDispatch();

    const deleteItem = (cartItemId: number) => {
        axios
            .delete(`/cart/${cartItemId}`, axiosConfigs)
            .then((r) => r.data)
            .then((response: BasicResponse) => {
                dispatch(showMessage(response.message, "info"));
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
    };

    const confirmOrder = () => {
        axios
            .post("/order", {}, axiosConfigs)
            .then((r) => r.data)
            .then((response: BasicResponse) => {
                dispatch(showMessage(response.message, "info"));
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
    };

    useEffect(() => {
        axios
            .get("/cart", axiosConfigs)
            .then((r) => r.data)
            .then((response: GetCartItemResponse) => {
                setCartItems(response.cartItems);
                response.cartItems.forEach((cartItem) => {
                    totalRef.current += cartItem.item.price * cartItem.amount;
                });
                setTotalPrice(totalRef.current);
            })
            .catch((e: ErrorResponse) => {
                if (e.response) {
                    console.log(e.response.data.message);
                }
            });
    }, []);

    return (
        <PageContainer>
            <div className={classes.container}>
                <header className={classes.header}>내 장바구니</header>
                <Paper elevation={2}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <TableHead className={classes.formHeader}>
                                <TableRow>
                                    <TableCell>제품 명</TableCell>
                                    <Hidden smDown>
                                        <TableCell align="right">
                                            개별 단가
                                        </TableCell>
                                    </Hidden>
                                    <TableCell align="right">수량</TableCell>
                                    <TableCell align="right">합계</TableCell>
                                    <TableCell align="left"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItems.map((cartItem) => (
                                    <TableRow key={cartItem.cartItemId}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className={classes.imgNameContainer}
                                        >
                                            <div className={classes.imgWrapper}>
                                                <img
                                                    src={
                                                        cartItem.item.itemImage
                                                    }
                                                    alt="item"
                                                    className={classes.img}
                                                />
                                            </div>
                                            <div className={classes.itemName}>
                                                {cartItem.item.itemName}
                                            </div>
                                        </TableCell>

                                        <Hidden smDown>
                                            <TableCell
                                                align="right"
                                                className={classes.price}
                                            >
                                                {cartItem.item.price}
                                            </TableCell>
                                        </Hidden>
                                        <TableCell
                                            align="right"
                                            className={classes.amount}
                                        >
                                            {cartItem.amount}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className={classes.total}
                                        >
                                            ₩{" "}
                                            {cartItem.item.price *
                                                cartItem.amount}
                                        </TableCell>
                                        <TableCell align="right">
                                            <CloseOutlined
                                                className={classes.deleteButton}
                                                onClick={() =>
                                                    deleteItem(
                                                        cartItem.cartItemId
                                                    )
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <div className={classes.orderConfirmContainer}>
                    <Button
                        className={classes.orderConfirmButton}
                        onClick={() => {
                            confirmOrder();
                        }}
                    >
                        {totalPrice > 0 && `₩ ${totalPrice}`}
                        <Hidden smDown>결제하기</Hidden>
                    </Button>
                </div>
            </div>
        </PageContainer>
    );
};

export default CartPage;
