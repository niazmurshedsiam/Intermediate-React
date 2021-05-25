import "./App.css";
import News from "./Component/News/News";
import Header from "./Component/Header/Header";
import { useEffect, useState } from "react";
function App() {
  const [articles, setArticle] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?q=trump&apiKey=aa83b5d287e94483bdf47a0a22137b91')
        .then(res=>res.json())
        .then(data=> setArticle(data.articles))
    },[])
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Bangla News</h1>
      <Header></Header>

      {
        articles.map( article => <News article={article}></News>)
      }
      
      
      
    </div>
  );
}

export default App;
