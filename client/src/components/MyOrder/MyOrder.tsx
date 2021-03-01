import React from "react";
import { Order } from "../../types/Item";
import OrderAccordion from "./OrderAccordion";
import useStyles from "./styles";

interface Props {
    orders: Array<Order>;
}

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
