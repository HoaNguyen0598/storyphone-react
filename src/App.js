import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Product/ProductList';
import Details from './components/Detail/Detail';
import Cart from './components/Cart';
import Default from './components/Default/Default';
import Modal from './components/Modal/Modal';
import {ProductProvider} from './components/context/context';
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render(){
  return (
  <ProductProvider>
   <Router>
     <Navbar />
     <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route component={Default}></Route>
     </Switch>
     <Modal />
    </Router>
  </ProductProvider>
  );
}
}
export default App;
