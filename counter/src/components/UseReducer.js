import { useReducer } from "react";

let initialStage = 0;
let reducer = (counter,action) =>{
    console.log(counter,action)
    if (action.type === 'inc') {
            return counter + 1;
    }
    if (action.type === 'desc') {
        return counter - 1;
    }
    if (action.type === 'reset') {
        return counter = 0;
    }
    return counter;
}
const UseReducerExample = () => {
    const [counter,dispatch] = useReducer(reducer,initialStage)
    return(
        <>
            <h2>{counter}</h2>
            <button onClick={()=>dispatch({type:'desc'})}>-</button>
            <button onClick={()=>dispatch({type:'inc'})}>+</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </>
    )
}
export default UseReducerExample;