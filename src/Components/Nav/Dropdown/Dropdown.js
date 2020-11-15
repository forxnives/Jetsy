import React from 'react';
import DropdownListItem  from './DropdownListItem/DropdownListItem';
import {Link} from 'react-router-dom';


const Dropdown = () => {

    return (
        
        <div className="dropdown">
            {/* <div className="spacer">&nbsp;</div> */}
            <ul className="dlist">

                <li><Link to="/Jetsy/shop/arts&crafts">Arts & Crafts</Link>
                    <ul>

                    <li><Link to="/Jetsy/shop/arts&crafts/jewellery">Jewellery</Link>

                        <ul>
                                    
                            <DropdownListItem itemPath='/Jetsy/shop/arts&crafts/jewellery/bracelets' itemName='Bracelets' />
                            <DropdownListItem itemPath='/Jetsy/shop/arts&crafts/jewellery/necklaces' itemName='Necklaces' />
                            {/* <li><Link to='/shop/arts&crafts/jewellery/necklaces'>Necklaces</Link></li> */}
                            <li><Link to="/Jetsy/shop/arts&crafts/jewellery/earrings">Earrings</Link></li>

                        </ul>
                    
                    
                    </li>
                    <li><Link to="/Jetsy/shop/arts&crafts/paintings">Paintings</Link></li>
                    <li><Link to="/Jetsy/shop/arts&crafts/sculptures">Sculptures</Link></li>



                    

                    <li><Link to="/Jetsy/shop/arts&crafts/knick_knacks">Knick Knacks</Link></li>
                    </ul>
                </li>

                <li><Link to="/Jetsy/shop/clothing&apparel">Clothing & Apparel</Link>
                    <ul>
                    
                    <li><Link to="/Jetsy/shop/clothing&apparel/men">For Men</Link>
                        <ul>
                            <li><Link to="/Jetsy/shop/clothing&apparel/men/shirts">Shirts</Link></li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/men/sweaters">Sweaters</Link></li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/men/shoes">Shoes</Link>
                        
                                <ul>
                                    <li><Link to="/Jetsy/shop/clothing&apparel/men/shoes/sandals">Sandals</Link></li>
                                    <li><Link to="/Jetsy/shop/clothing&apparel/men/shoes/sneakers">Sneakers</Link></li>

                                </ul>

                            </li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/men/underwear&swimwear">Underwear & Swimwear</Link></li>
                        </ul>
                    </li>

                    
                    <li><Link to="/Jetsy/shop/clothing&apparel/women">For Women</Link>
                        <ul>
                        <li><Link to="/Jetsy/shop/clothing&apparel/women/shirts">Shirts</Link></li>
                        <li><Link to="/Jetsy/shop/clothing&apparel/women/sweaters">Sweaters</Link></li>
                        <li><Link to="/Jetsy/shop/clothing&apparel/women/shoes">Shoes</Link>
                        
                            <ul>
                            <li><Link to="/Jetsy/shop/clothing&apparel/women/shoes/sandals">Sandals</Link></li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/women/shoes/sneakers">Sneakers</Link></li>

                            </ul>

                        </li>
                        <li><Link to="/Jetsy/shop/clothing&apparel/women/underwear&swimwear">Underwear & Swimwear</Link></li>
                        </ul>
                        
                    </li>
                    <li><Link to="/Jetsy/shop/clothing&apparel/hats&scarfs">Hats & Scarfs</Link></li>
                    <li><Link to="/Jetsy/shop/clothing&apparel/accessories">Accessories</Link>
                    
                                        
                        <ul>
                            <li><Link to="/Jetsy/shop/clothing&apparel/accessories/masks">Masks</Link></li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/accessories/sunglasses">Sunglasses</Link></li>
                            <li><Link to="/Jetsy/shop/clothing&apparel/accessories/bags&knapsacks">Bags & Knapsacks</Link></li>

                        </ul>

                    </li>
                    </ul>
                </li>

                <li><Link to="/Jetsy/shop/books&entertainment">Books and Entertainment</Link>
                    <ul>
                    <li><Link to="/Jetsy/shop/books&entertainment/books">Books</Link>
                    
                        <ul>
                            <li><Link to="/Jetsy/shop/books&entertainment/books/fiction">Fiction</Link></li>
                            <li><Link to="/Jetsy/shop/books&entertainment/books/non-fiction">Non-fiction</Link></li>

                        </ul>
                    
                    
                    </li>



                    <li><Link to="/Jetsy/shop/books&entertainment/movies">Movies</Link>
                    
                        <ul>
                            <li><Link to="/Jetsy/shop/books&entertainment/movies/fiction">Fiction</Link></li>
                            <li><Link to="/Jetsy/shop/books&entertainment/movies/non-fiction">Non-fiction</Link></li>

                        </ul>

                    </li>


                    <li><Link to="/Jetsy/shop/books&entertainment/music">Music</Link>
                    
                        <ul>
                            <li><Link to="/Jetsy/shop/books&entertainment/music/reggae">Reggae</Link></li>
                            <li><Link to="/Jetsy/shop/books&entertainment/music/dancehall">Dancehall</Link></li>
                            <li><Link to="/Jetsy/shop/books&entertainment/music/ska">Ska</Link></li>

                        </ul>
                    
                    </li>

                    </ul>
                </li>

                <li><Link to="/Jetsy/shop/food&drink">Food & Drink</Link>
                    <ul>
                    <li><Link to="/Jetsy/shop/food&drink/sauces&seasoning">Sauces & Seasoning</Link></li>
                    <li><Link to="/Jetsy/shop/food&drink/coffee">Coffee</Link></li>
                    <li><Link to="/Jetsy/shop/food&drink/chocolates">Chocolates</Link></li>
                    <li><Link to="/Jetsy/shop/food&drink/herbal_supplements">Herbal Supplements</Link></li>
                    </ul>
                </li>

                <li className="dlist-cat"><Link to="/Jetsy/shop/miscellaneous">Miscellaneous</Link>
                    <ul>
                    <li><Link to="/Jetsy/shop/miscellaneous/home">Home</Link>
                                        
                        <ul>
                            <li><Link to="/Jetsy/shop/miscellaneous/home/bedroom">Bedroom</Link></li>
                            <li><Link to="/Jetsy/shop/miscellaneous/home/bathroom">Bathroom</Link></li>
                            <li><Link to="/Jetsy/shop/miscellaneous/home/livingroom">Living Room</Link></li>
                            <li><Link to="/Jetsy/shop/miscellaneous/home/kitchen">Kitchen</Link></li>

                        </ul>
                    
                    
                    </li>
                    <li><Link to="/Jetsy/shop/miscellaneous/hair">Hair</Link>
                                        
                        <ul>
                            <li><Link to="/Jetsy/shop/miscellaneous/hair/haircare_products">Haircare Products</Link></li>
                            <li><Link to="/Jetsy/shop/miscellaneous/hair/extensions">Extensions</Link></li>

                        </ul>
                    
                    </li>
                    <li><Link to="/Jetsy/shop/miscellaneous/flags">Flags</Link></li>
                    <li><Link to="/Jetsy/shop/miscellaneous/other">Other</Link></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default Dropdown;