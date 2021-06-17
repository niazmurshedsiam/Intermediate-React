import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    let {friendId} = useParams();
    return (
        <div>
            <h1>This is Friend Details: {friendId}</h1>
        </div>
    );
};

export default FriendDetails;