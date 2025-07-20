export interface FormSubmissionItem {
	data: string[] // all of the customer's answers can be mapped to strings regardless of input type (in this app. This doesn't follow the open/close principle if we add other input types)
}