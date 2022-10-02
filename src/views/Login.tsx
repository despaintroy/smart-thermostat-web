import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Box, Sheet, Stack, TextField, Typography } from '@mui/joy'
import DarkModeToggle from 'components/DarkModeToggle'
import LoadingButton from 'components/inputs/LoadingButton'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { signIn } from 'services/authentication'
import * as yup from 'yup'

const schema = yup.object({
	email: yup.string().email('Invalid email address').required('Required'),
	password: yup.string().required('Required'),
})

interface FormData {
	email: string
	password: string
}

const Login: FC = () => {
	const [error, setError] = useState('')

	const { handleSubmit, formState, control } = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = (data: FormData) =>
		signIn(data.email, data.password).catch(e => setError(e.message))

	return (
		<Box sx={{ bgcolor: 'background.body', minHeight: '100vh' }}>
			<Stack direction='row' sx={{ p: 2, justifyContent: 'flex-end' }}>
				<DarkModeToggle />
			</Stack>

			<Sheet
				sx={{
					maxWidth: 400,
					mx: 'auto',
					my: 4,
					pt: 4,
					pb: 2,
					px: 2,
					borderRadius: 'sm',
					boxShadow: 'md',
					bgcolor: 'background.level1',
				}}
			>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Typography
						level='h3'
						component='h1'
						fontWeight='bold'
						textAlign='center'
					>
						Smart Thermostat
					</Typography>
					<Typography level='body2' textAlign='center' textColor='neutral.500'>
						Sign in to continue
					</Typography>

					<Stack spacing={2} sx={{ mt: 2, mb: 3 }}>
						<Controller
							name='email'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									{...field}
									error={!!formState.errors.email?.message}
									helperText={formState.errors.email?.message}
									type='email'
									label='Email'
								/>
							)}
						/>
						<Controller
							name='password'
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<TextField
									{...field}
									error={!!formState.errors.password?.message}
									helperText={formState.errors.password?.message}
									type='password'
									label='Password'
								/>
							)}
						/>
					</Stack>

					{error && (
						<Alert color='danger' sx={{ mb: 2 }}>
							{error}
						</Alert>
					)}

					<LoadingButton
						fullWidth
						loading={formState.isSubmitting}
						type='submit'
					>
						Log in
					</LoadingButton>
				</form>
			</Sheet>
		</Box>
	)
}

export default Login
