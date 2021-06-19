import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment count={count}></Shipment>
    </div>
  );
}

export default App;
