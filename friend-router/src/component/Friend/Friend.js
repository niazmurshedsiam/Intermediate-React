import React from 'react';

const Friend = (props) => {
    const {name,email}=props.friends;
    return (
        <div>
            <h2>Friend Name: {name}</h2>
            <p>Friend Email: {email}</p>

        </div>
    );
};

export default Friend;