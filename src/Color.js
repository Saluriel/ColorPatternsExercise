import React from 'react';
import { Link } from "react-router-dom"

function Color({ color, colorCode }) {

    return (
        <div style={{ backgroundColor: colorCode }}>
            <h1>THIS COLOR IS {color.toUpperCase()} I HOPE YOU LIKE IT IF NOT I GUESS YOU CAN LEAVE</h1>
            <Link to="/">Leave</Link>
        </div>
    )
}

export default Color;