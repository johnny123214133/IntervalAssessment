import React from 'react'
import {saveCustomerSubmission, getCustomerSubmissions, deleteCustomerSubmissions, getCurrentForm, saveCurrentForm} from "./functions.ts";

export const SubmittableFormContext = React.createContext()

export const GetCurrentFormContext = React.createContext()
export const SaveCurrentFormContext = React.createContext()

export const SaveCustomerSubmissionContext = React.createContext()
export const GetCustomerSubmissionsContext = React.createContext()
export const DeleteCustomerSubmissionsContext = React.createContext()

export default function CommuteDataContext({Children}) {

return (
	<>
		<GetCurrentFormContext.Provider value={[getCurrentForm]}>
		<SaveCurrentFormContext.Provider value={[saveCurrentForm]}>

		<GetCustomerSubmissionsContext.Provider value={[getCustomerSubmissions]}>
		<SaveCustomerSubmissionContext.Provider value={[saveCustomerSubmission]}>
		<DeleteCustomerSubmissionsContext.Provider value={[deleteCustomerSubmissions]}>

			<Children />

		</DeleteCustomerSubmissionsContext.Provider>
		</SaveCustomerSubmissionContext.Provider>
		</GetCustomerSubmissionsContext.Provider>

		</SaveCurrentFormContext.Provider>
		</GetCurrentFormContext.Provider>
	</>
)


}
