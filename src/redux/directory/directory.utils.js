

export const directoryPopular = (directory) => {

    return directory.data.reduce((accumulator, currentValue) => {

        if (accumulator.length < 10) {
            accumulator.push(currentValue);
            return accumulator
        }

        const replaceIndex = accumulator.findIndex(item => currentValue.itemsold > item.itemsold)

        if (replaceIndex !== -1 ) {
            accumulator[replaceIndex] = currentValue;
        }

        return accumulator

    }, [])

}


let checker = (arr, target) => target.every(v => arr.includes(v));



export const directoryCategory = (directory, categoryArray) => {


    // const directory.data = initialState[0]

    if (categoryArray[0].includes('Gift')) {

        let categoryArrayParsed = [categoryArray[0].replace(/\s+/g, '').toLowerCase()]
        
        console.log(categoryArray[0].replace(/\s+/g, '').toLowerCase())

        return directory.data.reduce((accumulator, currentValue) => {

            if (checker(currentValue.giftcat, categoryArrayParsed)) {
                accumulator.push(currentValue)
            }

            return accumulator;

        }, [])



    }

    return directory.data.reduce((accumulator, currentValue) => {


        if (checker(currentValue.categories, categoryArray)) {
            accumulator.push(currentValue)
        }

        return accumulator;

    }, [])

}





export const directoryItem = (directory, urlArray) => (


    directory.data.find(item => (
        item.title === urlArray[urlArray.length-1]

    ))


)

export const directorySellerItems = (directory, seller) => (
    directory.data.reduce((accumulator, item) =>{
        if (item.seller === seller){
            accumulator.push(item)
        }
        return accumulator
    }, [] )
)



export const directorySearchResults = (directory, searchInput) => {

    


    //LOGIC TO FILTER SEARCH RESULTS HERE

    return directory.reduce((accumulator, item)=>{
        const itemValuesString = Object.values(item).reduce( (accumulator, value) => {
            
            if (value && isNaN(value) && value[0] !== '/'){
                
                // accumulator.push(value.toString().toLowerCase())
                accumulator = accumulator + value.toString().toLowerCase()
            }
            
            return accumulator
        }, ''  )



        if (itemValuesString.includes(searchInput)){
            accumulator.push(item)
        }
        return accumulator






    }, [])


    //temporarily returning full directory

    // return directory;
}

    
export const directoryRelatedItems = (directory, categories) => {
    console.log('running?')

    const catCopy = [...categories]

    const array = [];

    const siblingCat = relatedItemsHelper(directory.data, catCopy, array)


    if (siblingCat.length < 11){
        catCopy.pop()
        console.log('poppp')
        return relatedItemsHelper(directory.data, catCopy, siblingCat)

    }

    return siblingCat;

}



const relatedItemsHelper = (directory, categories, startArray) => (

    directory.reduce((accumulator, item) => {
        if (accumulator.length > 10){
            return accumulator
        }

        if (item.categories.includes(categories[categories.length -1])){
            accumulator.push(item)
            return accumulator;
        }

        return accumulator;



    }, startArray)
)

