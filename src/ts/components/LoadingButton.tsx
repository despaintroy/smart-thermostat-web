import React from 'react'

import { Button, ButtonProps, Spinner } from 'react-bootstrap'

interface LoadingButtonProps extends ButtonProps {
	buttonText: string
	showLoading: boolean
	onClick?: () => void
}

function LoadingButton(props: LoadingButtonProps): React.ReactElement {
	const { buttonText, showLoading, onClick, ...others } = props

	return (
		<Button disabled={showLoading} onClick={onClick} {...others}>
			{showLoading ? (
				<Spinner animation='border' as='span' size='sm' />
			) : (
				buttonText
			)}
		</Button>
	)
}

export default LoadingButton
