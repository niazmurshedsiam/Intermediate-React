import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h1>Hello{postId}</h1>
            <p>userId: {post.userId}</p>
            <p>id: {post.id}</p>
            <h4>Title: {post.title}.</h4>
            <h4>Body: {post.body}.</h4>
        </div>
    );
};

export default PostDetails;