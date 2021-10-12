import React, { useEffect, useState } from 'react'

import { SetState } from 'ts/services/models'
import { getState, setStateDbRef, writeState } from 'ts/services/setState'

import { onValue } from '@firebase/database'

import DialCircle from './DialCircle'

function Dial(): React.ReactElement {
	const [setState, setSetState] = useState<SetState>()
	const nextChange = { temp: 65, time: '6:00pm' }

	useEffect(() => {
		getState()
			.then(r => setSetState(r))
			.catch(() => console.error('error getting setTemp'))
	}, [])

	onValue(setStateDbRef, snapshot => {
		const s = snapshot.val() as SetState
		if (setState && setState.setTemp !== s.setTemp) setSetState(s)
	})

	const setTemp = (temp: number): void => {
		writeState({
			setTemp: temp,
			useSchedule: true,
			timeStamp: new Date().getTime(),
		})
	}

	if (setState === undefined) return <DialCircle> </DialCircle>

	return (
		<DialCircle>
			<div className='dial-stack'>
				<div
					className='adjust-button up'
					onClick={(): void => setTemp(setState.setTemp + 1)}
				>
					&uarr;
				</div>
				<div>
					<div className='text-secondary'>SET TO</div>
					<div className='set-temp'>{setState.setTemp}º</div>
					<div className='text-muted mt-3'>
						Scheduled change to {nextChange.temp}º<br />
						at {nextChange.time}
					</div>
				</div>
				<div
					className='adjust-button down'
					onClick={(): void => setTemp(setState.setTemp - 1)}
				>
					&darr;
				</div>
			</div>
		</DialCircle>
	)
}

export default Dial
