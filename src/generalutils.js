import React from 'react'
import { Link } from 'react-router-dom';

export const capitalize = word => (
    word.charAt(0).toUpperCase() + word.slice(1)
)


export const shopStringFormat = string => {
    if (string.includes('&')){
        return string.replace('&', ' & ')
    }

    if (string.includes('_')){
        return string.replace('_', ' ')
    }

    return string
} 


export const urlToCatArray = (url, toExtract) => (

        url.replace(`/${toExtract}/`, '').split('/')

)

export const categoryPathParse = (url, toExtract) => {


    const parsedCategoryArray = urlToCatArray(url, `${toExtract}`)

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

export const ratingHelper = (rating) => {
    let ratingArray = [];

    for (let i=0; i < 5 ; i++) {

        if ( rating > 0) {
            ratingArray.push(<li className="rated"></li>);
            rating--;

        } else {
            ratingArray.push(<li></li>);
        }
    }
    return(ratingArray);
}




