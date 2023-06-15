import './App.css';

import Home from './Pages/Home';
import LondonDhaka from './Pages/LondonDhaka';
import ProductService from './Pages/ProductService';
import UkBr from './Pages/UkBr';
import UkCa from './Pages/UkCa';
import UsBd from './Pages/UsBd';


function App() {
  return (
    <div >
      <div>
        <Home></Home>
        <ProductService></ProductService>
        <LondonDhaka></LondonDhaka>
        <UkCa></UkCa>
        <UkBr></UkBr>
        <UsBd></UsBd>
      </div>
    </div>
  );
}

export default App;
