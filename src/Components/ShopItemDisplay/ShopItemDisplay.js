import React, { useState } from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';
import { selectSortMode } from '../../redux/sort/sort.selectors';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import SortOption from './SortOption/SortOption';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { Link } from 'react-router-dom';




const ShopItemDisplay = ({categoryItems, match, cartHidden, sortMode}) => {

    const [ sortHidden, toggleSortHidden ] = useState(true);

    console.log(sortMode)

    

    const popularList = categoryItems.map( item => (

        <ShopItemCard item={item} />
    
    ))

    
    const categoryPathParse = (url) => {

        const parsedCategoryArray = url.replace('/shop/', '').split('/')

        const linkPathReduced = parsedCategoryArray.reduce((accumulator, category)=>{
            if (accumulator.length > 0) {
                
                accumulator.push(accumulator[accumulator.length-1] + '/' + category)
                
            }else {
                accumulator.push(category)
            }

            return accumulator
        }, [])


        
        const formattedCategoryArray = parsedCategoryArray.map(category => {



            if (category.includes('&')){
                
                return category.replace('&', ' & ')

            }

            if (category.includes('_')){
                return category.replace('_', ' ')
            }


            return category


        })

        return formattedCategoryArray.map((category, i)=> (
            <Link to={`/shop/${linkPathReduced[i]}`}> <span className='category-path-txt'>{formattedCategoryArray[i] + ' >'}</span> </Link>
        ))

        // for (let i in formattedCategoryArray){

        //     return <Link to={`/shop/${linkPathReduced[i]}`}> <span>{formattedCategoryArray[i]}</span> </Link>

        // }

    }




    return(

        <section>
                <div className="shop-header">   
                
                    {categoryPathParse(match.url)}

                    <div className="shop-header-lower">
                        <h1>{match.params.category.charAt(0).toUpperCase() + match.params.category.slice(1)}</h1>
                        <div onClick={() => toggleSortHidden(!sortHidden)} className={

                            cartHidden ?

                                sortHidden ?
                                'sort-dropdown':
                                'sort-dropdown hidden'

                                :
                                'sort-dropdown bg'



                        }>
                            <span>Sort By: {'Relevance'} </span>
                            
                            
                            {
                                



                                
                                
                                
                                
                                sortHidden ? 
                                null :
                                <div className="dropdown-menu">

                                    <div className='sort-top'><span>Sort By: {'Relevance'}</span></div>

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
        
                        <div className="shop-filters-container">
        
        
                        <div><h1>thing</h1></div>
                        </div>
        
        
        
        
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