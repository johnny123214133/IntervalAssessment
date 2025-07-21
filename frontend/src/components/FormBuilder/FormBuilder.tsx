import { useState, useContext } from "react";
import NavBar from "../NavBar/NavBar.tsx";
import {SetCurrentFormContext} from "../../contexts/DataContext.tsx";
import {FormField} from "../../interfaces/FormField.ts";
import {FormSchema} from "../../interfaces/FormSchema.ts";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import {InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function FormBuilder() {
	const defaultFieldParams: FormField = {
		label: '',
		type: 'text',
		required: true,
		options: []
	}
	const [fieldParams, setFieldParams] = useState<FormField>(defaultFieldParams)

	const [setCurrentForm] = useContext(SetCurrentFormContext)

	const [pendingForm, setPendingForm] = useState<FormSchema>({fields: []})
	const [pendingOption, setPendingOption] = useState("")

	function handleLabelChange(event): void {
		setFieldParams({...fieldParams, label: event.target.value})
	}
	function handleTypeChange(event): void {
		setFieldParams({...fieldParams, type: event.target.value})
	}
	function handleRequiredChange(event): void {
		if (event.target.value === "true") {
			setFieldParams({...fieldParams, required: true})
		}
		else {
			setFieldParams({...fieldParams, required: false})
		}
	}

	// TODO: call the following when fieldParams and Field options fields are reset simultaneously
	function resetFieldParams() {
		setFieldParams(defaultFieldParams)
	}

	function handlePendingOptionChange(event): void {
		setPendingOption(event.target.value)
	}
	function validatePendingOption(): boolean {
		if (pendingOption.length === 0) {
			alert("Option must not be blank")
			return false
		}
		if (fieldParams.options.includes(pendingOption)){
			alert("Option already exists in options")
			return false
		}
		return true
	}
	function handleAddOption():void {
		if (validatePendingOption()) setFieldParams({...fieldParams, options: [...fieldParams.options, pendingOption]})
	}
	function handleDeleteOption(i: number):void {
		const newOptions: string[] = [...fieldParams.options]
		newOptions.splice(i,1)
		setFieldParams({...fieldParams, options: newOptions})
	}

	function labelExistsinFields(label:string):boolean {
		for (const field of pendingForm.fields) {
			if (label === field.label) return true
		}
		return false
	}
	function validateFieldParams():boolean {
		if (fieldParams.label === "") {
			alert('Label cannot be empty')
			return false
		}
		if (labelExistsinFields(fieldParams.label)) {
			alert('Label is already in use')
			return false
		}
		if (fieldParams.type === "select" && fieldParams.options.length === 0) {
			alert('Options cannot be empty for Select field types')
			return false
		}
		return true
	}
	function handleAddField():void {
		if (validateFieldParams()) {
			setPendingForm({...pendingForm, fields: [...pendingForm.fields, fieldParams]})
			// TODO: reset field options and fieldParams state
			// resetFieldParams()
		}
	}
	function handleSaveForm():void {
		setCurrentForm(pendingForm)
	}

	return (
	<>
		<NavBar />
		<Stack direction={"horizontal"} className={"align-items-start"}>
			<Col md={4} className={"p-4 flex-column"}>
				<h3>Field Options</h3>
					<Form>
						<Form.Group as={Row} className="mb-3" controlId="fieldLabel">
							<Stack direction={"horizontal"}>
								<Form.Label column htmlFor="fieldLabel" className={"me-3"}><b>Label</b></Form.Label>
								<Form.Control type="text" id="fieldLabel" className={"ms-auto"} aria-describedby="fieldLabelDescription"
							              onChange={handleLabelChange}/>
							</Stack>
							<Form.Text id="fieldLabelDescription" muted>
								Enter a label for the field you want to add.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="fieldRequired">
							<Stack direction={"horizontal"}>
								<Form.Label htmlFor="fieldRequired" className={"me-auto"}><b>Field Required?</b></Form.Label>
								<Form.Check inline type="radio" name="fieldRequiredGroup" value="true" label="True"
								            checked={fieldParams.required} onChange={handleRequiredChange}/>
								<Form.Check inline type="radio" name="fieldRequiredGroup" value="false" label="False"
								            checked={!fieldParams.required} onChange={handleRequiredChange}/>
							</Stack>
						</Form.Group>

						<Form.Group className="mb-3" controlId="fieldType">
							<Stack direction={"horizontal"}>
								<Form.Label htmlFor="fieldType" className={"me-auto"}><b>Field Type</b></Form.Label>
								<Form.Check inline type="radio" name="fieldTypeGroup" value="text" label="text"
								            checked={fieldParams.type === 'text'} onChange={handleTypeChange}/>
								<Form.Check inline type="radio" name="fieldTypeGroup" value="textarea" label="textarea"
								            checked={fieldParams.type === 'textarea'} onChange={handleTypeChange}/>
								<Form.Check inline type="radio" name="fieldTypeGroup" value="email" label="email"
								            checked={fieldParams.type === 'email'} onChange={handleTypeChange}/>
								<Form.Check inline type="radio" name="fieldTypeGroup" value="select" label="select"
								            checked={fieldParams.type === 'select'} onChange={handleTypeChange}/>
							</Stack>
						</Form.Group>

						{(fieldParams.type === "select") && (
							<Stack direction="vertical" className={"mb-3"}>
								<Stack direction={"horizontal"}>
									<Form.Label column id="optionLabel" className={"me-3 mb-3"}><b>Options</b></Form.Label>
									<InputGroup className={"ms-auto mb-3"}>
										{/*<InputGroup.Text id="optionLabel">Option</InputGroup.Text>*/}

										<Form.Control
											placeholder="option 1"
											aria-describedby="optionLabel"
											onChange={handlePendingOptionChange}
										/>
										<Button onClick={handleAddOption}>Add Option</Button>
									</InputGroup>
								</Stack>
								<p className="px-3 py-2 m-0"><b>Options: (click to remove)</b></p>
								<Stack direction="horizontal" className={"flex-wrap justify-content-center"}>
									{fieldParams.options.map((option, index) => {
										return (
											<p key={index} className="px-3 py-2 m-0 paragraph-button"
											   onClick={() => handleDeleteOption(index)}>{option}</p>
										)
										})
									}
								</Stack>
							</Stack>
						)}
						<Stack direction={"horizontal"} className={"mt-auto justify-content-center"}>
							<Button className={"mx-2"} onClick={handleAddField}>Add Field</Button>
							<Button className={"mx-2"} onClick={handleSaveForm}>Save Form</Button>
						</Stack>
					</Form>
			</Col>

			{/* TODO: Merge this with CustomerForm's form rendering. Or are they too different? Else, isolate into its own component */}
			<Col md={8} className={"p-4"}>
				<h3>Pending Form</h3>
				<Form>
					{pendingForm.fields.map((field, index) => {
						if (field.type === "text" || field.type === "email") {
							return (
								<Form.Group className="mb-1" controlId={`field-${index}`}>
									<Form.Label htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
									<Form.Control type={field.type} id={`field-${index}`} />
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}
								</Form.Group>
							)
						}
						else if (field.type === "textarea") {
							return (
								<Form.Group className="mb-1" controlId={`field-${index}`}>
									<Form.Label htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
									<Form.Control as="textarea" rows={3} id={`field-${index}`}/>
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}
								</Form.Group>
							)
						}
						else if (field.type === "select") {
							return (
								<Form.Group className="mb-1" controlId={`field-${index}`}>
									<Form.Select>
										{field.options.map((option:string) => {
											return (
												<option value={option}>{option}</option>
											)
										})}
									</Form.Select>
								</Form.Group>
							)
						}
					})}
				</Form>
			</Col>
		</Stack>
	</>
	)
}