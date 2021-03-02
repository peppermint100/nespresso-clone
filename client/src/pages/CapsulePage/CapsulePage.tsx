import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CapsuleListItem from "../../components/Capsule/CapsuleListItem";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { Capsule } from "../../types/Item";
import { ErrorResponse, GetCapsuleResponse } from "../../types/Response";
import useStyles from "./styles";

const CapsulePage = () => {
    // get all capsule
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const toDetailPage = (itemId: number) => {
        history.push(`/capsule/${itemId}`);
    };

    const [capsules, setCapsules] = useState<Array<Capsule>>([]);
    const getCapsules = () => {
        axios
            .get("/item/capsules", axiosConfigs)
            .then((r) => r.data)
            .then((response: GetCapsuleResponse) => {
                setCapsules(response.capsules);
            })
            .catch((e: ErrorResponse) => {
                if (e.response) {
                    dispatch(showMessage(e.response.data.message, "warning"));
                }
            });
    };

    useEffect(() => {
        getCapsules();
    }, []);

    return (
        <PageContainer>
            <div className={classes.container}>
                <header className={classes.header}>커피</header>
                <ul className={classes.itemContainer}>
                    {capsules.map((capsule: Capsule) => (
                        <li key={capsule.itemId} className={classes.item}>
                            <CapsuleListItem
                                capsule={capsule}
                                toDetailPage={toDetailPage}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </PageContainer>
    );
};

export default CapsulePage;
