import React from 'react';


import './Home.css';

function Home(props) {

	return (
    <div className="Home">
    <div id="app">

        <div id="sidebar" className='active'>
            <div className="sidebar-wrapper active">
                <div className="sidebar-menu">
                    
                    <ul className="menu">
                
                        <li className='sidebar-title'>Submenu 1</li>
                
                        <li className="sidebar-item active ">
                            <a href="index.html" className='sidebar-link'>
                                <span>Item 1</span>
                            </a>
                        </li>

                        <li className="sidebar-item ">
                            <a href="index.html" className='sidebar-link'>
                                <span>Item 2</span>
                            </a>
                        </li>

                        <li className='sidebar-title'>Submenu 2</li>
                
                        <li className="sidebar-item ">
                            <a href="form-layout.html" className='sidebar-link'>
                                <span>Item 1</span>
                            </a>
                        </li>
                    </ul>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Home;
