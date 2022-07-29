import ChildContext from "./ChildContext";

let ParentContext = () => {
    return (
        <>
            <div>Parent Context</div>
            <ChildContext />
        </>
    )
}
export default ParentContext;