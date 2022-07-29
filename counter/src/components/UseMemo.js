import React, { useMemo } from 'react'

const UseMemoExample = () => {
    let [laptopCounter, setLaptopCounter] = React.useState(0);
    let [mobileCounter, setMobileCounter] = React.useState(0);

    let multiplyMemoForLaptop = useMemo(function multiMemo() {
        console.log('inside memo')
        return (
            laptopCounter * 10
        )
    },[laptopCounter])

    let laptopCounterHandler = () => {
        setLaptopCounter(laptopCounter + 1)
    }

    let mobileCounterHandler = () => {
        setMobileCounter(mobileCounter + 1)
    }
    return (
        <div>
            <h2>{multiplyMemoForLaptop}</h2>
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
export default UseMemoExample;