

export const directoryPopular = (directory) => {

    return directory.reduce((accumulator, currentValue) => {

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

    return directory.reduce((accumulator, currentValue) => {


        if (checker(currentValue.categories, categoryArray)) {
            accumulator.push(currentValue)
        }


        // if (currentValue.categories.includes(categoryArray)){
        //     accumulator.push(currentValue)
        // };

        return accumulator;

    }, [])

}


export const directoryItem = (directory, urlArray) => (


    directory.find(item => (
        item.title === urlArray[urlArray.length-1]

    ))


)

export const directorySellerItems = (directory, seller) => (
    directory.reduce((accumulator, item) =>{
        if (item.seller === seller){
            accumulator.push(item)
        }
        return accumulator
    }, [] )
)

    
export const directoryRelatedItems = (directory, categories) => {
    console.log('running?')

    const catCopy = [...categories]

    const array = [];

    const siblingCat = relatedItemsHelper(directory, catCopy, array)


    if (siblingCat.length < 11){
        catCopy.pop()
        console.log('poppp')
        return relatedItemsHelper(directory, catCopy, siblingCat)

    }

    // while (siblingCat.length < 10){
    //     categories.pop()
    //     console.log('poppp')
    //     siblingCat.concat(relatedItemsHelper(directory, categories, siblingCat))

    // }



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