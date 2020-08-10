import React from 'react';



const Dropdown = () => {

    return (
        
        <div className="dropdown">
            {/* <div className="spacer">&nbsp;</div> */}
            <ul className="dlist">

                <li><a href="!#">Art & Paintings</a>
                    <ul>
                    <li><a href="!#">subcat1</a></li>
                    <li><a href="!#">subcat2</a></li>
                    <li><a href="!#">subcat3</a></li>
                    <li><a href="!#">subcat4</a></li>
                    </ul>
                </li>

                <li><a href="!#">Clothing & Shoes</a>
                    <ul>
                    <li><a href="!#">subcat1</a></li>
                    <li><a href="!#">subcat2</a>
                        <ul>
                        <li><a href="!#">subsubcat1</a></li>
                        <li><a href="!#">subsubcat2</a></li>
                        <li><a href="!#">subsubcat3</a>
                        
                            <ul>
                            <li><a href="!#">subsubsubcat1</a></li>
                            <li><a href="!#">subsubsubcat2</a></li>
                            <li><a href="!#">subsubsubcat3</a></li>
                            <li><a href="!#">subsubsubcat4</a></li>
                            </ul>

                        </li>
                        <li><a href="!#">subsubcat4</a></li>
                        </ul>
                        
                    </li>
                    <li><a href="!#">subcat3</a></li>
                    <li><a href="!#">subcat4</a></li>
                    </ul>
                </li>

                <li><a href="!#">Jewelry & Accessories</a>
                    <ul>
                    <li><a href="!#">subcat1</a></li>
                    <li><a href="!#">subcat2</a></li>
                    <li><a href="!#">subcat3</a></li>
                    <li><a href="!#">subcat4</a></li>
                    </ul>
                </li>

                <li><a href="!#">Entertainment & Music</a>
                    <ul>
                    <li><a href="!#">subcat1</a></li>
                    <li><a href="!#">subcat2</a></li>
                    <li><a href="!#">subcat3</a></li>
                    <li><a href="!#">subcat4</a></li>
                    </ul>
                </li>

                <li className="dlist-cat"><a href="!#">Sculptures & Crafts</a>
                    <ul>
                    <li><a href="!#">Kitchen Ware</a></li>
                    <li><a href="!#">subcat2</a></li>
                    <li><a href="!#">subcat3</a></li>
                    <li><a href="!#">subcat4</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default Dropdown;