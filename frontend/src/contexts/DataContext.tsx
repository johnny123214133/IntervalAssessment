import React, { useState, useEffect, createContext, useMemo, useRef } from 'react'
import {FormField} from "../interfaces/FormField.ts";
import {FormSchema} from "../interfaces/FormSchema.ts";
// import { getCurrentForm, getSubmissions } from './functions.js'

export const FormBuilderContext = React.createContext()

export default function CommuteDataContext({Children}) {
	const [formParams, setFormParams] = useState<FormField>({
		label: '',
		type: 'text',
		required: true
	})
	const [pendingForm, setPendingForm] = useState<FormSchema>()
return (
	<>
		<FormBuilderContext.Provider value={[setFormParams]}>
			<Children />
		</FormBuilderContext.Provider>
	</>
)


}
