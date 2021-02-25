import { makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
    src: string;
    children: JSX.Element;
    width: string;
    height: string;
}

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

const ImageOverlayContainer: React.FC<Props> = ({
    src,
    children,
    width,
    height,
}) => {
    const classes = useStyles({ width, height });

    return (
        <div className={classes.container}>
            <img src={src} className={classes.img} alt="overlay" />
            <div className={classes.content}>{children}</div>
        </div>
    );
};

export default ImageOverlayContainer;
