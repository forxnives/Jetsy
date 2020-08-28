import sortActionTypes from './sort.types';

const setSortType = (sortType) => ({
    type: sortActionTypes.SET_SORT_MODE,
    payload: sortType
})

export default setSortType;