import petCareSolutionsApi from "../api";
import {FormSchema} from "../interfaces/FormSchema.ts";
import {FormSubmissions} from "../interfaces/FormSubmissions.ts";

export function saveCustomerSubmission(form:FormSchema):void {
	petCareSolutionsApi.saveCustomerSubmission(form)
}

export function getCustomerSubmissions():FormSubmissions {
	return petCareSolutionsApi.getCustomerSubmissions()
}

export function deleteCustomerSubmissions():void {
	petCareSolutionsApi.deleteCustomerSubmissions()
}

export function getCurrentForm():FormSchema {
	return petCareSolutionsApi.getCurrentForm()
}

export function saveCurrentForm(form:FormSchema):void {
	petCareSolutionsApi.saveCurrentForm(form)
}