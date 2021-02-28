import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import PageContainer from "../../components/Container/PageContainer/PageContainer";

const Box = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "300px",
                backgroundColor: "orange",
            }}
        />
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px 0",
    },
}));
const MyPage = () => {
    const classes = useStyles();
    return (
        <PageContainer>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={3}>
                    <Box />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box />
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default MyPage;
