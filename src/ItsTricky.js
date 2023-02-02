import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './auth/Login'
import { SignUp } from './auth/SignUp'
import { Authorization } from './Authorization'
import { Navbar } from './navbar/Navbar'
import { Tricks } from './tricks/Tricks'
import { TrickDetails } from './tricks/TrickDetails'
import { DogContainer } from './dogs/DogContainer'
import { MyTricks } from './tricks/MyTricks'
import { DogForm } from './dogs/DogForm'

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
		<Route path="dogs/addNew" element={ <DogForm />} />
		<Route path="trick_form" element={ <MyTricks />} />
		</Route>
	</Routes>
   </> )
}





