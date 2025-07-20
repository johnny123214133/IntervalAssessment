import React, { useState, useEffect, createContext, useMemo, useRef } from 'react'
import {FormField} from "../interfaces/FormField.ts";
import {FormSchema} from "../interfaces/FormSchema.ts";
// import { getCurrentForm, getSubmissions } from './functions.js'

export const CurrentFormContext = React.createContext()

export default function CommuteDataContext({Children}) {

	const [formVersion, setFormVersion] = useState(0)
	const [currentForm, setCurrentForm] = useState<FormSchema>({
		fields: []
	})
return (
	<>
		<CurrentFormContext.Provider value={[currentForm, setCurrentForm]}>
			<Children />
		</CurrentFormContext.Provider>
	</>
)


}
