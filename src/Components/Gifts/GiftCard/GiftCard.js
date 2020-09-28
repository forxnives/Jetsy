import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const GiftCard = ({title, img, alt}) => {

    


    return (
        <Link to={`/shop/${title}`}>
                                
            <div className="gifts-card">
                <div className="gifts-card_image">
                    <img src={img} alt={alt}/>
                </div>
                <div className="gifts-card_txt">
                    <span>{title}</span>
                </div>
            </div>

        </Link>
    )
}

export default withRouter(GiftCard);
