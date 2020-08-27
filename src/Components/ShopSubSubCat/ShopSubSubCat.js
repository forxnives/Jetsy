import React from 'react';

import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { selectCategory } from '../../redux/directory/directory.selectors';

import ShopItemDisplay from '../ShopItemDisplay/ShopItemDisplay';



const ShopSubSubCat = ({categoryItems, match}) => {





    return(

        <div>

            <Route exact path={`${match.path}`} component={ShopItemDisplay} />
            <Route path={`${match.path}/:category`} component={ShopItemDisplay} />

        </div>



    )

}


const mapStateToProps = (state, ownProps) => ({

    categoryItems: selectCategory(ownProps.match.url)(state)
})

export default connect(mapStateToProps)(ShopSubSubCat);