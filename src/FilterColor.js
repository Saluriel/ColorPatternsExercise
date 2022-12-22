import React from "react";
import { Link, useParams } from "react-router-dom";
import Color from "./Color"

function FilterColors({ colors }) {
    const { color } = useParams();

    if (color in colors) {
        return <Color color={color} colorCode={colors[color]} />
    }
    return null;
}

export default FilterColors;