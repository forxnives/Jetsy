import React from 'react';
import { withRouter } from 'react-router-dom';



const Shop = (props) => {

    console.log(props)
    return (
    
        <div>


            <h1>{props.match.params.giftcat}</h1>



        </div>


    )
}


export default withRouter(Shop);