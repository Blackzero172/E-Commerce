import React from "react";
import CartItem from "../../components/CartItemView/CartItemView.components";
import "./CartPage.styles.css";
import CustomButton from "../../components/CustomButton/CustomButton.components";
class CartPage extends React.Component {
	componentDidMount() {
		this.props.onChange();
	}
	render() {
		if (this.props.cart.length > 0)
			return (
				<div>
					<div className="item-container">
						<h2 className="main-header">Cart</h2>
						{this.props.cart.map((item) => {
							return (
								<CartItem
									item={item}
									key={item.id}
									amount={item.amount}
									onClick={this.props.onClick}
									updateAmount={this.props.onChange}
								/>
							);
						})}
						<p className="total-text">
							Subtotal: <span className="price-text">{this.props.subtotal}$</span>
						</p>
						<CustomButton text="Buy Now!" onClick={this.props.onBuy} classes="buy-btn"></CustomButton>
					</div>
				</div>
			);
		else {
			return (
				<div className="cart-warning">
					<p>Your cart is empty!</p>
				</div>
			);
		}
	}
}
export default CartPage;
