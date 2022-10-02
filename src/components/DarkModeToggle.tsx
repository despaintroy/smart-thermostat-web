import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, IconButtonProps, useColorScheme } from '@mui/joy'
import { FC } from 'react'

const DarkModeToggle: FC<IconButtonProps> = props => {
	const { mode, setMode } = useColorScheme()

	return (
		<IconButton
			variant='outlined'
			onClick={() => {
				if (mode === 'light') {
					setMode('dark')
				} else {
					setMode('light')
				}
			}}
			{...props}
		>
			{mode === 'light' ? <LightMode /> : <DarkMode />}
		</IconButton>
	)
}

export default DarkModeToggle
