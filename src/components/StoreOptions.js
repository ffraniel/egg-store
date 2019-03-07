import React, { Component }from 'react';
import './StoreOptions.css';
import eggOptions from '../data/options';

class StoreOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
    this.buyNow = this.buyNow.bind(this);
  }

  componentDidMount () {
    setTimeout(()=>{
      this.setState({
        options: eggOptions
      });
    }, 450)
  }

  buyNow (item, quantity) {
    this.props.addToCart(item, quantity);
    this.props.handleNav('Checkout')
  }

  render() {
    return (
      <section className="Store-Options">
        {this.state.options.map((option)=>{
          return(
            <div className="Product-Option" key={option.name}>
              <h3 className="Product-Option-Title">{option.name}</h3>
              <h5 className="Product-Option-Price">£{option.price}</h5>
              {/* <img src={} className="" alt="eggs" /> */}
              <p className="">{option.number} Rare Breed Eggs</p>
              <button className="Cart-Add-Button" onClick={()=>this.props.addToCart(option, 1) }>Add to Cart</button>
              <button className="Buy-Now-Button" onClick={()=>this.buyNow(option, 1) }>Buy Now!</button>
              <button className="Reserve-Eggs-Button">Reserve Eggs</button>
            </div>
          )
        })}
      </section>
    )
  };
};

export default StoreOptions;