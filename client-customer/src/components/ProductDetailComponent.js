import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';

class ProductDetail extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };

    // Bind the click event handler
    this.btnAdd2CartClick = this.btnAdd2CartClick.bind(this);
  }

  render() {
    const prod = this.state.product;
    if (prod !== null) { // Use !== to check for both value and type
      return (
        // ... Your existing JSX
      );
    }
    return <div />;
  }

  componentDidMount() {
    const params = this.props.match.params; // Use this.props.match.params to access route parameters
    this.apiGetProduct(params.id);
  }

  // ... Your other methods

  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity, 10); // Specify base 10 for parseInt
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id);
      if (index === -1) {
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert('OK BABY!');
    } else {
      alert('Please input quantity');
    }
  }
}

export default withRouter(ProductDetail);
