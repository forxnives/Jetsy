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



const categoryPathParseHelper = unformattedArray => (

    unformattedArray.reduce((accumulator, category)=>{

        if (accumulator.length > 0) {
            
            accumulator.push(accumulator[accumulator.length-1] + '/' + category)
            
        }else {
            accumulator.push(category)
        }

        console.log(accumulator)

        return accumulator
    }, [])

)



export const categoryPathParse = (url, toExtract, existingCat) => {

    if (existingCat) {

        const linkPathReduced = categoryPathParseHelper(existingCat)

        const formattedCategoryArray = existingCat.map(category => (

            shopStringFormat(category)
    
        ))

        return formattedCategoryArray.map((category, i)=> (
            <Link to={`/shop/${linkPathReduced[i]}`}> <span className='category-path-txt'>{capitalize(formattedCategoryArray[i] + ' >')}</span> </Link>
        ))

    }else{
        const parsedCategoryArray = urlToCatArray(url, `${toExtract}`)

        const linkPathReduced = categoryPathParseHelper(parsedCategoryArray)

        const formattedCategoryArray = parsedCategoryArray.map(category => (

            shopStringFormat(category)
        ))

        return formattedCategoryArray.map((category, i)=> (
            <Link to={`/shop/${linkPathReduced[i]}`}> <span className='category-path-txt'>{capitalize(formattedCategoryArray[i] + ' >')}</span> </Link>
        ))
    }

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


export const linkPathFromCatArray = catArray => {

    return catArray.reduce((accumulator, category) => {

        return accumulator + category + '/';
    },'/product/')
}
