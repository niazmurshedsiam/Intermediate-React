import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friends;
    return (
        <div>
            <h2>Friend Name: {name}</h2>
            <p>Friend Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>Show Detail {id}</Link></p>

        </div>
    );
};

export default Friend;