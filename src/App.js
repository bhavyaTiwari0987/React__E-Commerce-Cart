import React from "react";
import CartItem from "./CartItem";
import Cart from './cart';
import NavBar from './NavBar';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 700,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 378,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    }
  }

  handleIncreaseQuantity = (product) => {
    console.log('hey please increase the quantity of' , product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;

    this.setState({
        products
    })
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
    
  }

  handleDeleteProduct = (id) => {
    console.log('in the ondelete function');
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
  }

  getCartCount= () => {
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  render (){
    const {products} = this.state;
    return (
      <div className="App">
        <NavBar
          count = {this.getCartCount()}
        />
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this. handleDeleteProduct}
        />
      </div>
    );
  }
 
}

export default App;
