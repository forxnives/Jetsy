
export const productFilter = (productArray, filterArray) => {

    return filterArray.reduce((accumulator, filterObj) => {

        return accumulator = filterHelper(accumulator, filterObj)

    }, productArray)

}

const optionFilterMap = {
    'ready-to-ship': product => (product.instock > 0)
}


const filterHelper = (productArray, filterObj) => {


    switch (filterObj.filter) {
        case 'price':
            return productArray.filter(product => (
                filterObj.params[0] < product.price && product.price < filterObj.params[1] 
            ))

        case 'rating':
            return productArray.filter(product => (
                filterObj.params[0] <= product.rating
            ))

        case 'option':
            return productArray.filter(optionFilterMap[filterObj.params])


        default:
            return null
    }

}





















//We need to have an array of arrays for the filter types/pparameters, with first item in each nested array being the filter type, and the subsequent items the parameters 
//we will then have a function that takes the productlist and filterarray and reduces the filterarray, filtering using another function with a switch statement and returning to the accumulator
//the big function will then return the accumulator, which will be the fully filtered product list.



// const filterHelper = (productArray, filter, filterParams) => {
//     switch (filter) {
//         case 'options':
//             productArray.filter()
//     }
// }

// export const productFilter = (productArray, filterObject) => {

//     for (let property in filterObject){

//         productArray = filterHelper(productArray, property, filterObject[property])

//     }

// }