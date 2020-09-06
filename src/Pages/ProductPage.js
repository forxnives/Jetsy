import React from 'react';
import { withRouter } from 'react-router-dom';
import { capitalize, shopStringFormat, urlToCatArray, categoryPathParse } from '../generalutils';
import { connect } from 'react-redux';

import { selectItem } from '../redux/directory/directory.selectors';



const ProductPage = ({item, location}) => {

    const sales = 298;

    const rating = 4;

    const ratingDisplay = (rating) => {

        let ratingArray = [];

        for (rating; rating > 0; rating--){
            ratingArray.push(<span>&#9733;</span>)
        }

        return ratingArray
    }


    const bestSellerDisplay = (itemSold) => (
        itemSold > 500 ?
        <div className="product-info-bestseller">
            <span>Best Seller</span>
        </div> :
        null
    )

    const arrivalDate = () => {
        const myDate = new Date();
        myDate.setDate(myDate.getDate() + 7);
        const dateString = myDate.toString()

        const year = new Date()
        year.getFullYear()

        const dateConcat = dateString.substring(0, dateString.indexOf(year.getFullYear().toString()));

        
        return `${dateConcat}`
    }
    

    

    return (
    
        <section>


            <div className="shop-header">   

                {categoryPathParse(location.pathname, 'product')}



                <div className="shop-header-lower">



                </div>

                <div className="product-section">

                    <div className="product-image">
                        <img src={item.img} alt=""/>
                    </div>

                    <div className="product-info">

                        <div className="product-info-seller">
                            <h2>{item.seller}</h2>
                            <div className="product-info-seller__lower">
                                <span>{sales} sales </span>
                                <span>&#x7C; </span>
                                {ratingDisplay(rating)}

                            </div>


                        </div>

                        
                        <h1>{item.title}</h1>

                        {bestSellerDisplay(item.itemsold)}

                        <div className="product-info-price">
                            <h1>USD ${item.price}</h1>



                            {
                                item.instock > 0 ?
                                <span className='stock in'> &#10003; In Stock  </span> :
                                <span className='stock out'> &#10007; Ouf of Stock! </span>
                            }



                        </div>

                        <span>Local taxes included (where applicable)</span>

                        <div className="product-info-availability">

                            {
                                item.instock > 0 ?
                                <span> &#10003; Arrives as soon as {arrivalDate()} if you order today  </span> :
                                <span> &#10007; Ouf of Stock! </span>
                            }

                        </div>
                        <div className="product-info-addcartbtn">

                            <div className="btn">
                                <span>Add To Cart</span>
                            </div>


                        </div>
                        {/* <div className="product-info-addcartbtn">

                        </div> */}

                        


                    </div>


                </div>




            
            </div>


        </section>


    )
}


const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.location.pathname)(state)
})

export default withRouter(connect(mapStateToProps)(ProductPage));