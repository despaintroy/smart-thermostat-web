import React, { useEffect, useState } from 'react'

import { SchedulePoint, SetState } from 'ts/services/models'
import { getState, setStateDbRef, writeState } from 'ts/services/setState'

import { onValue } from '@firebase/database'

import DialCircle from './DialCircle'

function Dial(): React.ReactElement {
	const [setState, setSetState] = useState<SetState>()
	const [nextChange, setNextChange] = useState<SchedulePoint>()

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
						{(nextChange && (
							<span>
								Scheduled change to {nextChange.temperature}
								<br />
								at {nextChange.time}
							</span>
						)) ||
							'–'}
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
