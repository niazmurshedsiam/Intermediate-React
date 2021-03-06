import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Shipment from './component/Shipment/Shipment';
import { createContext, useState } from 'react';
export const categoriesContext = createContext();
function App() {
  const [categorie,setCategorie] = useState('laptop');
  return (
    <categoriesContext.Provider value={[categorie,setCategorie]}>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </categoriesContext.Provider>
  );
}

export default App;
