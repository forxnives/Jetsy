import React from 'react';
import { capitalize, shopStringFormat } from '../../../generalutils';
import { Link } from 'react-router-dom';



const ShopFilters = ({catArray}) => {

    console.log(catArray)


    const categoryLinks = catArray => {

        return catArray.map(category => {
            if (category == catArray[catArray.length-1]){
                return (<Link to={category}><div className='category-link'>{capitalize(shopStringFormat(category))}</div></Link>)
            }

            return (<Link to={'/shop/' + category}>{capitalize(shopStringFormat(category))}</Link>)
        })

    }


    return (

        <div className="shop-filters-container">

            <Link to='/shop/'> All Categories </Link>

            {

                catArray.length > 1 ?

            
                categoryLinks(catArray) :

                null
            
            
            }
            
            


        </div>
    )
}

export default ShopFilters;