import {
    Button,
    Grid,
    isWidthDown,
    Popover,
    withWidth,
} from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { ItemType, Machine } from "../../types/Item";
import AddToCartPopUp from "../AddToCartPopUp/AddToCartPopUp";
import useStyles from "./styles";

interface Props {
    machine: Machine;
    width: Breakpoint;
    toDetailPage: (itemId: number) => void;
}

const MachineListItem: React.FC<Props> = ({ machine, width, toDetailPage }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <Grid container spacing={0} className={classes.gridContainer}>
            <Grid
                item
                xs={2}
                sm={2}
                onClick={() => toDetailPage(machine.itemId)}
            >
                <img
                    src={machine.itemImage}
                    alt="machine"
                    className={classes.img}
                />
            </Grid>
            <Grid
                item
                xs={4}
                sm={4}
                onClick={() => {
                    toDetailPage(machine.itemId);
                }}
            >
                <div className={classes.infoContainer}>
                    <div>
                        <div className={classes.title}>{machine.itemName}</div>
                        {isWidthDown("sm", width) ? null : (
                            <div className={classes.description}>
                                {machine.description}
                            </div>
                        )}
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={3}
                sm={2}
                onClick={() => {
                    toDetailPage(machine.itemId);
                }}
            >
                <div className={classes.price}>\ {machine.price}</div>
            </Grid>
            <Grid item xs={3} sm={4}>
                <Button className={classes.button} onClick={handleClick}>
                    {isWidthDown("sm", width) ? (
                        <ShoppingCartOutlined />
                    ) : (
                        "장바구니에 담기"
                    )}
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                >
                    <AddToCartPopUp
                        itemType={ItemType.MACHINE}
                        itemId={machine.itemId}
                        handleClose={handleClose}
                    />
                </Popover>
            </Grid>
        </Grid>
    );
};

export default withWidth()(MachineListItem);
