import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: (props: { width: string; height: string }) => ({
        position: "relative",
        width: props.width,
        height: props.height,
    }),
    img: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        objectFit: "cover",
        [theme.breakpoints.down("xs")]: {
            position: "static",
        },
    },
    content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        position: "absolute",
    },
}));

export default useStyles