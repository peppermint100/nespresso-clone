import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        minHeight: "100vh"
    },
    nav: {
        height: "200px",
        [theme.breakpoints.down("md")]: {
            height: "100px",
        },
    },
    contents: {
        minHeight: "100%",
        paddingBottom: "200px",
        [theme.breakpoints.down("md")]: {
            paddingBottom: "100px",
        },
    },
    footer: {
        position: "absolute",
        height: "200px",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        [theme.breakpoints.down("md")]: {
            height: "100px",
        },
    },
}));

export default useStyles;