import { Slider } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

interface Props {
    defaultValue: number;
    min: number;
    max: number;
    step: number;
    headerText: string;
    sliderAmount: (value: any) => any;
}
const CapsuleSlider: React.FC<Props> = ({
    defaultValue,
    min,
    max,
    step,
    headerText,
    sliderAmount,
}) => {
    const classes = useStyles();
    return (
        <div>
            <header className={classes.header}>{headerText}</header>
            <Slider
                className={classes.slider}
                defaultValue={defaultValue}
                getAriaValueText={sliderAmount}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={step}
                marks
                min={min}
                max={max}
            />
        </div>
    );
};

export default CapsuleSlider;
