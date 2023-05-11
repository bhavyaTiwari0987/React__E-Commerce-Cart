import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

class CartItem extends React.Component {
  increaseQuantity = () => {
    // this.state.qty +=1;
    // console.log(this.state.qty);
    // setState one way
    // this.setState({
    //     qty: this.state.qty +1
    // })

    // setState second way (If previous state required so use this way)
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
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

  decreaseQunatity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons*/}
            <FontAwesomeIcon
              onClick={this.increaseQuantity}
              icon={icon({ name: "circle-plus" })}
            />
            <FontAwesomeIcon
              onClick={this.decreaseQunatity}
              icon={icon({ name: "circle-minus" })}
            />
            <FontAwesomeIcon icon={icon({ name: "trash" })} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;
