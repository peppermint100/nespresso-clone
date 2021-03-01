import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "20px 0",
    },
    listContainer: {
        height: 450,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            height: 80,
            justifyContent: "space-around",
        },
    },
    listItem: {
        marginTop: "5px",
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
            "&:hover": {
                backgroundColor: theme.palette.grey[400],
            },
        },
        [theme.breakpoints.between("xs", "md")]: {
            display: "flex",
            height: 80,
            "&:hover": {
                color: theme.palette.grey[400],
            },
        },
    },
    formHeader: {
        backgroundColor: theme.palette.grey[300],
        height: "30px",
        padding: "18px",
        color: theme.palette.grey[600],
        fontWeight: 600,
        fontSize: "15px",
        marginBottom: "20px",
    },
    listIcon: {
        height: "70px",
        lineHeight: "70px",
        display: "inline-block",
        transform: "translateY(10%)",
        marginLeft: "10px",
    },
    listItemName: {
        marginLeft: "10px",
        fontSize: "14px",
        height: "70px",
        lineHeight: "70px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "12px",
        },
    },
    content: {
        minHeight: 450,
    },
}));

export default useStyles