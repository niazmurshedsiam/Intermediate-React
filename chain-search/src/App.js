import logo from './logo.svg';
import './App.css';
import MealDetail from './component/MealDetail/MealDetail';
import MealFinder from './component/MealFinder/MealFinder';
function App() {
  return (
    <div className="App">
      <MealDetail></MealDetail>
      <MealFinder></MealFinder>
    </div>
  );
}

export default App;
