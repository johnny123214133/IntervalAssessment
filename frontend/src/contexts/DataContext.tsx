import React, { useState, useEffect, createContext, useMemo, useRef } from 'react'
import {FormField} from "../interfaces/FormField.ts";
import {FormSchema} from "../interfaces/FormSchema.ts";
// import { getCurrentForm, getSubmissions } from './functions.js'

export const CurrentFormContext = React.createContext()
export const SetCurrentFormContext = React.createContext()

export default function CommuteDataContext({Children}) {

	const [currentForm, setCurrentForm] = useState<FormSchema>({
		fields: []
	})

	useEffect(() => {
		if (!currentForm) return // prevent useEffect from running on initial mount

		// TODO: save the current form returned from the builder page
	}, [currentForm])

return (
	<>
		<CurrentFormContext.Provider value={[currentForm]}>
		<SetCurrentFormContext.Provider value={[setCurrentForm]}>
			<Children />
		</SetCurrentFormContext.Provider>
		</CurrentFormContext.Provider>
	</>
)


}
