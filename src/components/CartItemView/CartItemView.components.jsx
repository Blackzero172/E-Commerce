import React from "react";
import "./CartItemView.styles.css";
import CustomButton from "../CustomButton/CustomButton.components";
class CartItem extends React.Component {
	amountRef = React.createRef();
	priceRef = React.createRef();
	componentDidUpdate() {
		this.amountRef.current.innerText = this.props.amount;
		this.priceRef.current.innerText = `${this.props.item.price * this.props.amount}$`;
	}

	render() {
		const amount = this.props.amount;
		const item = this.props.item;
		return (
			<div key={item.id} className="cart-item">
				<img src={item.imageURL} alt="Clothes" />
				<p className="name-text">{item.name}</p>
				<p className="price-text" ref={this.priceRef}>
					{item.price}$
				</p>
				<div className="amount-container">
					<p>Amount:</p>
					<div className="button-container">
						<CustomButton
							onClick={(e) => {
								if (amount > 1) this.setState({ amount: amount - 1 });
								this.props.updateAmount(e);
							}}
							value="-1"
							id={item.id}
						>
							<i className="fas fa-chevron-left"></i>
						</CustomButton>
						<p className="amount-text" ref={this.amountRef}>
							1
						</p>
						<CustomButton
							onClick={(e) => {
								this.setState({ amount: amount + 1 });
								this.props.updateAmount(e);
							}}
							value="1"
							id={item.id}
						>
							<i className="fas fa-chevron-right"></i>
						</CustomButton>
					</div>
				</div>
				<CustomButton text="Remove" onClick={this.props.onClick} id={item.id} />
			</div>
		);
	}
}
export default CartItem;
