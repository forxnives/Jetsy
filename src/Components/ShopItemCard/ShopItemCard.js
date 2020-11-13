import React, {useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.actions';



// import woodspoon from '../../../img/wood_spoons.jpg';

const ShopItemCard = (props) => {


    const { item, addToCart } = props;

    const {id, img, title, seller, rating, ratings, price} = item;

    const [btnHovered, setBtnHovered] = useState(false);



    //Takes a number rating and returns a ratingArray of list elements 

    const ratingHelper = (rating) => {
        let ratingArray = [];

        for (let i=0; i < 5 ; i++) {

            if ( rating > 0) {
                ratingArray.push(<li className="rated"></li>);
                rating--;

            } else {
                ratingArray.push(<li></li>);
            }
        }
        return(ratingArray);
    }

    console.log(props.match.url)



    return (

        // <Link to={`/product/${props.match.url.replace('/shop/', '')}/${title}`} className="shop-item">
        <Link to={`/product/${title}`} className="shop-item">

            {/* <Link to={ `product/${title}` }> */}
            <div  className='shop-item-div'>

                <div className="shop-item__image">

                    <div className='img'>
                        <img src={img} alt="wooden spoons"/>



                    </div>

                    


                </div>


                {/* <div className="hover-layer">
                            
                </div> */}

                <div className="shop-item__info">

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


                    <div className="shop-rating-section">

                        <ul className="rating">
                            {ratingHelper(rating)}
                        </ul>

                        <span className="ratings">({ratings})</span>

                    </div>

                    <div className="shop-price-section">
                        <span className="price">
                            USD {price}
                        </span>
                    </div>

                </div>
            {/* </Link> */}
            </div>
        </Link>

    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})



export default connect(null, mapDispatchToProps)(withRouter(ShopItemCard));