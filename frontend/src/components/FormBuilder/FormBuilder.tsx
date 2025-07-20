import { useState, useContext } from "react";
import NavBar from "../NavBar/NavBar.tsx";

export default function FormBuilder() {

const [] = useState()
	const [setFormParams] = useContext(setFormParams)

	return (
		<>
			<NavBar />
			<h3>Form Options</h3>
			<p>add field, delete field, field options, save form</p>
			<br />
			<h3>Pending Form</h3>
			<p>Show pending form</p>
			{/*<FormOptions />*/}
			{/*<PendingForm />*/}

		</>
	)
}