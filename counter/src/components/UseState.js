import React from 'react'
const UseStateExample = () =>{
    let [counter,setCounter] = React.useState(0);

    // let counter = 0;  // not update dom without use State.
    let counterHandler = () =>{
        setCounter(counter + 1)
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={counterHandler}>+</button>
        </div>
    )
}
export default UseStateExample;