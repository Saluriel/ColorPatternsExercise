import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AllColors from "./allColors"
import FilterColor from "./FilterColor"
import NewColorForm from "./NewColorForm";


function AllRoutes() {
    // grab colors from local storage or use the 3 colors the app comes with
    let firstColors;
    if (localStorage.getItem("colors") === 'undefined') {
        firstColors = {
            lilac: "#c894e6",
            green: "#66cf6e",
            orange: "#e8b428",
        };
    } else {
        firstColors =
            JSON.parse(localStorage.getItem("colors"))
    }

    // set initial state for the colors
    const [colors, setColors] = useState(firstColors);

    // update local storage every time we update colors
    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [colors])

    // add the new colors to the colors object
    function addColor(newColor) {
        setColors(currentColors => ({ ...currentColors, ...newColor }))
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/colors" element={<AllColors colors={colors} />} />
                <Route path="/colors/:color" element={<FilterColor colors={colors} />} />
                <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
                <Route path="*" element={<Navigate to="/colors" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes;