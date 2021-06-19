import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
