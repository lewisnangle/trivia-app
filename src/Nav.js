import {Link} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import Categories from './Categories.js';


function Nav() {



    return (
        <div>
            <nav>
                <Link to="/">
                    <h3 className = 'text'>Home</h3>
                </Link>
                <Link to="/categories">
                    <h3 className='text'>Categories</h3>
                </Link>
            </nav>
        </div>
    );
    }

export default Nav;
