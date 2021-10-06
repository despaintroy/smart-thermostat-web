import React, { useState } from 'react'

import DialCircle from './DialCircle'

function Dial(): React.ReactElement {
	const [targetTemp, setTargetTemp] = useState(72)
	const nextChange = { temp: 65, time: '6:00pm' }

	return (
		<DialCircle>
			<div className='dial-stack'>
				<div
					className='adjust-button up'
					onClick={(): void => setTargetTemp(temp => ++temp)}
				>
					&uarr;
				</div>
				<div>
					<div className='text-secondary'>SET TO</div>
					<div className='set-temp'>{targetTemp}º</div>
					<div className='text-muted mt-3'>
						Scheduled change to {nextChange.temp}º<br />
						at {nextChange.time}
					</div>
				</div>
				<div
					className='adjust-button down'
					onClick={(): void => setTargetTemp(temp => --temp)}
				>
					&darr;
				</div>
			</div>
		</DialCircle>
	)
}

export default Dial
