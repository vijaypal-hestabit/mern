import { useSearchParams } from "react-router-dom"

let Filter = ()=>{
    const [searchParams,setSearchParams] = useSearchParams()
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    return(
        <div>
            <p>My name is {name} and age is {age}.</p>
            <input type='text' onChange={(e)=>setSearchParams({name:name,age:age,des:e.target.value})} placeholder="set des on filter"/>
        </div>
    )
}
export default Filter;