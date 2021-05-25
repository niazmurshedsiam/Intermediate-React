import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticle] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?q=trump&apiKey=aa83b5d287e94483bdf47a0a22137b91')
        .then(res=>res.json())
        .then(data=> setArticle(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines : {articles.length}</h1>
            {
                articles.map( article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;