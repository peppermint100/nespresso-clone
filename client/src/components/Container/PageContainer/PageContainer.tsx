import { Grid } from "@material-ui/core";
import React from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import useStyles from "./styles";

interface Props {
    children: JSX.Element;
}

const PageContainer: React.FC<Props> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <Navbar />
            </nav>
            <Grid container className={classes.contents}>
                <Grid item xs={1} md={3} />
                <Grid item xs={10} md={6}>
                    {children}
                </Grid>
                <Grid item xs={1} md={3} />
            </Grid>
            <footer className={classes.footer}>
                <Footer />
            </footer>
        </div>
    );
};

export default PageContainer;
