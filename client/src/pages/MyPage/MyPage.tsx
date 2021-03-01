import { Divider, Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import {
    AccountCircleOutlined,
    FaceOutlined,
    RoomOutlined,
    ShoppingBasketOutlined,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import MyOrder from "../../components/MyOrder/MyOrder";
import UpdateAddressForm from "../../components/UpdateAddressForm/UpdateAddressForm";
import UpdateUserForm from "../../components/UpdateUserForm/UpdateUserForm";
import { axiosConfigs } from "../../configs/axios";
import { useTabs } from "../../lib/Hooks";
import { showMessage } from "../../redux/actions/MessageAction";
import { Order } from "../../types/Item";
import { ErrorResponse, GetOrderResponse } from "../../types/Response";
import { Tab } from "../../types/Utils";
import useStyles from "./styles";

const MyPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [orders, setOrders] = useState<Array<Order>>([]);

    const tabContent: Array<Tab> = [
        {
            name: "나의 주문 내역",
            content: <MyOrder orders={orders} />,
            icon: <ShoppingBasketOutlined />,
        },
        {
            name: "개인 정보",
            content: <UpdateUserForm />,
            icon: <AccountCircleOutlined />,
        },
        {
            name: "나의 주소",
            content: <UpdateAddressForm />,
            icon: <RoomOutlined />,
        },
    ];

    const { currentTab, setTab, currentName } = useTabs(0, tabContent);

    useEffect(() => {
        axios
            .get("/order", axiosConfigs)
            .then((r) => r.data)
            .then((response: GetOrderResponse) => {
                console.log(response.orders);
                setOrders(response.orders);
            })
            .catch((e: ErrorResponse) => {
                dispatch(showMessage(e.response.data.message, "warning"));
            });
    }, []);

    return (
        <PageContainer>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Paper className={classes.listContainer}>
                        {tabContent.map((tab: Tab, idx: number) => (
                            <div key={idx}>
                                <li
                                    className={classes.listItem}
                                    onClick={() => setTab(idx)}
                                >
                                    <Hidden smDown>
                                        <div className={classes.listIcon}>
                                            {tab.icon}
                                        </div>
                                    </Hidden>
                                    <span className={classes.listItemName}>
                                        {tab.name}
                                    </span>
                                </li>
                            </div>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <header className={classes.formHeader}>
                        {currentName}
                    </header>
                    <Paper className={classes.content}>{currentTab}</Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default MyPage;
