import { CssVarsProvider } from '@mui/joy/styles'
import useCurrentUser from 'hooks/useCurrentUser'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import theme from 'theme'
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
		element: <p>Home</p>,
		errorElement: <Navigate to='/' replace />,
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
