import React from 'react';
import { capitalize, shopStringFormat } from '../../../generalutils';
import { Link } from 'react-router-dom';



const ShopFilters = ({catArray, subCatArray}) => {


    const categoryLinks = catArray => {

        return catArray.map(category => {
            if (category === catArray[catArray.length-1]){
                return (<div className='category-link'><span>&#129128; </span> <Link to={category}>{capitalize(shopStringFormat(category))}</Link></div>)
            }

            return (<div className='category-link'>&#129128; <Link to={'/shop/' + category}>{capitalize(shopStringFormat(category))}</Link></div>)
        })

    }



    const subCategoryLinks = (subCatArray, catArray) => {

        return subCatArray.map(category => {

            return (<div className='sub-category-link'>&#129130; <Link to={'/shop/' + catArray.join('/') + '/' + category}>{capitalize(shopStringFormat(category))}</Link></div>)
        })

    }


    



    return (

        <div className="shop-filters-container">

            <div className="category-links">

                <div className='all-categories-link'><span>&#129128; </span><Link to='/shop/'>All Categories </Link></div>

                    {

                        catArray.length > 1 ?

                        categoryLinks(catArray) :

                        null

                    }

            </div>



            <div className="filter-options">

                <h2>Options</h2>

                <div className='ready-to-ship'><input id='readytoship' type='checkbox'></input> <label for='readytoship' >Ready-to-ship</label></div>

            </div>

            <div className="filter-rating">

                <h2>Rating</h2>

                <div className="filter-rating-radios">

                    <div>
                        <input type="radio" id="onestar" name="rating" value="one"
                            />
                        <label for="onestar">

                            <ul className="rating">
                                <li className="rated"></li>
                            </ul>

                        </label>

                    </div>

                    <div>
                        <input type="radio" id="twostar" name="rating" value="two"/>
                        <label for="twostar">

                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>
                        
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="threestar" name="rating" value="three"/>
                        <label for="threestar">
                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>
                        </label>
                    </div>


                    <div>
                        <input type="radio" id="fourstar" name="rating" value="four"/>
                        <label for="fourstar">

                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>

                        </label>
                    </div>


                    <div>
                        <input type="radio" id="fivestar" name="rating" value="five"/>
                        <label for="fivestar">

                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>

                        </label>
                    </div>

                </div>

            </div>


            <div className="filter-price">

                <h2>Price ($)</h2>

                <div className="filter-price-radios">


                    <div>
                        <input type="radio" id="pricetier1" name="price" value="anyprice"
                            />
                        <label for="pricetier1"> Any Price </label>

                    </div>

                    <div>
                        <input type="radio" id="pricetier2" name="price" value="under25"
                            />
                        <label for="pricetier2"> Under USD 25  </label>

                    </div>

                    <div>
                        <input type="radio" id="pricetier3" name="price" value="25to50"
                            />
                        <label for="pricetier3"> USD 25 to USD 50 </label>

                    </div>

                    <div>
                        <input type="radio" id="pricetier4" name="price" value="50to100"
                            />
                        <label for="pricetier4"> USD 50 to USD 100 </label>

                    </div>

                    <div>
                        <input type="radio" id="pricetier5" name="price" value="over100"
                            />
                        <label for="pricetier5"> Over USD 100 </label>

                    </div>


                    <div>
                        <input type="radio" id="pricetier6" name="price" value="custom"
                            />
                        <label for="pricetier6"> Custom (USD)
                        
                            <div className="custom-input-field">
                                <input type="text" size="1" />

                                <span>to</span>
                                <input type="text" size="1"/>


                            </div>

{/* 
                            <div className="custom-input-field">

                            </div> */}
                        
                        
                        </label>

                    </div>


                </div>



            </div>

            <div className="sub-category-links">

                {/* <h2>Sub-Categories</h2> */}

                {

                    subCatArray.length > 1 ? 

                    subCategoryLinks(subCatArray, catArray) :

                    null

                }


            </div>

        </div>
    )
}

export default ShopFilters;