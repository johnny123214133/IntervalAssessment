import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import FormBuilderPage from "../pages/FormBuilderPage.tsx";
import CustomerFormPage from "../pages/CustomerFormPage.tsx";
import SubmissionListPage from "../pages/SubmissionListPage.tsx";
import NoPage from "../pages/NoPage.tsx";
// import React from "react";

export default function AppRouter() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Outlet />}>
					<Route index element={<Home />} />
					<Route path="FormBuilder" element={<FormBuilderPage />} />
					<Route path="CustomerForm" element={<CustomerFormPage />} />
					<Route path="SubmissionList" element={<SubmissionListPage />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>

	)
}
