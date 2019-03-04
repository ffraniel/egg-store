import React, { Component } from 'react';
import './App.css';
import Store from './components/Store';
import UserNav from './components/UserNav';
import Logo from './components/Logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      location: 'home',
      loading: false
    };
    this.handleNav = this.handleNav.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserNav handleNav={this.handleNav}/>
          <Logo handleNav={this.handleNav}/>
        </header>
        <Store location={this.state.location} />
      </div>
    );
  }
}

export default App;

