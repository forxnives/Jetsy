

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
