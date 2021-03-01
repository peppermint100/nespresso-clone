import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        margin: "0 auto",
        padding: "5px",
    },
    accordionContainer: {
        marginBottom: "10px",
    },
    accordion: {},
    accordionSummary: {
        backgroundColor: theme.palette.grey[400],
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
    orderInfoHeader: {
        fontWeight: 600,
    },
}));


export default useStyles