
import { filterActionTypes } from './filters.types';

export const updateFilters = (filterArray) => ({

    type: filterActionTypes.SET_ITEM_FILTERS,
    payload: filterArray

})

