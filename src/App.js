import React from "react";
import CartItem from "./CartItem";
import Cart from './cart';
import NavBar from './NavBar';
import {firestore} from './firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      products: [],
      loading: true
    }
    
  }

  componentDidMount(){
      // firestore()
      // .collection('products')
      // .get()
      // .then((snapshot) => {
      //   console.log(snapshot);

      //   snapshot.docs.map((doc) => {
      //     console.log(doc.data());
      //   });

      //   const products = snapshot.docs.map((doc) => {
      //     const data = doc.data();
      //     data['id']= doc.id;
      //     return data;
      //   })
      //   this.setState({
      //     products,
      //     loading: false
      //   })
      // })

      firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id']= doc.id;
          return data;
        })
        this.setState({
          products,
          loading: false
        })
      })
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
        products: products,
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

  addProduct = () => {
   firestore()
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 5,
      title: 'Washing Maching'
    })
    .then ((docRef) => {
      console.log('product has been added!',docRef);
    })
    .catch((err) => {
      console.log('Error: ' , err);
    })
  }

  render (){
    const {products , loading} = this.state;
    return (
      <div className="App">
        <NavBar
          count = {this.getCartCount()}
        />
        <button style = {{padding: 15, fontSize: 15}} onClick= {this.addProduct}>Add a Product</button>
        <Cart 
           products = {products}
           onIncreaseQuantity = {this.handleIncreaseQuantity}
           onDecreaseQuantity = {this.handleDecreaseQuantity}
           onDeleteProduct = {this. handleDeleteProduct}          
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize: 20 , padding: 5}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
 
}

export default App;
