import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'

    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h3 style={{color:'blue'}} className="product-details">{name}</h3>
            <p>Quantity: {quantity}</p>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;