import React from 'react';

import { connect } from 'react-redux';
import { selectCategory } from '../../redux/directory/directory.selectors';





const ShopCategory = (props) => {

    console.log(props)

    return(
        <div>

        </div>
    )

}


const mapStateToProps = (state, ownProps) => ({

    categoryItems: selectCategory(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(ShopCategory);