import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {userId,id,title,body} = props.post;
    const history = useHistory();
    const handleComment = id =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div style={{margin:'5px',padding:'5px'}}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <h4>Title: {title}.</h4>
            <h4>Body: {body}.</h4>
            <button onClick={()=>handleComment(id)}>Show Comment</button>
        </div>
    );
};

export default Post;