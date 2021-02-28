import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: "400px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },
    header: {
        fontSize: "15px",
        fontWeight: 600,
    },
    slider: {
        width: "80%",
        color: theme.palette.success.main,
    },
    button: {
        float: "right",
        marginRight: "15px",
        backgroundColor: theme.palette.success.main,
        color: "#fff",
        width: "150px",
        height: "40px",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: theme.palette.success.light,
        },
        [theme.breakpoints.down("sm")]: {
            width: "50px",
            fontSize: "10px",
        },
    },
}));

export default useStyles;