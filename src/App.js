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
    setTimeout(()=>{
      console.log("the state is now set to : ", this.state.location);
    }, 1500)
  }

  loadingWait () {
    this.setState({
      loading: true
    });
    setTimeout(()=>{
      this.setState({
        loading: false
      })
    }, 1000)
  }

  addToCart(item, quantity) {
    console.log("adding to cart")
    let currentCart = this.state.cart;
    for (let i = quantity; i > 0; i--) {
      currentCart.push(item);
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
    let currentCart = this.state.cart;
    for (let i = currentCart.length; i > 0; i--) {
      console.log("this is in my cart: ", currentCart[i])
    }
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

