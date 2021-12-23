import "./App.css";
import Faker from "faker";
import React from "react";
import CustomButton from "./components/CustomButton/CustomButton.components";
import Counter from "./components/Counter/Counter.components";
import api from "./components/api/api";
class App extends React.Component {
	plusCounterRef = React.createRef();
	minusCounterRef = React.createRef();
	state = { card: {}, approval: 0, discard: 0, avatarList: [] };
	getNewCard = async () => {
		const random = Math.floor(Math.random() * 10);
		const card = {
			name: Faker.name.findName(),
			avatar: this.state.avatarList.data[random].urls.small,
		};
		this.setState({ card });
	};
	async componentDidMount() {
		const avatar = await api.get("", {
			params: { query: "person" },
		});
		this.setState({ avatarList: avatar }, this.getNewCard);
	}
	approveDiscardCard = (e) => {
		const key = e.target.getAttribute("counterkey");
		this.setState({ [key]: this.state[key] + 1 });
		this.getNewCard();
	};
	render() {
		return (
			<div className="main-container">
				<div className="counter-container">
					<Counter text={this.state.discard} style={{ color: "red" }}>
						<i className="fas fa-thumbs-down"></i>
					</Counter>
					<Counter text={this.state.approval} style={{ color: "green" }}>
						<i className="fas fa-thumbs-up"></i>
					</Counter>
				</div>
				<img src={this.state.card.avatar} alt="avatar" />
				<p>{this.state.card.name}</p>
				<div className="button-container">
					<CustomButton onClick={this.approveDiscardCard} counterkey="discard" style={{ color: "red" }}>
						<i className="fas fa-times" style={{ pointerEvents: "none" }}></i>
					</CustomButton>
					<CustomButton onClick={this.approveDiscardCard} counterkey="approval" style={{ color: "green" }}>
						<i className="fas fa-check" style={{ pointerEvents: "none" }}></i>
					</CustomButton>
				</div>
			</div>
		);
	}
}

export default App;
