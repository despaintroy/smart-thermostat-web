import { Box, Stack } from '@mui/joy'
import DarkModeToggle from 'components/DarkModeToggle'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
	return (
		<Box sx={{ bgcolor: 'background.body', minHeight: '100vh' }}>
			<Stack direction='row' sx={{ p: 2, justifyContent: 'flex-end' }}>
				<DarkModeToggle />
			</Stack>

			<Outlet />
		</Box>
	)
}

export default MainLayout
