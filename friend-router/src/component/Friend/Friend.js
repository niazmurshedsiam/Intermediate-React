import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friends;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div>
            <h2>Friend Name: {name}</h2>
            <p>Friend Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <button onClick={()=>handleClick(id)}>Show Detail {id}</button>
            </Link>

        </div>
    );
};

export default Friend;