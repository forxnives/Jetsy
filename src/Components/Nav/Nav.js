import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';


import SearchBar from './SearchBar/SearchBar';
import NavButtons from './NavButtons/NavButtons';
import Dropdown from './Dropdown/Dropdown';


// import Dropdown from '../..'



const Nav = () => {
    return (

        <section className="nav-section">
        
            <div className="nav-container nav-container-upper">

                <header className="nav">
                    <Link to='/'>
                        <div className="nav-logo">
                            <img src={logo} alt="temp-logo" className="nav-logo__img"/>
                        </div>
                    </Link>

                    <SearchBar />

                    <NavButtons />

                </header>
            
            </div>

            <div className="nav-container nav-container-lower"> 

                <Dropdown />

            </div>

        </section>

    )

}

export default withRouter(Nav);