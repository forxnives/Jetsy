import React from 'react';
import { connect } from 'react-redux';
import { setSortType } from '../../../redux/sort/sort.actions';
import { selectSortMode } from '../../../redux/sort/sort.selectors';



const SortOption = ({sortType, sortModeSelect, currentSortMode}) => {


    const modeSelected = (currentSortMode, sortType) => {

        if (currentSortMode.sortType === sortType){
            return true
        }
        return false



    }





    return (
        <div  onClick={() => sortModeSelect(sortType)}  className="sort-option">


            <span>{sortType}</span>

            {

                modeSelected(currentSortMode, sortType) ?

                <span className='checkmark'>&#10003;</span> :

                null

            }


    
        </div>
    )




};


const mapStateToProps = state => ({

    currentSortMode: selectSortMode(state)
})

const mapDispatchToProps = dispatch => ({
    sortModeSelect: mode => dispatch(setSortType(mode))
})



export default connect(mapStateToProps, mapDispatchToProps)(SortOption);