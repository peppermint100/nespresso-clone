import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContainer from "../../components/Container/PageContainer/PageContainer";
import MachineListItem from "../../components/Machine/MachineListItem";
import { axiosConfigs } from "../../configs/axios";
import { showMessage } from "../../redux/actions/MessageAction";
import { Machine } from "../../types/Item";
import { ErrorResponse, GetMachineResponse } from "../../types/Response";
import useStyles from "./styles";

const MachinePage = () => {
    // get all capsule
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const [machines, setMachines] = useState<Array<Machine>>([]);
    const getCapsules = () => {
        axios
            .get("/item/machines", axiosConfigs)
            .then((r) => r.data)
            .then((response: GetMachineResponse) => {
                console.log(response);
                setMachines(response.machines);
            })
            .catch((e: ErrorResponse) => {
                if (e.response) {
                    dispatch(showMessage(e.response.data.message, "warning"));
                }
            });
    };

    const toDetailPage = (itemId: number) => {
        history.push(`/machine/${itemId}`);
    };

    useEffect(() => {
        getCapsules();
    }, [dispatch]);

    return (
        <PageContainer>
            <div className={classes.container}>
                <header className={classes.header}>머신</header>
                <ul className={classes.itemContainer}>
                    {machines.map((machine: Machine) => (
                        <li key={machine.itemId}>
                            <MachineListItem
                                machine={machine}
                                toDetailPage={toDetailPage}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </PageContainer>
    );
};

export default MachinePage;
