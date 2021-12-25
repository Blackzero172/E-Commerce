import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.pages";
import ProductsPage from "./pages/ProductsPage/ProductsPage.pages";
import CartPage from "./pages/CartPage/CartPage.pages";
import mockAPI from "./API/mockAPI";
import Header from "./components/Header/Header.components";
class App extends React.Component {
	state = { data: [], cart: [], subtotal: 0 };
	getData = async () => {
		const res = await mockAPI.get();
		this.setState({ data: res.data });
		if (window.localStorage.getItem("cart") !== null) {
			this.setState({ cart: JSON.parse(window.localStorage.getItem("cart")) }, this.updateAmount);
		}
	};
	addToCart = (e) => {
		const itemToAdd = this.state.data.find((item) => item.id === e.target.id);
		itemToAdd.amount = 1;
		if (this.state.cart.find((item) => item.id === e.target.id) === undefined)
			this.setState({ cart: [...this.state.cart, itemToAdd] }, this.updateLocalStorage);
	};
	removeFromCart = (e) => {
		this.setState({ cart: this.state.cart.filter((item) => item.id !== e.target.id) }, this.updateAmount);
	};
	updateLocalStorage() {
		window.localStorage.setItem("cart", JSON.stringify(this.state.cart));
	}
	componentDidMount() {
		this.getData();
	}
	updateAmount = (e) => {
		if (e !== undefined) {
			const cart = this.state.cart;
			const itemToChange = cart.find((item) => item.id === e.target.id);
			if (itemToChange.amount > 1 || e.target.value > 0) itemToChange.amount += parseInt(e.target.value);
			this.setState({ cart }, this.updateLocalStorage());
		}
		let total = 0;
		this.state.cart.forEach((item) => {
			total += item.price * item.amount;
		});
		this.setState({ subtotal: total });
	};
	buyItems = () => {
		this.setState({ cart: [] }, this.updateLocalStorage());
	};
	render() {
		const { cart, data } = this.state;
		return (
			<BrowserRouter>
				<Header cartAmount={cart.length} />
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/products" exact>
					<ProductsPage products={data} onClick={this.addToCart} />
				</Route>
				<Route path="/cart" exact>
					<CartPage
						cart={cart}
						onClick={this.removeFromCart}
						subtotal={this.state.subtotal}
						onChange={this.updateAmount}
						onBuy={this.buyItems}
					/>
				</Route>
				{this.state.data.map((item) => {
					return <Route path={`/products/${item.id}`} key={item.id} />;
				})}
			</BrowserRouter>
		);
	}
}
export default App;
