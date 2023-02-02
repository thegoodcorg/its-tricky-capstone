import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const SignUp = () => {
    const [owner, setOwner] = useState({
      email: "",
      name: "",
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
      return fetch("http://localhost:8088/owners", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(owner)
      })
          .then(res => res.json())
          .then(createdUser => {
              if (createdUser.hasOwnProperty("id")) {
                  localStorage.setItem("honey_user", JSON.stringify({
                      id: createdUser.id
                  }))

                  navigate("/")
              }
          })
  }

  const handleRegister = (e) => {
      e.preventDefault()
      return fetch(`http://localhost:8088/owners?email=${owner.email}`)
          .then(res => res.json())
          .then(response => {
              if (response.length > 0) {
                  // Duplicate email. No good.
                  window.alert("Account with that email address already exists")
              }
              else {
                  // Good email, create user.
                  registerNewUser()
              }
          })
  }

  const updatenewOwner = (evt) => {
      const copy = {...owner}
      copy[evt.target.id] = evt.target.value
      setOwner(copy)
  }

  return (
      <main style={{ textAlign: "center" }} className="container--login">
          <form className="form--login" onSubmit={handleRegister}>
              <h1 className="h3 mb-3 font-weight-normal">Sign up to Its Tricky</h1>
              <fieldset>
                  <label htmlFor="name"> Full Name </label>
                  <input onChange={updatenewOwner}
                         type="text" id="name" className="form-control"
                         placeholder="John Doe" required autoFocus />
              </fieldset>
              <fieldset>
                  <label htmlFor="email"> Email address </label>
                  <input onChange={updatenewOwner}
                      type="email" id="email" className="form-control"
                      placeholder="Email address" required />
              </fieldset>
              <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
          </form>
      </main>
  )
  
}
