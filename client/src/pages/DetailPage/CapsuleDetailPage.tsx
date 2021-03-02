import { Button, Grid, Paper, Popover } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartPopUp from "../../components/AddToCartPopUp/AddToCartPopUp";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import { axiosConfigs } from "../../configs/axios";
import { RootReducerType } from "../../redux/reducers/rootReducer";
import { Capsule, CupSize, DetailParamsType, ItemType } from "../../types/Item";
import { GetItemResponse } from "../../types/Response";
import useStyles from "./styles";

interface Props {}

const CapsuleDetailPage: React.FC<Props> = ({}) => {
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
    const [detail, setDetail] = useState<Capsule>({
        itemId: 0,
        itemName: "",
        itemImage: "",
        itemDetailImage: "",
        price: 0,
        description: "",
        intensity: 0,
        cupSize: CupSize.ESPRESSO,
        profile: "",
        note: "",
        origin: "",
    });

    useEffect(() => {
        axios
            .get(`/item/${params.itemId}`, axiosConfigs)
            .then((r) => r.data)
            .then((response: GetItemResponse<Capsule>) => {
                console.log(response);
                setDetail(response.item);
            });
    }, []);
    return (
        <PageContainer>
            <Grid container spacing={2} className={classes.container}>
                <Grid item sm={12} md={8}>
                    <img
                        className={classes.img}
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
                                    강도 :
                                </label>
                                <span className={classes.detailContent}>
                                    {detail.intensity}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    컵 사이즈 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    {detail.cupSize}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    아로마 프로파일 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    {detail.profile}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    아로마 노트 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    {" "}
                                    {detail.note}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    {" "}
                                    원산지 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    {" "}
                                    {detail.origin}
                                </span>
                            </div>
                            <div className={classes.detailInfo}>
                                <label className={classes.detailLabel}>
                                    {" "}
                                    가격 :{" "}
                                </label>
                                <span className={classes.detailContent}>
                                    {" "}
                                    ₩ {detail.price}
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

export default CapsuleDetailPage;
