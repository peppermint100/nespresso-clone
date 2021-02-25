import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px 0",
        height: "500px",
    },
    formContainer: {
        width: "100%",
        height: "100%",
    },
    formHeader: {
        backgroundColor: theme.palette.grey[300],
        height: "30px",
        padding: "18px",
        color: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: "16px",
        marginBottom: "50px",
    },
    textInput: {
        display: "block",
        width: "70%",
        margin: "0 auto",
        marginBottom: "30px",
    },
    buttonContainer: {
        width: "70%",
        margin: "0 auto",
    },
    buttonStyle: {
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
    helperText: {
        textAlign: "center",
        color: theme.palette.grey[600],
    },
    linkText: {
        marginLeft: "7px",
        color: theme.palette.grey[600],
        "&:hover": {
            textDecoration: "underline",
            color: theme.palette.grey[900],
        },
    },
}));

export default useStyles