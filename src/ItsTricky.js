import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './auth/Login'
import { SignUp } from './auth/SignUp'
import { Authorization } from './Authorization'
import { Navbar } from './navbar/Navbar'
import { Tricks } from './tricks/Tricks'
import { Dogs } from './dogs/Dogs'
import { TrickForm } from './tricks/TrickForm'
import { TrickDetails } from './tricks/TrickDetails'
import { DogForm } from './dogs/DogForm'
import { DogContainer } from './dogs/DogContainer'

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
		<Route path="tricks/:trickId" element={ <TrickDetails />} />
		<Route path="dogs" element={ <DogContainer />} />
		<Route path="trick_form" element={ <TrickForm />} />
		</Route>
	</Routes>
   </> )
}





