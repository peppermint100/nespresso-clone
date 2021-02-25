import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "25px 0",
    },
    jumboContent: {},
    jumboText: {
        color: "#fff",
        fontSize: "32px",
        letterSpacing: "4px",
        textAlign: "center",
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "32px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "20px",
        },
    },
    jumboTextLogo: {
        width: "600px",
        margin: "0 auto",
        [theme.breakpoints.down("md")]: {
            width: "400px",
        },
    },
    vertuoText: {
        color: "#000",
        fontSize: "32px",
        letterSpacing: "4px",
        textAlign: "center",
        transform: "translateY(-200%)",
        [theme.breakpoints.down("sm")]: {
            transform: "translateY(-300%)",
            fontSize: "32px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "20px",
        },
    },
    vertuoLink: {
        display: "block",
        color: "#000",
        fontSize: "18px",
        letterSpacing: "2px",
        textAlign: "center",
        transform: "translateY(-350%)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
        "&:hover": {
            textDecoration: "underline",
        },
    },
    explorationText: {
        color: "#fff",
        fontSize: "24px",
        letterSpacing: "2px",
        textAlign: "center",
        marginBottom: "18px",
        transform: "translateY(-200%)",
        [theme.breakpoints.down("md")]: {
            fontSize: "20px",
        },
    },
    explorationLink: {
        display: "block",
        color: "#fff",
        fontSize: "18px",
        letterSpacing: "2px",
        textAlign: "center",
        transform: "translateY(-350%)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));

export default useStyles