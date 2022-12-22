import React from 'react'
import { Row, Tab, Tabs } from 'react-bootstrap'

export const ItemTab = ({ itemList }) => {
	return (
		<Tabs defaultActiveKey='newest' className='mb-3 mt-3'>
			<Tab eventKey='newest' title='Newest'>
				<Row>
					{itemList}
				</Row>
			</Tab>
			<Tab eventKey='all' title='All'>
				<Row>
					{itemList}
				</Row>
			</Tab>
		</Tabs>
	)
}
