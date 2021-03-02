import { Button, Grid, Paper, Popover } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartPopUp from "../../components/AddToCartPopUp/AddToCartPopUp";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import { axiosConfigs } from "../../configs/axios";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import {
    DetailParamsType,
    ItemType,
    Machine,
    MachineType,
} from "../../types/Item";
import { GetItemResponse } from "../../types/Response";
import useStyles from "./styles";

const MachineDetailPage = () => {
    const classes = useStyles();
    const params = useParams<DetailParamsType>();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const user = useSelector((state: RootReducerType) => state.user);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const [detail, setDetail] = useState<Machine>({
        itemId: 0,
        itemName: "",
        itemImage: "",
        itemDetailImage: "",
        price: 0,
        description: "",
        machineType: MachineType.ORIGINAL,
    });

    useEffect(() => {
        axios
            .get(`/item/${params.itemId}`, axiosConfigs)
            .then((r) => r.data)
            .then((response: GetItemResponse<Machine>) => {
                setDetail(response.item);
            });
    }, [params.itemId]);
    return (
        <PageContainer>
            <Grid container spacing={2} className={classes.container}>
                <Grid item sm={12} md={8}>
                    <img
                        className={classes.machineImg}
                        src={detail.itemDetailImage}
                        alt="detail"
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper className={classes.detailContainer}>
                        <div className={classes.detailInnerContainer}>
                            <div className={classes.itemName}>
                                {detail.itemName}
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    타입 :
                                </label>
                                <span className={classes.detailContent}>
                                    {detail.machineType === MachineType.ORIGINAL
                                        ? "오리지널 머신"
                                        : "버츄오 머신"}
                                </span>
                            </div>
                            <div className={classes.description}>
                                <span className={classes.detailContent}>
                                    {detail.description}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    {" "}
                                    가격 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    ₩{detail.price}
                                </span>
                            </div>
                            <Button
                                className={classes.button}
                                onClick={handleClick}
                                disabled={!user.isAuthenticated}
                            >
                                장바구니에 담기
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
                                    itemId={detail.itemId}
                                    handleClose={handleClose}
                                />
                            </Popover>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default MachineDetailPage;
