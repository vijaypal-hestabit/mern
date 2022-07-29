import React from 'react'

const UseRefExample = () =>{
    let inputRef = React.useRef(null)

    let inputHandler = () => {
        console.log(inputRef)
        inputRef.current.value = 'vijay'
        inputRef.current.focus();
        // inputRef.current.style.display = 'none'
    }
    
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={inputHandler}>button</button>
        </div>
    )
}
export default UseRefExample;