import { createSelector } from 'reselect';
import { directoryPopular  } from './directory.utils' ;
import { directoryCategory, directoryItem } from './directory.utils';

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

