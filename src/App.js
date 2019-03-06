import React, { Component } from 'react';
import './App.css';
import Store from './components/Store';
import UserNav from './components/UserNav';
import Logo from './components/Logo';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      location: 'Home',
      storeLocation: undefined,
      loading: false,
      cart: [{a:1}, {b:2}],
      cartVisible: true
    };
    this.handleNav = this.handleNav.bind(this);
    this.handleStoreNav = this.handleStoreNav.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  handleNav (location) {
    console.log(location);
    this.setState({
      location
    });
    setTimeout(()=>{
      console.log("the state is now set to : ", this.state.location);
    }, 2000)
  }

  handleStoreNav (storeLocation) {
    console.log("store location: ", storeLocation);
    this.setState({
      storeLocation
    })
    setTimeout(()=>{
      console.log("the store location is now set to : ", this.state.storeLocation);
    }, 2000)
  }

  addToCart(item, quantity) {
    console.log("adding to cart")
    let currentCart = this.state.cart;
    for (let i = quantity; i > 0; i--) {
      currentCart.push(item);
    }
    this.setState({
      cart: currentCart,
      cartVisible: true,
    });
  }

  removeFromCart(item, quantity) {
    let currentCart = this.state.cart;
    for (let i = currentCart.length; i > 0; i--) {
      console.log("this is in my cart: ", currentCart[i])
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserNav handleNav={this.handleNav}/>
          <Logo handleNav={this.handleNav}/>
        </header>
        <Store 
          location={this.state.location} 
          handleStoreNav={this.handleStoreNav} 
          storeLocation={this.state.storeLocation}
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
        />
        <Cart cart={this.state.cart} cartVisible={this.state.cartVisible} handleNav={this.handleNav} />
      </div>
    );
  }
}

export default App;

