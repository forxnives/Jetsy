import { createSelector } from 'reselect';
import { directoryPopular  } from './directory.utils' ;
import { directoryCategory } from './directory.utils';

export const selectDirectory = state => state.directory;

export const selectPopularItems = createSelector(

    [selectDirectory],
    directory => directoryPopular(directory)

)

export const selectCategory = categoryParam => 

    createSelector(

    [selectDirectory],
    directory => directoryCategory(directory, categoryParam)

    )


