import React, { Component } from 'react'
import axios from 'axios'
import { FIGURES_URL, FIGURES_DIR } from '../../const'
import './ItemList.css'

export default class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		axios
			.get(FIGURES_URL)
			.then(res => {
				let items = res.data;
				this.setState({ items });
			})
			.catch(error => console.log(error));
	}

	render() {
		let itemList = this.state.items.map(
			item => (
				<div key={item.id} className='figure-item'>
					<img src={`${FIGURES_DIR}/${item.source}`} />
					<button type='button'>add to cart</button>
				</div>
			)
		);

		return (
			<div>
				ItemList
				<div className='figure-list'>
					{itemList}
				</div>
			</div>
		);
	}
}
