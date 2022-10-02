import { CssVarsProvider } from '@mui/joy/styles'
import useCurrentUser from 'hooks/useCurrentUser'
import MainLayout from 'layouts/MainLayout'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import theme from 'theme'
import Dashboard from 'views/Dashboard'
import Login from 'views/Login'

// Unauthenticated routes
const unauthRouter = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		errorElement: <Navigate to='/' replace />,
	},
])

// Authenticated routes
const authRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Navigate to='/' replace />,
		children: [
			{
				index: true,
				element: <Navigate to='/dashboard' replace />,
			},
			{
				path: 'dashboard/',
				element: <Dashboard />,
			},
			{
				path: 'account/',
				element: <p>Account</p>,
			},
		],
	},
])

function App() {
	const user = useCurrentUser()

	return (
		<CssVarsProvider
			// disableTransitionOnChange
			theme={theme}
		>
			<RouterProvider router={user ? authRouter : unauthRouter} />
		</CssVarsProvider>
	)
}

export default App
