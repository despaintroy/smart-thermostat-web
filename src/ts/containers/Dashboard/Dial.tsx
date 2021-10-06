import React, { useState } from 'react'

import DialCircle from './DialCircle'

function Dial(): React.ReactElement {
	const [targetTemp, setTargetTemp] = useState(72)
	return (
		<DialCircle>
			<div className='dial-stack'>
				<div
					className='adjust-button up'
					onClick={() => setTargetTemp(temp => ++temp)}
				>
					&uarr;
				</div>
				<div>
					<div>Set to</div>
					<div className='set-temp'>{targetTemp}º</div>
				</div>
				<div
					className='adjust-button down'
					onClick={() => setTargetTemp(temp => --temp)}
				>
					&darr;
				</div>
			</div>
		</DialCircle>
	)
}

export default Dial
