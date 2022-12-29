import React, { useState } from 'react'
import { Row, Tab, Tabs } from 'react-bootstrap'

export const ItemTab = ({ itemListAll, itemListNewest }) => {
	const [key, setKey] = useState('newest');
	const [activeClass] = useState('text-dark');
	const [inactiveClass] = useState('text-active-orange');

	return (
		<Tabs activeKey={key} onSelect={k => setKey(k)} className='mb-3 mt-3'>
			<Tab eventKey='newest' title='Newest' tabClassName={key === 'newest' ? activeClass : inactiveClass}>
				<Row>
					{itemListNewest}
				</Row>
			</Tab>
			<Tab eventKey='all' title='All' tabClassName={key === 'all' ? activeClass : inactiveClass}>
				<Row>
					{itemListAll}
				</Row>
			</Tab>
		</Tabs>
	)
}
