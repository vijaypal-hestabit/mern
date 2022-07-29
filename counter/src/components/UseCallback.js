import Child from "./Child"
import React from 'react'

let UseCallbackExample = () => {
    let [laptopCounter, setLaptopCounter] = React.useState(0);
    let [mobileCounter, setMobileCounter] = React.useState(['Component']);

    let laptopCounterHandler = () => {
        setLaptopCounter(laptopCounter + 1)
    }

    const fun = React.useCallback(() => {
        console.log('props function')
    },mobileCounter)

    return (
        <div>
            <Child mobileCounter={mobileCounter} fun={fun} />

            <div>
                <div>Laptop {laptopCounter}</div>
                <button onClick={laptopCounterHandler}>+</button>
            </div>
        </div>
    )
}
export default UseCallbackExample;