import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './auth/Login'
import { SignUp } from './auth/SignUp'
import { Authorization } from './Authorization'
import { Navbar } from './navbar/Navbar'
import { Tricks } from './tricks/Tricks'
import { Dogs } from './dogs/Dogs'
import { TrickForm } from './tricks/TrickForm'

export const ItsTricky = () => {
  return (<>

	 <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<SignUp />} />

		<Route path="/" element={
			<Authorization>
				<>
					<Navbar />
					<Outlet />
				</>
				
			</Authorization>

		}>

		<Route path="tricks" element={<Tricks />} />
		<Route path="dogs" element={ <Dogs />} />
		<Route path="trick_form" element={ <TrickForm />} />
		</Route>
	</Routes>
   </> )
}





