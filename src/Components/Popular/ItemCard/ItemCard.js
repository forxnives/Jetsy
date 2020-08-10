import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import woodspoon from '../../../img/wood_spoons.jpg';

const ItemCard = ( { img, title, seller, rating, ratings, price, history } ) => {


    //Takes a number rating and returns a ratingArray of list elements 

    const ratingHelper = (rating) => {
        let ratingArray = [];

        for (let i=0; i < 5 ; i++) {

            if ( rating > 0) {
                ratingArray.push(<li className="rated"></li>)
                rating--

            } else {
                ratingArray.push(<li></li>)
            }
        }
        return(ratingArray)
    }








    return (

        <div className="popular-item">
            <Link to={ `product/${title}` }>

                <div className="popular-item__image">
                    <img src={img} alt="wooden spoons"/>
                </div>

                <div className="popular-item__info">

                    <div className="title">
                        <span className="title">
                            {title}
                        </span>
                    </div>

                    <div className="vendor">
                        <span>
                        {seller}
                        </span>
                    </div>


                    <div className="rating-section">

                        <ul className="rating">
                            {ratingHelper(rating)}
                        </ul>

                        <span className="ratings">({ratings})</span>

                    </div>

                    <div className="price">
                        <span className="price">
                            {price}
                        </span>
                    </div>

                </div>
            </Link>
        </div>

    )
}

export default withRouter(ItemCard);