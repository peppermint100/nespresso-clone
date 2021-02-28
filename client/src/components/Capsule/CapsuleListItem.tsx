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
import { Capsule, ItemType } from "../../types/Item";
import AddToCartPopUp from "../AddToCartPopUp/AddToCartPopUp";
import IntensityIndicator from "../IntensityIndicator/IntensityIndicator";
import useStyles from "./styles";

interface Props {
    capsule: Capsule;
    width: Breakpoint;
    toDetailPage: (itemId: number) => void;
}

const CapsuleListItem: React.FC<Props> = ({ capsule, width, toDetailPage }) => {
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
                onClick={() => toDetailPage(capsule.itemId)}
            >
                <img
                    src={capsule.itemImage}
                    alt="capsule"
                    className={classes.img}
                />
            </Grid>
            <Grid
                item
                xs={5}
                sm={4}
                onClick={() => toDetailPage(capsule.itemId)}
            >
                <div className={classes.infoContainer}>
                    <div>
                        <div className={classes.title}>{capsule.itemName}</div>
                        <div className={classes.description}>
                            {capsule.description}
                        </div>
                    </div>
                    <div
                        className={classes.intensity}
                        onClick={() => toDetailPage(capsule.itemId)}
                    >
                        <IntensityIndicator intensity={capsule.intensity} />
                    </div>
                </div>
            </Grid>
            <Grid
                item
                xs={2}
                sm={2}
                onClick={() => toDetailPage(capsule.itemId)}
            >
                <div className={classes.price}>\ {capsule.price}</div>
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
                        itemType={ItemType.CAPSULE}
                        itemId={capsule.itemId}
                        handleClose={handleClose}
                    />
                </Popover>
            </Grid>
        </Grid>
    );
};

export default withWidth()(CapsuleListItem);
