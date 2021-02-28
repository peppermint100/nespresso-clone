import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

interface Props {
    intensity: number;
}

const useStyles = makeStyles((theme) => ({
    block: {
        padding: "4px",
        backgroundColor: theme.palette.grey[700],
        marginLeft: "2px",
        display: "inline-block",
    },
}));

const IntensityIndicator: React.FC<Props> = ({ intensity }) => {
    const classes = useStyles();

    return (
        <div>{Array(intensity).fill(<span className={classes.block} />)}</div>
    );
};

export default IntensityIndicator;
