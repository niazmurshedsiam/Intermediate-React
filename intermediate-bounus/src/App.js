import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';
function App() {
    const [likeColor,setLikeColor] = useState('');
    const handleLike =()=>{
      setLikeColor(likeColor ? '' : 'primary')
    }

  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpIcon onClick={handleLike} color={likeColor}></ThumbUpIcon>

    </div>
  );
}

export default App;
