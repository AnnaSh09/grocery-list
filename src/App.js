import image from './shopping.jpeg';
import imageTwo from './man.jpeg';
import './App.css';
import { Grocerylist } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={image} width="250px" alt="shopping"/>
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
      <Grocerylist />
      <div className="container">
        <img src={imageTwo} width="250px" alt="man" />
      </div>
      
    </div>
  );
}

export default App;
