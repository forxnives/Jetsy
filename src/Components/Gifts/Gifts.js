import React from 'react';
import GiftCard from './GiftCard/GiftCard';
import jamaicaheart from '../../img/jamaica_heart.jpg';
import maletshirt from '../../img/male_tshirt.png';
import femaletshirt from '../../img/female_tshirt.jpg';
import personalized from '../../img/personalized.png';
import weddinggift from '../../img/wedding_gift.png';



const giftsData = [

    {title: 'Anniversary Gifts', img: jamaicaheart, alt: 'Jamaica Heart Chain'},
    {title: 'Gifts for Him', img: maletshirt, alt: 'Male Tshirt'},
    {title: 'Gifts for Her', img: femaletshirt, alt: 'Female Tshirt'},
    {title: 'Personalized Gifts', img: personalized, alt: 'Personalize your gift'},
    {title: 'Wedding Gifts', img: weddinggift, alt: 'Wedding Gifts'}

];




const Gifts = () => {




    const giftList = giftsData.map(({...otherSectionProps}) =>(

        <GiftCard {...otherSectionProps} />
        
    ));



    
    return (

        <section className="gifts">

        
            <div className="gifts-heading">
                <h1>Shop For Gifts</h1>
            </div>

            <div className="gifts-container">

                {giftList}

            </div>


        </section>


    )

}

export default Gifts