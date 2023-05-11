import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const CartItem = (props) => {
//   increaseQuantity = () => {
    // this.state.qty +=1;
    // console.log(this.state.qty);
    // setState one way
    // this.setState({
    //     qty: this.state.qty +1
    // })

    // setState second way (If previous state required so use this way)
//     this.setState((prevState) => {
//       return {
//         qty: prevState.qty + 1,
//       };
//     });
//   };
  //   testing() {
  //     const promise = new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("done");
  //       }, 5000);
  //     });

  //     promise.then(() => {
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });
  //       this.setState({ qty: this.state.qty + 10 });
  //       console.log("state", this.state);
  //     });
  //   }

  //   decreaseQunatity = () => {
  //     const { qty } = this.state;
  //     if (qty === 0) {
  //       return;
  //     }
  //     this.setState((prevState) => {
  //       return {
  //         qty: prevState.qty - 1,
  //       };
  //     });
  //   };

  console.log("this.props", props);
  const { price, title, qty, id } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons*/}
          <FontAwesomeIcon
            style={styles.cartItemAction}
            onClick={() => onIncreaseQuantity(product)}
            icon={icon({ name: "circle-plus" })}
          />
          <FontAwesomeIcon
            style={styles.cartItemAction}
            onClick={() => onDecreaseQuantity(product)}
            icon={icon({ name: "circle-minus" })}
          />
          <FontAwesomeIcon
            style={styles.cartItemAction}
            onClick={() => onDeleteProduct(id)}
            icon={icon({ name: "trash" })}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
  cartItemAction: {
    width: 20,
    height: 20,
    margin: 10,
  },
};
export default CartItem;
