import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = (props) => {
    // const {name} = props.friend;
    let {friendId} = useParams();
    const [friend,setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <p>This is Friend Details: {friendId}</p>
            <h3>{friend.name}</h3>
            <h5>{friend.email}</h5>
            <h5>{friend.phone}</h5>
        </div>
    );
};

export default FriendDetails;