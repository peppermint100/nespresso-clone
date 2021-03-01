import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
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
import { ExpandMoreOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Order, OrderItem } from "../../types/Item";

interface Props {
    orders: Array<Order>;
}

const OrderAccordion: React.FC<{ order: Order }> = ({ order }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    return (
        <Accordion
            expanded={expanded}
            className={classes.accordion}
            onChange={() => {
                setExpanded(!expanded);
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.accordionSummary}
            >
                <div className={classes.orderInfoHeader}>
                    <span>
                        {/* created at */}
                        {order.createdAt.substring(0, 10)}
                    </span>
                    {order.orderItems.length > 1 && (
                        <span>
                            {order.orderItems[0].item.itemName} 외{" "}
                            {order.orderItems.length - 1} 개
                        </span>
                    )}
                    <span>의 주문</span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.orderItems.map((orderItem: OrderItem) => (
                                <TableRow key={orderItem.orderItemId}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        className={classes.imgNameContainer}
                                    >
                                        <div className={classes.imgWrapper}>
                                            <img
                                                src={orderItem.item.itemImage}
                                                alt="item"
                                                className={classes.img}
                                            />
                                        </div>
                                        <div className={classes.itemName}>
                                            {orderItem.item.itemName}
                                        </div>
                                    </TableCell>

                                    <Hidden smDown>
                                        <TableCell
                                            align="right"
                                            className={classes.price}
                                        >
                                            {orderItem.item.price}
                                        </TableCell>
                                    </Hidden>
                                    <TableCell
                                        align="right"
                                        className={classes.amount}
                                    >
                                        {orderItem.amount}
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        className={classes.total}
                                    >
                                        ₩{" "}
                                        {orderItem.item.price *
                                            orderItem.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </AccordionDetails>
        </Accordion>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "0 auto",
        padding: "5px",
    },
    accordionContainer: {
        marginBottom: "10px",
    },
    accordion: {},
    accordionSummary: {
        backgroundColor: theme.palette.grey[400],
    },
    formHeader: {
        backgroundColor: theme.palette.grey[300],
        height: "30px",
        padding: "18px",
        color: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: "13px",
        marginBottom: "50px",
    },
    table: {},
    imgNameContainer: {
        display: "flex",
    },
    imgWrapper: {},
    img: {
        width: "50px",
        objectFit: "cover",
    },
    itemName: {
        transform: "translateX(60px)",
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            transform: "translateX(20px)",
        },
    },
    price: {},
    amount: {},
    total: {},
    orderInfoHeader: {
        fontWeight: 600,
    },
}));

const MyOrder: React.FC<Props> = ({ orders }) => {
    const classes = useStyles();
    console.log(orders);
    return (
        <div className={classes.container}>
            {orders.map((order) => (
                <li key={order.orderId} className={classes.accordionContainer}>
                    <OrderAccordion order={order} />
                </li>
            ))}
        </div>
    );
};
export default MyOrder;
