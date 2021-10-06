import React from 'react'

import Dial from './Dial'
import IndoorCard from './IndoorCard'
import OutdoorCard from './OutdoorCard'

function Dashboard(): React.ReactElement {
	return (
		<>
			<Dial />
			<IndoorCard className='mt-3' />
			<OutdoorCard className='mt-3' />
		</>
	)
}

export default Dashboard
