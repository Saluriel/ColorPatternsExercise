import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewColorForm({ addColor }) {
    const [form, updateForm] = useState({ name: "", colorCode: "#000000" })

    function handleChange(e) {
        e.persist();
        updateForm(i => ({ ...i, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.colorCode })

    }

    const { colorCode, name } = form;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Color name"
                        onChange={handleChange}
                        value={name} />
                </div>
                <div>
                    <label htmlFor="colorCode">Color hex code</label>
                    <input
                        type="color"
                        name="colorCode"
                        id="colorCode"
                        onChange={handleChange}
                        value={colorCode} />
                </div>
                <input type="Submit" value="Add" readOnly />
            </form>
            <Link to={"/colors"}>Go home</Link>
        </div >
    )
}

export default NewColorForm;