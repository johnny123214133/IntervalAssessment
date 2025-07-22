/*
Build an interface over localStorage.
TODO: build out API calls to the server.
 */

// save Customer answers
import {FormSchema} from "../interfaces/FormSchema.ts";
import {FormSubmissions} from "../interfaces/FormSubmissions.ts";

const CUSTOMER_SUBMISSION_KEY:string = "customerSubmissions"
const FORM_SUBMISSION_KEY:string = "formSubmission"

export function getCustomerSubmissions():FormSubmissions {
	// get all submissions
	const customerSubmissions = localStorage.getItem(CUSTOMER_SUBMISSION_KEY)
	return customerSubmissions ? JSON.parse(customerSubmissions) : {submissions : []}
}

export function saveCustomerSubmission(form: FormSchema) {
	// persist label and answer for each field
	const customerSubmissions:FormSubmissions = getCustomerSubmissions()
	customerSubmissions.submissions.push(form)
	localStorage.setItem(CUSTOMER_SUBMISSION_KEY, JSON.stringify(customerSubmissions))
}

export function deleteCustomerSubmissions() {
	localStorage.removeItem(CUSTOMER_SUBMISSION_KEY)
}

// TODO: build these functions to save and fetch submitted forms
export function saveCurrentForm(form: FormSchema) {
	console.log(form)
	localStorage.setItem(FORM_SUBMISSION_KEY, JSON.stringify(form))
}

export function getCurrentForm() {
	const currentForm = localStorage.getItem(FORM_SUBMISSION_KEY)
	return currentForm ? JSON.parse(currentForm) : {fields : []}
}

const petCareSolutionsApi = {
	getCustomerSubmissions,
	saveCustomerSubmission,
	deleteCustomerSubmissions,
	saveCurrentForm,
	getCurrentForm
}

export default petCareSolutionsApi
