import React from 'react';

function GoodsCard(props) {
    const { name, price, image } = props;

    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-image" />
            <h3>{name}</h3>
            <p>{price} грн</p>
        </div>
    );
}

export default GoodsCard;