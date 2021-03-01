import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px 0",
    },
    header: {
        fontSize: "27px",
        fontWeight: 600,
        margin: "40px 0",
    },
    formHeader: {
        backgroundColor: theme.palette.grey[300],
        height: "30px",
        padding: "18px",
        color: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: "13px",
        marginBottom: "50px",
    },
    table: {},
    imgNameContainer: {
        display: "flex",
    },
    imgWrapper: {},
    img: {
        width: "50px",
        objectFit: "cover",
    },
    itemName: {
        transform: "translateX(60px)",
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            transform: "translateX(20px)",
        },
    },
    price: {},
    amount: {},
    total: {},
    deleteButton: {
        cursor: "pointer",
        transition: "opacity .2s ease-in-out",
        "&:hover":{
            opacity: .5
        }
    },
    orderConfirmContainer: {
        display: "flex",
        justifyContent: "flex-end",
        margin: "20px 0",
    },
    orderConfirmButton: {
        backgroundColor: theme.palette.success.main,
        color: "#fff",
        width: "250px",
        height: "50px",
        fontSize: "16px",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: theme.palette.success.light,
        },
    },
}));

export default useStyles