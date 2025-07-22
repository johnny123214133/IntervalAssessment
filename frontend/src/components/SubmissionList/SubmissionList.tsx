import NavBar from "../NavBar/NavBar.tsx";
import {useContext, useEffect, useState} from "react";
import {DeleteCustomerSubmissionsContext, GetCustomerSubmissionsContext} from "../../contexts/DataContext.tsx";
import {FormSubmissions} from "../../interfaces/FormSubmissions.ts";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function SubmissionList() {

	const [getCustomerSubmissions] = useContext(GetCustomerSubmissionsContext)
	const [deleteCustomerSubmissions] = useContext(DeleteCustomerSubmissionsContext)

	const [submissions, setSubmissions] = useState((null as unknown) as FormSubmissions)

	useEffect(() => {
		setSubmissions(getCustomerSubmissions())
	}, [])

	function handleRefreshData() {
		setSubmissions(getCustomerSubmissions())
	}

	function handleDeleteData() {
		deleteCustomerSubmissions()
		setSubmissions(getCustomerSubmissions())
	}

	// TODO: break the following rendering into components
	return (
		<>
			<NavBar />
			<h3 className={"mb-3"}>Submission Data</h3>
			{submissions && (
				<>
					{submissions.submissions?.map((submission, index) => {
						return (
							<div key={"form" + index} className={"mb-4"}>
								<h5>{"Submission " + (index + 1)}</h5>
								{submission.fields.map((field, fieldIndex) => {
									return (
										<Stack key={"field" + fieldIndex} direction={"horizontal"} className={"flex-wrap justify-content-center"}>
											<p className={"p-2 m-0"}>{"Label: " + field.label}</p>
											<p className={"p-2 m-0"}>{"Value: " + field.value}</p>
										</Stack>
									)
								})
								}
							</div>
						)
					})}
				</>
			)}
			<Stack direction={"horizontal"} className={"justify-content-center"}>
				<Button variant={"secondary"} className={"mx-2"} onClick={handleRefreshData}>Refresh Data</Button>
				<Button variant={"danger"} className={"mx-2"} onClick={handleDeleteData}>Delete Data</Button>
			</Stack>
		</>
	)
}