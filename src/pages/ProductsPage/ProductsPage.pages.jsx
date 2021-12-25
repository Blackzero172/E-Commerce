import React from "react";
import ItemView from "../../components/ItemView/ItemView.components";
import CustomButton from "../../components/CustomButton/CustomButton.components";
import "./ProductsPage.styles.css";
class ProductsPage extends React.Component {
	render() {
		return (
			<div>
				<h2 style={{ display: "flex", justifyContent: "center" }}>Products</h2>
				<div className="products-grid-container">
					{this.props.products.map((item) => {
						return (
							<ItemView item={item} key={item.id}>
								<CustomButton text="Add to Cart" onClick={this.props.onClick} id={item.id}>
									<i className="fas fa-shopping-cart"></i>
								</CustomButton>
							</ItemView>
						);
					})}
				</div>
			</div>
		);
	}
}
export default ProductsPage;
