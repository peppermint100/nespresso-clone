import React from "react";
import useStyles from "./styles";

interface Props {
    src: string;
    children: JSX.Element;
    width: string;
    height: string;
}

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
