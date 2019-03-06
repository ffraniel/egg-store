import React, { Component }from 'react';
import './StoreOptions.css';
import eggOptions from '../data/options';

class StoreOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItem: {
        number: 0,
        includeRare: undefined
      },
      options: []
    }
  }

  componentDidMount () {
    setTimeout(()=>{
      this.setState({
        options: eggOptions
      });
    }, 450)
  }

  render() {
    return (
      <section className="Store-Options">
        {this.state.options.map((option)=>{
          var optionRareClass = option.includeRare ? 'Product-Option Product-Option-Rare' : 'Product-Option';
          return(
            <div className={optionRareClass} key={option.name}>
              <h3 className="Product-Option-Title">{option.name}</h3>
              <h5 className="Product-Option-Price">£{option.price}</h5>
              {/* <img src={} className="" alt="eggs" /> */}
              <p className="">{option.number} {option.includeRare ? 'Rare Breed': ''} Eggs</p>
              <button className="Cart-Add-Button" onClick={()=>this.props.addToCart(option, 1) } >Add to Cart</button>
              <button className="Buy-Now-Button">Buy Now!</button>
            </div>
          )
        })}
      </section>
    )
  };
};

export default StoreOptions;