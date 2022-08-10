import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

export default function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => 
                {setExpandNavbar((prev) => !prev);
                }}
            >
                <ReorderIcon /> {" "}
            </button>
        </div>
        <div className='links'>
            <Link to = "/"> Home </Link>
            <Link to = "/Blog"> Blogs</Link>
            <Link to = "/Projects"> Projects </Link>
            <Link to = "/Resume"> Resume </Link>
            <Link to = "/Experiences"> Experiences </Link>

        </div>
    </div>
  )
}
