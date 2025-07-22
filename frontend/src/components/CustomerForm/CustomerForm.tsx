import NavBar from "../NavBar/NavBar.tsx";
import {useState, useContext, useEffect} from "react";
import {
	GetCurrentFormContext,
	SaveCustomerSubmissionContext,
} from "../../contexts/DataContext.tsx";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import {FormField} from "../../interfaces/FormField.ts";
import Button from "react-bootstrap/Button";

export default function CustomerForm() {

	const [getCurrentForm] = useContext(GetCurrentFormContext)
	const [submittableForm, setSubmittableForm]= useState(getCurrentForm())
	const [saveCustomerSubmission] = useContext(SaveCustomerSubmissionContext)

	function handleInputChange(event, index:number):void {
		const fields = submittableForm.fields
		fields[index].value = event.target.value
		setSubmittableForm({...submittableForm, fields: fields})
	}

	const [validated, setValidated] = useState(false);

	function resetForm():void {
		const fields = submittableForm.fields
		fields.map((field:FormField):void => {
			field.value = ""
		})
		setSubmittableForm({...submittableForm, fields: fields})
		setValidated(false);
	}

	function saveForm(event):void  {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
			setValidated(true);
			return
		}
		saveCustomerSubmission(submittableForm)
		alert('Submission saved')
		resetForm()
	}

	return (
		<>
			<NavBar />
			<h3>Submittable Form</h3>

			<Stack as={Col} md={{ span: 8, offset: 2 }} direction={"vertical"} className={"p-4 justify-content-center"}>
				<Form noValidate validated={validated} onSubmit={saveForm}>
					{submittableForm.fields.map((field:FormField, index:number) => {
						if (field.type === "text") {
							return (
								<Form.Group key={index} className="mb-1" >
									<Stack direction={"vertical"}>
										<Form.Label column htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
										<Form.Control type={field.type} id={`field-${index}`} className={"ms-auto"} required={field.required} value={submittableForm.fields[index].value} onChange={(e) => handleInputChange(e, index)} />
										<Form.Control.Feedback type="invalid">
											Please provide a response.
										</Form.Control.Feedback>
									</Stack>
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}
								</Form.Group>
							)
						}
						if (field.type === "email") {
							return (
								<Form.Group key={index} className="mb-1" >
									<Stack direction={"vertical"}>
										<Form.Label column htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
										<Form.Control type={field.type} id={`field-${index}`} className={"ms-auto"} required={field.required} value={submittableForm.fields[index].value} onChange={(e) => handleInputChange(e, index)} />
										<Form.Control.Feedback type="invalid">
											Please provide a valid email.
										</Form.Control.Feedback>
									</Stack>
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}
								</Form.Group>
							)
						}
						else if (field.type === "textarea") {
							return (
								<Form.Group key={index} className="mb-1" >
									<Stack direction={"vertical"}>
										<Form.Label column htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
										<Form.Control as="textarea" rows={3} id={`field-${index}`} className={"ms-auto"} required={field.required} value={submittableForm.fields[index].value} onChange={(e) => handleInputChange(e, index)} />
										<Form.Control.Feedback type="invalid">
											Please provide a response.
										</Form.Control.Feedback>
									</Stack>
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}
								</Form.Group>
							)
						}
						// TODO: figure out how to capture these events
						else if (field.type === "select") {
							return (
								<Form.Group key={index} className="mb-1" >
									<Stack direction={"vertical"}>
										<Form.Label column htmlFor={`field-${index}`} className={"me-3"}>{field.label}</Form.Label>
										<Form.Select className={"ms-auto"} required={field.required}  value={submittableForm.fields[index].value} onChange={(e) => handleInputChange(e, index)} >
											{field.options.map((option:string, index:number) => {
												return (
													<option key={index} value={option}>{option}</option>
												)
											})}
										</Form.Select>
										<Form.Control.Feedback type="invalid">
											Please choose a valid option.
										</Form.Control.Feedback>
									</Stack>
									{field.required && <Form.Text className="text-muted">This is a required field.</Form.Text>}

								</Form.Group>
							)
						}
					})}
					<Stack direction={"horizontal"} className={"mt-auto justify-content-center"}>
						<Button variant={"secondary"} className={"mx-2 my-4"} type="submit">Submit</Button>
					</Stack>
				</Form>
			</Stack>
		</>

	)
}