import React,{ useEffect } from "react"

let UseEffectExample = () => {
    let [laptopCounter, setLaptopCounter] = React.useState(0);
    let [mobileCounter, setMobileCounter] = React.useState(0);

    // // call when DOM mount, update or unmount
    // useEffect(() => {
    //     console.log('inside use Effect')
    // })

    // call when first render
    useEffect(() => {
        console.log('inside first render')
    },[])

    // // call when laptop DOM mount and update state laptopCounter
    // useEffect(() => {
    //     console.log('inside laptopCounter use Effect')
    // },[laptopCounter])

    // // call when laptop DOM mount and update state mobileCounter
    // useEffect(() => {
    //     console.log('inside mobileCounter use Effect')
    // },[mobileCounter])

    let laptopCounterHandler = () => {
        setLaptopCounter(laptopCounter + 1)
    }

    let mobileCounterHandler = () => {
        setMobileCounter(mobileCounter + 1)
    }

    return (
        <div>
            <div>
                <div>Laptop {laptopCounter}</div>
                <button onClick={laptopCounterHandler}>+</button>
            </div>
            <div>
                <div>Mobile {mobileCounter}</div>
                <button onClick={mobileCounterHandler}>+</button>
            </div>
        </div>
    )
}

export default UseEffectExample;