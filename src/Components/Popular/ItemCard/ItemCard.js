import React, {useState} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/cart/cart.actions';
import { ratingHelper } from '../../../generalutils';


// import woodspoon from '../../../img/wood_spoons.jpg';

const ItemCard = (props) => {

    const { item, addToCart } = props;

    const {id, img, title, seller, rating, ratings, price, categories} = item;



    const [btnHovered, setBtnHovered] = useState(false);






    return (

        <div className="item">
            {/* <Link to={ `product/${title}` }> */}
            <div>

                <div className="item__image">

                    <div className={btnHovered ? 'img img-hover' : 'img'}>

                        <Link to={`/product/${categories.join('/')}/${title}`}>
                            <img src={img} alt="wooden spoons"/>
                        </Link>


                        <div onMouseEnter={() => setBtnHovered(true)} onMouseLeave={()=> setBtnHovered(false)} className="item__cart svg-heart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path></svg>
                        </div>

                        <div onMouseEnter={() => setBtnHovered(true)} onMouseLeave={()=> setBtnHovered(false)} onClick={()=> addToCart(item)} className="item__cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="20" r="2"></circle><circle cx="16" cy="20" r="2"></circle><path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path></svg>
                        </div>

                    </div>

                    


                </div>


                {/* <div className="hover-layer">
                            
                </div> */}

                <div className="item__info">

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
                            USD {price}
                        </span>
                    </div>

                </div>
            {/* </Link> */}
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})



export default connect(null, mapDispatchToProps)(withRouter(ItemCard));