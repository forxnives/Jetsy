import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { connect } from 'react-redux'

import ShopCategory from '../Components/ShopCategory/ShopCategory';
import ShopHome from '../Components/ShopHome/ShopHome';
import ShopItemDisplay from '../Components/ShopItemDisplay/ShopItemDisplay';



const SearchPage = ({match, history}) => {

    console.log(match.params)

    return (
    
        <div>

            {/* <Route exact path={`${match.path}`} component={ShopItemDisplay} /> */}
            <Route path={`${match.path}/:searchQuery`} component={ShopItemDisplay} />

        </div>


    )
}


// const mapStateToProps = state => ({
//     searchResults: 
// })

export default withRouter(SearchPage);