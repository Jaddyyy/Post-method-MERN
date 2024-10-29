import React from 'react'
import { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const SignUP = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')

  const theHandler = async(e) =>{
    e.preventDefault()
    let response = await fetch ('http://localhost:8282/register',{
      method: "POST",
      body: JSON.stringify({name, email, password, address, contact}),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    const data = await response.json()
    if (response.ok){
      toast.success(data.msg)
    } else{
      toast.error(data.msg)
    }
  }
  return (
    <>
    <form onSubmit={theHandler}>
    <div className="login-wrap">
  <div className="login-html">
    <input id="tab-2" type="radio" name="tab" className="sign-up" defaultChecked /><label htmlFor="tab-2" className="tab" >Sign Up</label>
    <div className="login-form">
      
      <div className="sign-up-htm">
        <div className="group">
          <label htmlFor="user" className="label">Username</label>
          <input id="user" type="text" className="input" onChange={(e) => setName(e.target.value)} value={name}  />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Address</label>
          <input id="pass" type="text" className="input" onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">Contact</label>
          <input id="pass" type="text" className="input" onChange={(e) => setContact(e.target.value)} value={contact} />
        </div>
        <button  type="submit" className="btn btn-primary">Submit</button>
        <div className="hr" />
        <div className="foot-lnk">
          </div>
      </div>
    </div>
  </div>
</div>
</form>
<Toaster/>
    </>
  )
}

export default SignUP