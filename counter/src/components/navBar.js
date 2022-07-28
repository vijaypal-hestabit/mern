import { NavLink } from "react-router-dom"

let NavBar = () =>{
    return(
        <div className="nav">
            <NavLink className='nav-link' to={'/'}>Home</NavLink>
            <NavLink className='nav-link' to={'about'}>About</NavLink>
            <NavLink className='nav-link' to={'services'}>Services</NavLink>
            <NavLink className='nav-link' to={'blog'}>Blog</NavLink>
            <NavLink className='nav-link' to={'contactus'}>ContactUs</NavLink>
        </div>
    )
}
export default NavBar;