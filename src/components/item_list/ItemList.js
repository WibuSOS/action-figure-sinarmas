import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../../const'
import './ItemList.css'

export default class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	componentDidMount() {
		axios
			.get(API_URL + "/figures")
			.then(res => {
				let items = res.data.figures;
				this.setState({ items });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		let itemList = this.state.items.map(
			item => {
				<div key={item.id} className='figure-item'>
					<img src={item.source} />
					<button type='button'>add to cart</button>
				</div>
			}
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
