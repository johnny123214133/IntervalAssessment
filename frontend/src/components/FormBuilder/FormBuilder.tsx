import { useState, useContext } from "react";
import NavBar from "../NavBar/NavBar.tsx";
import {CurrentFormContext} from "../../contexts/DataContext.tsx";
import {FormField} from "../../interfaces/FormField.ts";
import {FormSchema} from "../../interfaces/FormSchema.ts";

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

	const [pendingForm, setPendingForm] = useState<FormSchema>({
		fields: []
	})

		return (
		<>
			<NavBar />
			<h3>Form Options</h3>
			<p>add field, delete field, field options, save form</p>
			<br />
			<h3>Pending Form</h3>
			<p>Show pending form</p>
			{/*<FormOptions />*/}

			{/*TODO: refactor this into its own component*/}
			{pendingForm.fields && (
				{
					pendingForm.fields.map((field) => {
						return (
						if (field.type === 'select') {
							return (
								<label>{field.label}</label>
							<select>
								{field.options.map((option) => {
									return <option value={{option}}>{option}</option>
								})}
							</select>
						)
						}
						else {
							return (
								// TODO: finish other field type rendering
								<input></input>
							)
						}
					)
					})
				}
			)}

		</>
	)
}