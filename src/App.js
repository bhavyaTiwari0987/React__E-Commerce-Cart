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
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
          id: 1,
        },
        {
          price: 700,
          title: "Mobile Phone",
          qty: 10,
          img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          id: 2,
        },
        {
          price: 378,
          title: "Laptop",
          qty: 4,
          img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
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
  getCartTotal = () => {
    const {products} = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
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
        <div style={{fontSize: 20 , padding: 5}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
 
}

export default App;
