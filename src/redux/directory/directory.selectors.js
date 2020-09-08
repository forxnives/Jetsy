import { createSelector } from 'reselect';
import { directoryPopular  } from './directory.utils' ;
import { directoryCategory, directoryItem, directorySellerItems, directoryRelatedItems } from './directory.utils';

export const selectDirectory = state => state.directory;

export const selectPopularItems = createSelector(

    [selectDirectory],
    directory => directoryPopular(directory)

)

export const selectCategory = url => {

    // console.log(url)

    return createSelector(

    [selectDirectory],
    directory => directoryCategory(directory, url.replace('/shop/', '').split('/'))

    )
}

export const selectItem = url => {

    // console.log(url)


    return createSelector(


        [selectDirectory],
        directory => directoryItem(directory, url.replace('/shop/', '').split('/') )

    )

}

export const selectSellerItems = seller => {

    return createSelector(

        [selectDirectory],
        directory => directorySellerItems(directory, seller)
    )
}

export const selectRelatedItems = categories => {

    return createSelector(

        [selectDirectory],
        directory => directoryRelatedItems(directory, categories)
    )
}

