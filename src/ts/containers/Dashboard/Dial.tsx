import React, { useEffect, useState } from 'react'

import { SetState } from 'ts/services/models'
import { readState, setStateDbRef, writeState } from 'ts/services/setState'

import { onValue } from '@firebase/database'

import DialCircle from './DialCircle'

function Dial(): React.ReactElement {
	const [displayTemp, setDisplayTemp] = useState<number>()
	const nextChange = { temp: 65, time: '6:00pm' }

	useEffect(() => {
		readState()
			.then(r => setDisplayTemp(r.setTemp))
			.catch(() => console.error('error getting setTemp'))
	}, [])

	onValue(setStateDbRef, snapshot => {
		const data = snapshot.val() as SetState
		if (displayTemp !== data.setTemp) setDisplayTemp(data.setTemp)
	})

	const setTemp = (temp: number): void => {
		displayTemp &&
			writeState({
				setTemp: temp,
				useSchedule: true,
				timeStamp: new Date().getTime(),
			})
	}

	if (displayTemp === undefined) return <DialCircle> </DialCircle>

	return (
		<DialCircle>
			<div className='dial-stack'>
				<div
					className='adjust-button up'
					onClick={(): void => setTemp(displayTemp + 1)}
				>
					&uarr;
				</div>
				<div>
					<div className='text-secondary'>SET TO</div>
					<div className='set-temp'>{displayTemp}º</div>
					<div className='text-muted mt-3'>
						Scheduled change to {nextChange.temp}º<br />
						at {nextChange.time}
					</div>
				</div>
				<div
					className='adjust-button down'
					onClick={(): void => setTemp(displayTemp - 1)}
				>
					&darr;
				</div>
			</div>
		</DialCircle>
	)
}

export default Dial
