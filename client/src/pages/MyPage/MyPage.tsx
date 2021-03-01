import { Divider, Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import {
    AccountCircleOutlined,
    FaceOutlined,
    ShoppingBasketOutlined,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import MyOrder from "../../components/MyOrder/MyOrder";
import UpdateUserForm from "../../components/UpdateUserForm/UpdateUserForm";
import { axiosConfigs } from "../../configs/axios";
import { useTabs } from "../../lib/Hooks";
import { showMessage } from "../../redux/actions/MessageAction";
import { Order, OrderItem } from "../../types/Item";
import { ErrorResponse, GetOrderResponse } from "../../types/Response";
import { Tab } from "../../types/Utils";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px 0",
    },
    listContainer: {
        height: 450,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            height: 80,
        },
    },
    listItem: {
        marginTop: "5px",
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
            "&:hover": {
                backgroundColor: theme.palette.grey[400],
            },
        },
        [theme.breakpoints.between("xs", "md")]: {
            display: "flex",
            height: 80,
            "&:hover": {
                color: theme.palette.grey[400],
            },
        },
    },
    listIcon: {
        height: "70px",
        lineHeight: "70px",
        display: "inline-block",
        transform: "translateY(10%)",
        marginLeft: "10px",
    },
    listItemName: {
        marginLeft: "10px",
        fontSize: "14px",
        height: "70px",
        lineHeight: "70px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
    },
    content: {
        minHeight: 450,
    },
}));

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
            name: "내 정보",
            content: <UpdateUserForm />,
            icon: <AccountCircleOutlined />,
        },
    ];

    const { currentTab, setTab } = useTabs(0, tabContent);

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
                    <Paper className={classes.content}>{currentTab}</Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default MyPage;
