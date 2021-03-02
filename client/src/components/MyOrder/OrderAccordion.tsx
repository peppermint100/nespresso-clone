import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Hidden,
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
import useStyles from "./styles";

interface Props {
    order: Order;
}
const OrderAccordion: React.FC<Props> = ({ order }) => {
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

export default OrderAccordion;
