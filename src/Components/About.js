import React from 'react';
import fernleft from '../img/tintin.png';
import fernright from '../img/torsty.png';



const Gifts = () => {
    return (


        <section className="about">

            <div className="about-container">

                <div className="about-fern about-fernleft">
                    <img src={fernleft} alt=""/>
                </div>

                <div className="about-content">

                    <div className="about-content-header">
                        <h1>What is Caribbean Hut?</h1>
                    </div>

                    <div className="about-content-columns">

                        <div className="about-content-columns_col">

                            <h1>A one-of-a-kind community</h1>

                            <span>Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.</span>
                            
                        </div>

                        <div className="about-content-columns_col about-content-columns_col_middle">

                            <h1>Support independent creators</h1>

                            <span>There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</span>

                        </div>

                        <div className="about-content-columns_col">

                            <h1>Peace of Mind</h1>

                            <span>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</span>

                        </div>
                    </div>

                    <div className="about-actioncall">

                        <h1>Are you a Jamaican creator with something to sell?</h1>

                        <a href="!#">
                            <div className="about-actioncall_button">
                                <span>Join Us!</span>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="about-fern about-fernright">
                    <img src={fernright} alt=""/>
                </div>

            </div>

        </section>

    )

}

export default Gifts