import 'scss/global.scss'

import React from 'react'

import { Container, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'
import { signOut } from 'ts/services/auth'
import Paths from 'ts/utils/paths'

function Navigation(): React.ReactElement {
	return (
		<Navbar
			collapseOnSelect
			expand='md'
			bg='primary'
			variant='dark'
			className='mb-4'
		>
			<Container>
				<LinkContainer to={Paths.dashboard}>
					<Navbar.Brand href={Paths.dashboard}>Smart Thermostat</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<LinkContainer to={Paths.dashboard}>
							<Nav.Link>Dashboard</Nav.Link>
						</LinkContainer>
						<LinkContainer to={Paths.schedule}>
							<Nav.Link>Schedule</Nav.Link>
						</LinkContainer>
						<LinkContainer to={Paths.settings}>
							<Nav.Link>Settings</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						<Nav.Link onClick={signOut}>Sign Out</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
