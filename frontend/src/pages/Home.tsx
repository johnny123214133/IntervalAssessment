// import React from "react";

import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import {useNavigate} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar.tsx";

export default function Home() {
	const navigate = useNavigate();

	const handleNavigation = (event) => {
		navigate('/' + event.currentTarget.getAttribute('name'));
	};

	return (
		<>
			<NavBar />
			<Stack direction="vertical" gap={2}>
				<h1>PetCare Solutions Home Page</h1>
				<Button variant="link" onClick={handleNavigation} name='FormBuilder' className="navbar-link">Form Builder</Button>
				<Button variant="link" onClick={handleNavigation} name='CustomerForm' className="navbar-link">Customer Form</Button>
				<Button variant="link" onClick={handleNavigation} name='SubmissionList' className="navbar-link">Submission List</Button>
			</Stack>
		</>
	)
}