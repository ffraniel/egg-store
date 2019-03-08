import React, { Component } from 'react';
import './App.css';
import Store from './components/Store';
import UserNav from './components/UserNav';
import Logo from './components/Logo';
import Cart from './components/Cart';
import Introduction from './components/Introduction';
import Loading from './components/Loading';
import About from './components/About';
import Checkout from './components/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      location: 'Home',
      loading: false,
      cart: [],
      cartVisible: false
    };
    this.handleNav = this.handleNav.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.makeCartVisible = this.makeCartVisible.bind(this);
    this.loadingWait = this.loadingWait.bind(this);
  }

  makeCartVisible () {
    this.setState({
      cartVisible: !this.state.cartVisible
    })
  }

  handleNav (location) {
    console.log(location);
    this.setState({
      location,
      cartVisible: false
    });
  }

  loadingWait () {
    this.setState({
      loading: true
    });
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 800)
  }

  addToCart(item, quantity) {
    var currentCart = this.state.cart;
    if (currentCart.length > 0) {
      for (var i = 0; i < currentCart.length; i ++) {
        if (currentCart[i].name === item.name) {
          currentCart[i].quantity = currentCart[i].quantity + quantity;
          item.completed = true
        }
      }
      if (item.completed === undefined) {
        let itemObject = item;
        itemObject.quantity = quantity; 
        currentCart.push(itemObject);
      }
    } 
    else {
      let itemObject = item;
      itemObject.quantity = quantity;
      currentCart.push(itemObject);
    }
    if(this.state.location === 'Checkout') {
      this.setState({
        cart: currentCart,
        cartVisible: false,
      });
    } else {
      this.setState({
        cart: currentCart,
        cartVisible: true,
      });
    }
  }

  removeFromCart(item, quantity) {
    var currentCart = this.state.cart;
    if (currentCart.length > 0) {
      for (var i = 0; i < currentCart.length; i ++) {
        if (currentCart[i].name === item.name) {
          currentCart[i].quantity = currentCart[i].quantity - quantity;
        }
      }
    }
    this.setState({
      cart: currentCart
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserNav handleNav={this.handleNav} makeCartVisible={this.makeCartVisible}/>
          <Logo handleNav={this.handleNav}/>
        </header>
        {this.state.loading && <Loading />}
        {this.state.location === 'Home' && 
          <div className="store">
            <Introduction />
            <Store 
              location={this.state.location}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              handleNav={this.handleNav}
              loadingWait={this.loadingWait}
            />  
          </div>
        }
        {this.state.location === 'Meet the Hens' && 
          <About />
        }
        {this.state.location === 'Checkout' && 
          <Checkout 
            cart={this.state.cart}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            loadingWait={this.loadingWait}
          />
        }
        <Cart 
          cart={this.state.cart} 
          cartVisible={this.state.cartVisible} 
          handleNav={this.handleNav}
          makeCartVisible={this.makeCartVisible} 
          addToCart={this.addToCart}
          removeFromCart={this.removeFromCart}
          loadingWait={this.loadingWait}
        />
      </div>
    );
  }
}

export default App;

