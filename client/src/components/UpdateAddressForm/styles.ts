import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "40px",
    },
    userName: {
        marginBottom: "20px",
        fontSize: "18px",
        fontWeight: 600,
    },
    input: {
        width: "100%",
        height: "50px",
    },
    button: {
        marginTop: "50px",
        display: "block",
        color: "#fff",
        width: "100%",
        fontSize: "18px",
        height: "50px",
        backgroundColor: theme.palette.success.main,
        "&:hover": {
            backgroundColor: theme.palette.success.light,
        },
        "&:active": {
            backgroundColor: theme.palette.success.main,
        },
    },
}));

export default useStyles