import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        backgroudColor: "red",
        padding: "10px",
        height: "170px",
        width: "100%",
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
            cursor: "pointer",
        },
    },
    divider: {
        background: theme.palette.grey[500],
        marginTop: "100px",
    },
    img: {
        [theme.breakpoints.down("sm")]: {
            transform: "scale(.8, .8)",
            marginRight: "10px",
        },
    },
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "160px",
        [theme.breakpoints.down("sm")]:{
            alignItems: "center"
        }
    },
    title: {
        fontSize: "14px",
        fontWeight: 600,
        marginBottom: "10px",
    },
    description: {
        fontSize: "13px",
        color: theme.palette.grey[400],
    },
    price: {
        float: "right",
        marginTop: "10px",
        color: theme.palette.success.main,
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        },
    },
    intensity: {
        marginBottom: "25px",
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

export default useStyles