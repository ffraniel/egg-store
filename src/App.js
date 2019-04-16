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
import EggsInStore from './components/EggsInStore';
import OrderCompleted from './components/OrderCompleted';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      location: 'Home',
      loading: false,
      cart: [],
      cartVisible: false,
      eggsInStore: null,
      orderMade: null
    };
    this.handleNav = this.handleNav.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.makeCartVisible = this.makeCartVisible.bind(this);
    this.loadingWait = this.loadingWait.bind(this);
    this.checkOrderCanBeCompleted = this.checkOrderCanBeCompleted.bind(this);
    this.closeEggsInStore = this.closeEggsInStore.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  makeCartVisible () {
    this.setState({
      cartVisible: !this.state.cartVisible
    })
  }

  handleNav (location) {
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
    }, 500)
  }

  addToCart(item, quantity) {
    var currentCart = this.state.cart;
    if (this.state.cart.length > 0) {
      item.completed = false;
      for (var i = 0; i < currentCart.length; i ++) {
        if (currentCart[i].name === item.name) {
          currentCart[i].quantity = currentCart[i].quantity + quantity;
          item.completed = true
        }
      }
      if (item.completed === false) {
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
          if (currentCart[i].quantity === 0) {
            currentCart.splice(i);
          }
        }
      }
    }
    this.setState({
      cart: currentCart
    });
  }

  async checkOrderCanBeCompleted () {
    var currentCart = this.state.cart;
    this.setState({
      loading: true
    });
    var currentEggsInCart = currentCart.reduce((acc, item)=>{
      return acc + (item.number * item.quantity);
    }, 0);
    const response = await fetch('https://wt-68dc6486277619b05f4ee73ad2a8a48e-0.sandbox.auth0-extend.com/egg-store-be/quantity')
    const resJSON = await response.json();  
    // add error handling
    this.setState({
      loading: false
    });
    const currentEggsInStore = resJSON.total;
    if (currentEggsInCart > currentEggsInStore) {
      this.setState({
        eggsInStore: currentEggsInStore
      });
      return false;
    } else {
      this.setState({
        eggsInStore: null,
      });
      return true;
    }
  };

  closeEggsInStore () {
    this.setState({
      eggsInStore: null
    })
  };

  submitOrder ({name, details, paid, email, telephone}) {
    const order = {
      name: name,
	    paid: paid,
	    notes: details,
      order: this.state.cart,
      email: email,
      telephone: telephone
    };
    this.setState({loading: true});

    return fetch('https://wt-68dc6486277619b05f4ee73ad2a8a48e-0.sandbox.auth0-extend.com/egg-store-be/orders/add', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => {
        this.setState({
          orderMade: res.newOrder,
          loading: false,
          cart: []
        }, ()=> {
          this.handleNav('Order Completed')
        });
    })
    .catch(err => {
        console.log({error: err})
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserNav 
            handleNav={this.handleNav} 
            makeCartVisible={this.makeCartVisible}
          />
          <Logo handleNav={this.handleNav}/>
        </header>
        {this.state.eggsInStore && 
          <EggsInStore 
            eggsInStore={this.state.eggsInStore} 
            closeEggsInStore={this.closeEggsInStore}
          />}
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
            checkOrderCanBeCompleted={this.checkOrderCanBeCompleted}
            submitOrder={this.submitOrder}
          />
        }
        {this.state.location === 'Order Completed' &&
          <OrderCompleted 
            order={this.state.orderMade}
            handleNav={this.handleNav}
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

