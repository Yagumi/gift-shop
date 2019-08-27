import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import styled from '@emotion/styled';

import './App.css';

import Home from './components/Home';
import ProductPage from './components/ProductPage';

const AppContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  @media(min-width: 768px) {
    width: 768px;

  }
}

`

function App() {
  const [data, setData] = useState([]);
  const [clickedProduct, setClickedProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const getClikedProduct = (product) => {
    setClickedProduct([])
    setClickedProduct(product)
  }
  const updateCard = ({productId, productCount, productSize}) => {
    const productCart = {
      productId : productId,
      productCount: productCount,
      productSize: productSize
    }
    setCart([...cart, productCart])
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2');
      //Sum all rating in data.rate
      const rateArr = result.data.map(function(item) {
      let sumArr = [];
      sumArr = item.rate;
      let reducer = [];
      reducer = sumArr.reduce((sum, current) => sum + current)
      item.rate = reducer;
      return item;
      })
      setData(rateArr);
    };
    fetchData();
  }, []);
console.log(cart)
  return (
    <AppContainer>
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
              getClikedProduct={getClikedProduct} 
              clickedProduct={clickedProduct}
              allProductsList={data} 
              updateCard={updateCard}
              {...routeProps}
            />
          } 
        />
        <Route 
          render={() => <h1>Error 404!</h1>}
        />
      </Switch>
    </AppContainer>
  );
}

export default App;
