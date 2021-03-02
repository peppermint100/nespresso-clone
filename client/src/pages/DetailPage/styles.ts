import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: 650,
        margin: "30px 0",
    },
    capsuleImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scale(.9, .9)",
        objectPosition: "83% 0%",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
machineImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scale(.9, .9)",
        objectPosition: "80% 0%",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    detailContainer: {
        height: "100%",
        backgroundColor: theme.palette.grey[200],
    },
    itemName: {
        fontSize: "24px",
        fontWeight: 600,
        marginBottom: "30px",
    },
    detailInnerContainer: {
        padding: "30px",
    },
    detailInfo: {
        marginBottom: "10px",
    },
    detailLabel: {
        fontSize: "14px",
        fontWeight: 600,
    },
    detailContent: {
        fontSize: "14px",
    },
    button: {
        backgroundColor: theme.palette.success.main,
        width: "100%",
        color: "#fff",
        height: "40px",
        marginTop: "50px",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: theme.palette.success.light,
        },
    },
    description: {
      color: theme.palette.grey[600],
      fontSize: "10px",
      margin: "20px 0"
    }
}));


export default useStyles