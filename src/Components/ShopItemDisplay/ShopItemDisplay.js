import React from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';
import ShopItemCard from '../ShopItemCard/ShopItemCard';



const ShopItemDisplay = ({categoryItems, match}) => {

    const popularList = categoryItems.map( item => (

        <ShopItemCard item={item} />
    
    ))

    
    const urlParse = (url) => {

        const parsedUrl = url.replace('/shop/', '').split('/')
        
        console.log(parsedUrl)


    }

    urlParse(match.url)

    return(

        <section>
            <div className="shop-header">
                <h1>{match.url}</h1>

            </div>

            <div className='shop-section'>

                <div className="shop-filters-container">


                <div><h1>thing</h1></div>
                </div>




                <div className='shop-items-container'>

                {popularList}

                </div>

            </div>

        </section>



    )

}


const mapStateToProps = (state, ownProps) => ({

    categoryItems: selectCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(ShopItemDisplay);