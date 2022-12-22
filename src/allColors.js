import React from "react";
import { Link } from "react-router-dom"

function AllColors({ colors }) {
    const otherColorLinks = Object.keys(colors).map(name => (
        <li>
            <Link to={`/colors/${name}`}>{name}</Link>
        </li>
    ))

    return (
        <div>
            <h1>WELCOME TO THE COLOR FACTORY READY TO GET REKTD????????????????????</h1>
            <h2><Link to={`/colors/new`}>ADD A NEW COLOR HERE</Link></h2>
            <h3>probably not a brand new color but it's fine</h3>
            <p>PICK SOME COLORS THAT ALREADY EXIST:</p>
            <ul>{otherColorLinks}</ul>
        </div>
    )
}

export default AllColors;