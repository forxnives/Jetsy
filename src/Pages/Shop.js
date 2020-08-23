import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ShopCategory from '../Components/ShopCategory/ShopCategory';
import ShopHome from '../Components/ShopHome/ShopHome';



const Shop = ({match}) => {

    

    return (
    
        <div>

            <Route exact path={`${match.path}`} component={ShopHome} />
            <Route path={`${match.path}/:category`} component={ShopCategory} />

        </div>


    )
}


export default withRouter(Shop);