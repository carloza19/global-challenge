import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductsList';
import ProductDetailsContainer from './components/ProductDetailsContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { getAll } from './service/products.services';
import { ProductInterface } from './interfaces/product.interfaces';


interface AppState {
  product: ProductInterface[]
}

function App() {
  const [products, setProducts] = useState<AppState["product"]>([])
  const [isUpdate, setIsUpdate] = useState<Boolean>(false)

  const handelUpdate = (updateValue: Boolean) => {
    setIsUpdate(updateValue)
  }

  useEffect(() => {
    getAll().then((res) => {
      setProducts(res)
    })
  }, [isUpdate])

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Global Ecommerce</h1>
        <Routes>
          <Route path='/' element={<Link to={'/products'}><button> Ver lista de productos</button></Link>}></Route>
          <Route path='/products' element={<ProductList products={products} />}></Route>
          <Route path='/products/:productId' element={<ProductDetailsContainer stateUpdate={handelUpdate} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
