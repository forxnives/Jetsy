import { createSelector } from 'reselect';
import { directoryPopular  } from './directory.utils' ;
import { directoryCategory } from './directory.utils';

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

