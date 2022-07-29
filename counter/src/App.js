import './App.css';
import './components/css/nav.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/home';
import Blog from './components/blog';
import About from './components/about';
import ContactUs from './components/contactus';
import Services from './components/services';
import NavBar from './components/navBar';
import Users from './components/users';
import Filter from './components/filter';
// import HOC from './components/hoc';


function App() {
    return (
        <div className='App'>
            {/* <HOC /> */}
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/users/:name' element={<Users />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
