import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

import ShopCategory from '../Components/ShopCategory/ShopCategory';
import ShopHome from '../Components/ShopHome/ShopHome';
import ShopItemDisplay from '../Components/ShopItemDisplay/ShopItemDisplay';



const Shop = ({match}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
    
        <div>

            <Route exact path={`${match.path}`} component={ShopHome} />
            <Route path={`${match.path}/:category`} component={ShopCategory} />

        </div>


    )
}


export default withRouter(Shop);