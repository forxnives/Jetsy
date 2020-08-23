

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


export const directoryCategory = (directory, categoryParam) => {

    return directory.reduce((accumulator, currentValue) => {

        if (currentValue.categories.includes(categoryParam)){
            accumulator.push(currentValue)
        };

        return accumulator;

    }, [])

}
