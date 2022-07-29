import React from "react";

let Child = (props) => {
    props.fun()
    console.log('inside child');
    return <h2>Child {props.mobileCounter}</h2>
}

export default React.memo(Child);