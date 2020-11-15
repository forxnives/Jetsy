import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchQuery } from '../../../redux/directory/directory.actions';
import { withRouter } from 'react-router-dom';



const SearchBar = ({history}) => {



    const [searchInput, setSearchInput] = useState('');


    const handleSearchSubmit = (e) => {

        e.preventDefault()
        const searchField = document.querySelector('.nav-form-search__input');
        searchField.value = '';

        // setSearchQuery(searchInput)
        history.push(`/Jetsy/search/${searchInput}`)

    }


    return (
        
        <div className="nav-form">
            <form onSubmit={ (e) => handleSearchSubmit(e) } className="nav-form-search">
                <input onChange={(e) => setSearchInput(e.target.value)} className="nav-form-search__input" type="text/submit" name="" placeholder="Search for items or sellers" />
                <a onClick={(e) => handleSearchSubmit(e)} className="nav-form-search__btn" href="!#">
                <span type='submit' className="nav-form-search__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>
                </span>
                </a>

            </form>
        </div>
    )
}





export default withRouter(SearchBar);