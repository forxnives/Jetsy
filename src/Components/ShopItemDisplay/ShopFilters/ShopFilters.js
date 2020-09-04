import React, {useState, useEffect} from 'react';
import { capitalize, shopStringFormat } from '../../../generalutils';
import { Link } from 'react-router-dom';
import { updateFilters } from '../../../redux/filters/filters.actions';
import { connect } from 'react-redux';


const ShopFilters = ({catArray, subCatArray, setFilterArray}) => {

    const [optionFilter, setOptionFilter] = useState(null);
    const [priceFilter, setPriceFilter] = useState(null);
    const [ratingFilter, setRatingFilter] = useState(null);

    const [readyToShipChecked, toggleReadyToShip] = useState(false);
    const [priceFilterMode, setPriceFilterMode] = useState();
    const [customPrice, setCustomPrice] = useState({price1: '0', price2: '99999999999999'})

    useEffect(() => {
        let array = []


        if (priceFilter) {
            array.push(priceFilter)
        }

        if (optionFilter) {


            array.push(optionFilter)
        }

        if (ratingFilter) {
            array.push(ratingFilter)
        }

        setFilterArray(array)
    }, [priceFilter, ratingFilter, optionFilter]);



    useEffect(()=>{
        if (readyToShipChecked){
            setOptionFilter({filter: 'option', params: 'ready-to-ship'})
            return
        } 

        setOptionFilter(null)
    }, [readyToShipChecked]);


    useEffect(()=> {

        if (priceFilterMode === 'custom') {
            setPriceFilter({filter: 'price', params: [customPrice.price1, customPrice.price2]})
        }



    }, [customPrice])


    useEffect(()=> {
        if (priceFilterMode) {

            setPriceFilter({filter: 'price', params: PARAMS_MAP[priceFilterMode]})

        }

    },[priceFilterMode])







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

    const PARAMS_MAP = {
        'anyprice':[0, 9999999999999999],
        'under25':[0, 25],
        '25to50':[25, 50],
        '50to100':[50, 100],
        'over100':[100, 999999999999999],
        'custom':[customPrice.price1, customPrice.price2]

    }



    const ratingCallback = (event) => {


        setRatingFilter({filter: 'rating', params: event.target.value})

    }

    const handlePriceFilter = (event) => {

      

        if (event.target.id !== 'price1' && event.target.id !== 'price2'){

            setPriceFilterMode(event.target.value)
        }


        if (event.target.id=== 'price1'){
            setCustomPrice({...customPrice, price1: event.target.value})
        }

        if (event.target.id=== 'price2'){
            setCustomPrice({...customPrice, price2: event.target.value})
        }

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


            <div className="filter-options"  >

                <h2>Options</h2>



                <div className='ready-to-ship'><input onChange={() => toggleReadyToShip(!readyToShipChecked)} id='ready-to-ship' type='checkbox'></input> <label for='ready-to-ship' >Ready-to-ship</label></div>

            </div>

            <div className="filter-rating">

                <h2>Rating</h2>

                <div onChange={event => ratingCallback(event)} className="filter-rating-radios">

                    <div>
                        <input type="radio" id="onestar" name="rating" value="1"
                            />
                        <label for="onestar">

                            <ul className="rating">
                                <li className="rated"></li>
                            </ul>

                        </label>

                    </div>

                    <div>
                        <input type="radio" id="twostar" name="rating" value="2"/>
                        <label for="twostar">

                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>
                        
                        </label>
                    </div>

                    <div>
                        <input type="radio" id="threestar" name="rating" value="3"/>
                        <label for="threestar">
                            <ul className="rating">
                                <li className="rated"></li>
                                <li className="rated"></li>
                                <li className="rated"></li>
                            </ul>
                        </label>
                    </div>


                    <div>
                        <input type="radio" id="fourstar" name="rating" value="4"/>
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
                        <input type="radio" id="fivestar" name="rating" value="5"/>
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


                    <div onChange={event=>handlePriceFilter(event)} >
                        <input type="radio" id="pricetier1" name="price" value="anyprice"
                            />
                        <label for="pricetier1"> Any Price </label>

                    </div>

                    <div onChange={event=>handlePriceFilter(event)} >
                        <input type="radio" id="pricetier2" name="price" value="under25"
                            />
                        <label for="pricetier2"> Under USD 25  </label>

                    </div>

                    <div onChange={event=>handlePriceFilter(event)} >
                        <input type="radio" id="pricetier3" name="price" value="25to50"
                            />
                        <label for="pricetier3"> USD 25 to USD 50 </label>

                    </div>

                    <div onChange={event=>handlePriceFilter(event)} >
                        <input type="radio" id="pricetier4" name="price" value="50to100"
                            />
                        <label for="pricetier4"> USD 50 to USD 100 </label>

                    </div>

                    <div onChange={event=>handlePriceFilter(event)} >
                        <input type="radio" id="pricetier5" name="price" value="over100"
                            />
                        <label for="pricetier5"> Over USD 100 </label>

                    </div>

                    <div >
                        <input onChange={event=>handlePriceFilter(event)} type="radio" id="custom" name="price" value="custom"
                            />
                        <label for="custom"> Custom (USD)
                        
                            <div className="custom-input-field">
                                <input onChange={event=> handlePriceFilter(event)} id='price1' type="text" size="1" />

                                <span>to</span>
                                <input onChange={event=> handlePriceFilter(event)} id='price2' type="text" size="1"/>


                            </div>
                       
                        
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


const mapDispatchToProps = dispatch => ({
    setFilterArray: filterArray => dispatch(updateFilters(filterArray))
})

export default connect(null, mapDispatchToProps)(ShopFilters);