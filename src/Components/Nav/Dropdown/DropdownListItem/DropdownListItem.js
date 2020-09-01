import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const DropdownListItem = ({history, itemName, itemPath}) => {

    return (

        <li>

            <Link to={itemPath}> {itemName}</Link>
            
        </li>

    )
}

export default withRouter(DropdownListItem)
