import React from 'react'
import { BrowserRouter as Router, Routes,Link,Route} from 'react-router-dom';
import Home from '../Router/Home';
import Register from '../Router/Register';
import Login from '../Router/Login';
import Dashboard from '../Router/Dashboard';

const Routing = () => {
  return (
    <div>
        <Router>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>


            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing