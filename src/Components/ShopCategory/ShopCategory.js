import React from 'react';

import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { selectCategory } from '../../redux/directory/directory.selectors';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import ShopItemDisplay from '../ShopItemDisplay/ShopItemDisplay';
import ShopSubCat from '../ShopSubCat/ShopSubCat';



const ShopCategory = ({categoryItems, match}) => {



    return(

        <div>

            <Route exact path={`${match.path}`} component={ShopItemDisplay} />
            <Route path={`${match.path}/:category`} component={ShopSubCat} />

        </div>



    )

}


const mapStateToProps = (state, ownProps) => ({

    categoryItems: selectCategory(ownProps.match.url)(state)
})

export default connect(mapStateToProps)(ShopCategory);