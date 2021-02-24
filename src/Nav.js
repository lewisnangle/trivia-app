import {Link} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import Categories from './Categories.js';


function Nav() {



    return (
        <div>
        <nav>

        <Link to="/">
            Home
        </Link>
        <Link to="/categories">
            Catagories
        </Link>
        
        </nav>
        </div>
    );
    }

export default Nav;
