import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';
import { selectSortMode } from '../../redux/sort/sort.selectors';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import SortOption from './SortOption/SortOption';
import ShopFilters from './ShopFilters/ShopFilters';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { Link } from 'react-router-dom';
import { capitalize, shopStringFormat, urlToCatArray } from '../../generalutils';




const ShopItemDisplay = ({categoryItems, match, cartHidden, sortMode}) => {

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
    

    const popularList = categoryItems.map( item => (

        <ShopItemCard item={item} />
    
    ))

    
    const categoryPathParse = (url) => {

        const parsedCategoryArray = urlToCatArray(url)

        const linkPathReduced = parsedCategoryArray.reduce((accumulator, category)=>{
            if (accumulator.length > 0) {
                
                accumulator.push(accumulator[accumulator.length-1] + '/' + category)
                
            }else {
                accumulator.push(category)
            }

            return accumulator
        }, [])


        
        const formattedCategoryArray = parsedCategoryArray.map(category => (


            shopStringFormat(category)



        ))

        return formattedCategoryArray.map((category, i)=> (
            <Link to={`/shop/${linkPathReduced[i]}`}> <span className='category-path-txt'>{capitalize(formattedCategoryArray[i] + ' >')}</span> </Link>
        ))



    }

    const shopCategoryTitle = category => (

        capitalize(shopStringFormat(category))
    )




    return(

        <section>
                <div className="shop-header">   
                
                    {categoryPathParse(match.url)}

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
        
                        <ShopFilters catArray={urlToCatArray(match.url)} />
        
                        <div className='shop-items-container'>
        
                        {popularList}
        
                        </div>
        
                    </div>
        
                {/* </div> */}

        </section>


    )

}


const mapStateToProps = (state, ownProps) => ({

    categoryItems: selectCategory(ownProps.match.url)(state),
    cartHidden: selectCartHidden(state),
    sortMode: selectSortMode(state)
})

export default connect(mapStateToProps)(ShopItemDisplay);