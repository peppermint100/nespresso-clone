import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
    },
    navTop: {
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        [theme.breakpoints.down("md")]: {
            height: "100%",
        },
    },
    navBottom: {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            height: "0%",
            display: "none",
        },
    },
    navTopLeft: {
        height: "100%",
        display: "flex",
    },
    logoImg: {
        width: "180px",
        height: "100%",
        lineHeight: "100%",
        [theme.breakpoints.down("md")]: {
            width: "120px",
        },
    },
    navTopRight: {
        width: "40%",
        height: "100%",
    },
    buttonContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonStyle: {
        width: "100px",
        borderColor: "#fff",
        color: "#fff",
        marginLeft: "5px",
        [theme.breakpoints.down("sm")]: {
            width: "40px",
            marginLeft: "5px",
        },
        [theme.breakpoints.up("md")]: {
            width: "110px",
        },
    },
    menuButtonStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "200px",
        height: "50px",
    },
    menuIcon: {
        color: "#fff",
        height: "100%",
        lineHeight: "100%",
        fontSize: "32px",
        marginRight: "5px",
    },
    drawerStyle: {
        width: "40vw",
        height: "100%",
        paddingTop: "20px",
        backgroundColor: theme.palette.secondary.main,
    },
    listItemIcon: {
        color: "#fff" 
    },
    listItemText: {
        fontSize: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px"
        }
    }
}));

export default useStyles;