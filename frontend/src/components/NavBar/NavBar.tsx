import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { useNavigate } from 'react-router-dom';

export default function NavBar() {
	const navigate = useNavigate();
	const handleNavigation = (event) => {
		navigate('/' + event.currentTarget.getAttribute('name'));
	};
return (
	<Navbar className="p-0 bg-white" sticky="top" expand="lg">
		<Container fluid>

			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Stack className="pt-3 px-2 bg-white" direction="vertical">
					<Row>
						<Stack direction="horizontal" gap={3}>
							<Button variant="link" onClick={handleNavigation} name='' className="navbar-link">Home</Button>
							<Button variant="link" onClick={handleNavigation} name='FormBuilder' className="navbar-link">Form Builder</Button>
							<Button variant="link" onClick={handleNavigation} name='CustomerForm' className="navbar-link">Customer Form</Button>
							<Button variant="link" onClick={handleNavigation} name='SubmissionList' className="navbar-link">Submission List</Button>
						</Stack>
					</Row>
				</Stack>
			</Navbar.Collapse>
		</Container>
	</Navbar>

					)
}