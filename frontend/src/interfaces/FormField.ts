export interface FormField {
	label: string
	type: "text" | "email" | "select" | "textarea"
	required: boolean
	options: string[]
	value?: string
}