import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
    const [likeColor,setLikeColor] = useState('');
    const [user,setUser] = useState([]);
    const [singleUser,SetSingleUser] = useState({});
    const [randomUser,setRandomUser] = useState({});
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUser(data))
    },[])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res=>res.json())
      .then(data=>SetSingleUser(data))
    },[])
    useEffect(()=>{
      fetch('https://randomuser.me/api/')
      .then(res=>res.json())
      .then(data=>setRandomUser(data.results[0]))
    },[])
    const handleLike =()=>{
      setLikeColor(likeColor ? '' : 'primary')
    }

  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>
      {
        user.map(user=><div>{user.name}</div>)
      }
      <h1>{singleUser.name}</h1>
      <h1>{randomUser.name?.first }</h1>
      <h1>{randomUser.name?.title }</h1>
      <h1>{randomUser.name?.last}</h1>
    </div>
  );
}

export default App;
