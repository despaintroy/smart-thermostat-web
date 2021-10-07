import React from 'react'

import Dial from './Dial'
import IndoorCard from './IndoorCard'
import OutdoorCard from './OutdoorCard'

function Dashboard(): React.ReactElement {
	return (
		<>
			<Dial />
			<div className='dashboard-cards-container'>
				<IndoorCard className='mt-3' />
				<OutdoorCard className='mt-3' />
			</div>
		</>
	)
}

export default Dashboard
