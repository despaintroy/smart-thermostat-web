import React from 'react'

function DialCircle(props: { children: React.ReactNode }): React.ReactElement {
	const { children, ...rest } = props
	return (
		<div className='dial dial-circle'>
			<div className='circle__inner'>
				<div className='circle__wrapper'>
					<div className='circle__content'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default DialCircle
