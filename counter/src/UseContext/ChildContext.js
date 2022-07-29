import React, { useContext } from "react"
import { fname } from "../App";

let ChildContext = () => {
    let f_name = useContext(fname)
    return (
        <>
            <h2>Get name from app.js :- {f_name}</h2>
            <div>Child Context</div>
        </>
    )
}

export default ChildContext;