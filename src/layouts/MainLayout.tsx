import { Dashboard, Person } from '@mui/icons-material'
import {
	Box,
	ListItemDecorator,
	Stack,
	Tab,
	TabList,
	Tabs,
	Typography,
} from '@mui/joy'
import DarkModeToggle from 'components/DarkModeToggle'
import { FC, ReactElement } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

interface TabData {
	label: string
	icon: ReactElement
	path: string
}

const tabs: TabData[] = [
	{
		label: 'Dashboard',
		icon: <Dashboard />,
		path: '/dashboard',
	},
	{
		label: 'Account',
		icon: <Person />,
		path: '/account',
	},
]

const MainLayout: FC = () => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<Stack sx={{ bgcolor: 'background.body', minHeight: '100vh' }}>
			<Stack direction='row' sx={{ p: 2, justifyContent: 'flex-end' }}>
				<DarkModeToggle />
			</Stack>

			<Box sx={{ flexGrow: 1 }}>
				<Outlet />
			</Box>

			<Tabs
				size='sm'
				value={location.pathname}
				onChange={(_event, value) => navigate(value as string)}
				sx={{
					bgcolor: 'unset',
					'--Tabs-gap': '6px',
					maxWidth: 600,
					width: '100%',
					mx: 'auto',
				}}
			>
				<TabList sx={{ m: 1 }}>
					{tabs.map((tab, i) => {
						const isSelected = location.pathname.startsWith(tab.path)

						return (
							<Tab
								orientation='vertical'
								color={isSelected ? 'primary' : undefined}
								value={tab.path}
								key={i}
							>
								<ListItemDecorator>{tab.icon}</ListItemDecorator>
								<Typography
									textColor={isSelected ? 'primary.700' : 'neutral.500'}
								>
									{tab.label}
								</Typography>
							</Tab>
						)
					})}
				</TabList>
			</Tabs>
		</Stack>
	)
}

export default MainLayout
