import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';
import { selectSortMode } from '../../redux/sort/sort.selectors';
import { selectFilters } from '../../redux/filters/filters.selectors';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import SortOption from './SortOption/SortOption';
import ShopFilters from './ShopFilters/ShopFilters';
import About from '../About';


import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { Link } from 'react-router-dom';

import { productFilter } from './ShopFilters/filterutils';
import { capitalize, shopStringFormat, urlToCatArray, categoryPathParse } from '../../generalutils';




const ShopItemDisplay = ({categoryItems, match, cartHidden, sortMode, filters}) => {

    const [ sortHidden, toggleSortHidden ] = useState(true);

    console.log(filters)

    const SORT_MAP = {
        'Highest Price': (a, b) => b.price - a.price,
        'Lowest Price': (a, b) => a.price - b.price,
        'Relevance': (a, b) =>  0
      };
      


    const itemSort = (categoryItems, sortMode) => {

        return categoryItems.sort(SORT_MAP[sortMode.sortType])

    }

    itemSort(categoryItems, sortMode)


    
    const categoryItemsFiltered = productFilter(categoryItems, filters.filters)


    const popularList = categoryItemsFiltered.map( item => (

        <ShopItemCard item={item} />
    
    ))

    const subCatArray = (categoryItems, category) => (

        categoryItems.reduce((accumulator, item) => {
            if (item.categories.includes(category)){

                let cat = item.categories[item.categories.indexOf(category) + 1] 

                if (cat){
                    if (!accumulator.includes(cat)){
                        accumulator.push(cat)
                    }
                }

                return accumulator
            }return accumulator
        }, [])

    )



    const shopCategoryTitle = category => (

        capitalize(shopStringFormat(category))
    )

    console.log(match.url)



    console.log(popularList)


    return(

        <section>
                <div className="shop-header">   

                
                    {categoryPathParse(match.url, 'shop')}

                    <div className="shop-header-lower">
                        <h1>{shopCategoryTitle(match.params.category)}</h1>
                        <div onClick={() => toggleSortHidden(!sortHidden)} className={

                            cartHidden ?

                                sortHidden ?
                                'sort-dropdown':
                                'sort-dropdown hidden'

                                :
                                'sort-dropdown bg'

                        }>
                            <span>Sort By: {sortMode.sortType} </span>
                            
                            {
                                
                                sortHidden ? 
                                null :
                                <div className="dropdown-menu">

                                    <div className='sort-top'><span>Sort By: {sortMode.sortType}</span></div>

                                    <SortOption sortType={'Relevance'} />
                                    <SortOption sortType={'Highest Price'} />
                                    <SortOption sortType={'Lowest Price'} />

                                </div>

                            }
                            
                                                        
                        </div>
                    </div>

                </div>
        
                {/* <div className='shop-section'> */}
        
        
                    <div className='shop-section'>
        
                        <ShopFilters catArray={urlToCatArray(match.url, 'shop')} subCatArray={subCatArray(categoryItems, match.params.category)} />
        
                        <div className='shop-items-container'>
        
                        {
                        
                        
                        popularList.length ?
                        (popularList) :
                        (<h1>No Items Available</h1>)
                        
                        
                        
                        }
        
                        </div>
        
                    </div>
        
                <About />

        </section>


    )

}



const mapStateToProps = (state, ownProps) => ({
        
    
    categoryItems: selectCategory(ownProps.match.url)(state),
    // categoryItems: selectCategory('/shop/giftsforher')(state),
    cartHidden: selectCartHidden(state),
    sortMode: selectSortMode(state),
    filters: selectFilters(state),



})

export default connect(mapStateToProps)(ShopItemDisplay);