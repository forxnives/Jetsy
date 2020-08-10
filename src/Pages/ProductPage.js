import React from 'react';
import { withRouter } from 'react-router-dom';



const ProductPage = (props) => {

    console.log(props)
    return (
    
        <div>



            
            <h1>{props.match.params.itemId}</h1>




        </div>


    )
}


export default withRouter(ProductPage);