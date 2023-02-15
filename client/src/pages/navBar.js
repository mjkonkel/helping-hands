import React from "react";

function NavBar({ currentPages, HandlePagesChange }) {
    return (
        <ul>

            <li>
                <a href='#AboutMe'
                    onClick={() => HandlePageChange('AboutMe')}
                    className={currentPages === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            <li>
                <a href='#Meals'
                    onClick={() => HandlePageChange('Meals')}
                    className={currentPages === 'Meals' ? 'nav-link active' : 'nav-link'}
                >
                    Meals
                </a>
            </li>
            <li>
                <a href='#Activites'
                    onClick={() => HandlePageChange('Activites')}
                    className={currentPages === 'Activites' ? 'nav-link active' : 'nav-link'}
                >
                    Activities
                </a>
            </li>
            <li>
                <a href='#Updates'
                    onClick={() => HandlePageChange('Updates')}
                    className={currentPages === 'Updates' ? 'nav-link active' : 'nav-link'}
                >
                    Updates
                </a>
            </li>
            <li>
                <a href='#GoFundMe'
                    onClick={() => HandlePageChange('GoFundMe')}
                    className={currentPages === 'GoFundMe' ? 'nav-link active' : 'nav-link'}
                >
                    GoFundMe
                </a>
            </li>
        </ul>
    );
}

export default NavBar
