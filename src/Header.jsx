import React from 'react';
import ReactDOM from 'react-dom';

export default function Header(){
    return(
    <header>
            <nav className="nav">
                    <img src="src/react-logo.png" className="nav-logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </nav>
    </header>
    )
}