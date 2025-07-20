import { useState, useContext } from "react";
import NavBar from "../NavBar/NavBar.tsx";
import {CurrentFormContext} from "../../contexts/DataContext.tsx";
import {FormField} from "../../interfaces/FormField.ts";

export default function FormBuilder() {
	const [formParams, setFormParams] = useState<FormField>({
		label: '',
		type: 'text',
		required: true,
		options: []
	})
	const [] = useState()
	// const [setFormParams] = useContext(setFormParams)
	const [currentForm, setCurrentForm] = useContext(CurrentFormContext)

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