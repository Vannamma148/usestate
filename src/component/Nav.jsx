import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Data from './Data';
import ColorPicker from './ColorPicker';
import App from '../App'
import '../assets/Nav.css'

export default function Nav() {
    return (
        <>
        <nav className="navbar">
            <div className="navlink">
            <Link to="/"> Counter </Link>
                <Link to="/employee"> Employee Data Entry </Link>
                <Link to="/color"> Color Picker </Link>
            </div>
        </nav>
          
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/employee' element={<Data />} />
                <Route path='/color' element={<ColorPicker />} />
            </Routes></>
    )
}
