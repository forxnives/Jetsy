import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { selectCategory, selectSearchResults } from '../../redux/directory/directory.selectors';
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




const ShopItemDisplay = ({searchResults, categoryItems, match, cartHidden, sortMode, filters}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [ sortHidden, toggleSortHidden ] = useState(true);


    const SORT_MAP = {
        'Highest Price': (a, b) => b.price - a.price,
        'Lowest Price': (a, b) => a.price - b.price,
        'Relevance': (a, b) =>  0
      };
      


    const itemSort = (categoryItems, sortMode) => {

        return categoryItems.sort(SORT_MAP[sortMode.sortType])

    }

    itemSort(categoryItems, sortMode)
    itemSort(searchResults, sortMode)

    // console.log(searchResults)
    
    const categoryItemsFiltered = productFilter(categoryItems, filters.filters)

    const searchItemsFiltered = productFilter(searchResults, filters.filters)

    const searchItemsList = searchItemsFiltered.map( item => (
        <ShopItemCard item={item} />
    ))


    const catItemsList = categoryItemsFiltered.map( item => (

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



    return(

        <section>
                <div className="shop-header">   

                    
                    {
                    match.params.category &&
                    categoryPathParse(match.url, 'shop')
                    }

                    <div className="shop-header-lower">


                        {
                        match.params.category ?    
                            (<h1>{shopCategoryTitle(match.params.category)}</h1>):
                            (<h1>{shopCategoryTitle(`Search Results for '${match.params.searchQuery}'`)}</h1>)
                            
                            
                        }



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

                        {

                            match.params.category ? 
                            (<ShopFilters catArray={urlToCatArray(match.url, 'shop')} subCatArray={subCatArray(categoryItems, match.params.category)} />):
                            (<ShopFilters catArray={urlToCatArray(match.url, 'search')} subCatArray={subCatArray(categoryItems, match.params.category)} />)
                        }
        
                        
        
                        <div className='shop-items-container'>
        
                        {

                        match.params.category ?
                        (
                            catItemsList.length ?
                            (catItemsList) :
                            (<h1>No Items Available</h1>)
                        ):
                        (
                            searchItemsList.length ?
                            (searchItemsList) :
                            (<h1>No Items Available</h1>)
                        )
                                                
                        
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
    searchResults: selectSearchResults(ownProps.match.params.searchQuery)(state)



})

export default connect(mapStateToProps)(ShopItemDisplay);