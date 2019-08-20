import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Home from './components/Home';
import ProductPage from './components/ProductPage';

function App() {
  const [data, setData] = useState([]);
  const [clickedProduct, setClickedProduct] = useState([0]);
  
  const getClikedProduct = (product) => {
    setClickedProduct([])
    setClickedProduct(product)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
    <Switch>
      <Route 
        exact 
        path="/" 
        render={(routeProps) => 
          <Home 
            data={data} 
            getClikedProduct={getClikedProduct} 
            {...routeProps}
          />
        }
      />
      <Route 
        exact 
        path={`/product/:name`} 
        render={(routeProps) => 
          <ProductPage 
            clickedProduct={clickedProduct}
            allProductsList={data} 
            {...routeProps}
          />
        } 
      />
      <Route 
        render={() => <h1>Error 404!</h1>}
      />
    </Switch>
    </div>
  );
}

export default App;
