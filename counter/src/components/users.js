import { useParams } from "react-router-dom";

let Users =()=>{
    const params = useParams();
    const {name} = params;
console.log(name)
    return(
        <div>
            <h2>This is {name}'s page.</h2>
        </div>
    )
}
export default Users;