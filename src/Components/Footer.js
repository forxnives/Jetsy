import React from 'react';





const Footer = () => {
    return (


            <footer>
            {/* up section */}
            <div className="ftr-section up-section">
            {/* logo */}
            <a href="#" className="f-logo">DESIGN.</a>
            {/* list */}
            {/* ----1---- */}
            
            <ul>
            {/* heading */}
            <h1>Company</h1>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            {/* ----2---- */}

            <ul>
            {/* heading */}
            <h1>About</h1>
                <li><a href="#">Team & Company</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Services</a></li>
            </ul>
            {/* ----contact us list--- */}
            
            <ul>
            {/* heading */}
            <h1>Contact Us</h1>
                <li>
                    <p>+1 876 7654321</p>
                </li>
                <li>
                    <p>#11 Anywhichpart drive</p>
                </li>
                <li>
                    <p>Downtown Kingston</p>
                </li>
            </ul>

            </div>

            {/* down section */}
            <div className="ftr-section dwn-section">

            {/* ----1---- */}
    
            <ul>
            {/* heading */}
            <h1>Company</h1>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            {/* ----2---- */}

            <ul>
            {/* heading */}
            <h1>About</h1>
                <li><a href="#">Team & Company</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Services</a></li>
            </ul>

            {/* social */}
            <div className="social">
            {/* heading */}
            <h1>Social</h1>
            <div className="social-icons">

                <a href="#"><i className="fa fa-facebook-official"></i></a>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>

            </div>

            </div>

            {/* search */}
            <div className="search">

            {/* heading */}
            <h1>Email</h1>
            {/* inputbox */}
            <input type="email" placeholder="Enter your Email"/>


            </div>


            </div>

            </footer>
          


    )

}

export default Footer