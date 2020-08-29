import { sortActionTypes } from './sort.types';

export const setSortType = (sortType) => ({
    type: sortActionTypes.SET_SORT_MODE,
    payload: sortType
})

