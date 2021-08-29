import React from 'react';
import Button from './Button';
import DetailBullet from './DetailBullet';

function PricingCard({ activeDeal, title, popular, tagLine, btnTitle, btnActive, price, detail }) {
    return (
        <div id='pricingCard'>
            {popular && <div id='popular'><p>Popular</p></div>}
            <p id='pricingCardHeading'>{title}</p>
            <p id='pricingTagLine'>{tagLine}</p>
            <Button btnTitle={btnTitle} btnActive={btnActive} />
            <p style={{ margin: '10px 0px' }} id='pricingCardHeading'>{price}<span style={{ color: 'rgba(0, 0, 0, 0.4)' }}>{activeDeal==='monthly'?'/mo':'/an'}</span></p>
            {
                detail.map(
                    (item) => (
                        <DetailBullet count={item.count} detail={item.text} key={item.id} />
                    )
                )
            }
        </div>
    );
}

export default PricingCard;