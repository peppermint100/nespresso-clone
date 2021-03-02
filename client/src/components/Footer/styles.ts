import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    innerContainer: {
        width: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            width: "40%",
        },
    },
    linkContainer: {
        cursor: "pointer",
    },
    icon: {
        textAlign: "center",
        color: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: "13px",
    },
}));

export default useStyles