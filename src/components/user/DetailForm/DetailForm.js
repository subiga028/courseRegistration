import React from 'react'

export default function DetailForm() {
  return (
    <div className='form-container'>

        <form action="http://localhost:2882/user/detail" method="post" class="was-validated credential-form">

            <h3>Register Form</h3>

            <input className="form-control is-valid" id="validationTextarea" type="email" name="username" placeholder='Email id' required/>

            <input className="form-control is-valid" required type="text" name="name" id="" placeholder='Enter your name' />

            <input className="form-control is-valid" required type="text" name="college" id="" placeholder='Enter your college name' />

            <input className="form-control is-valid" required type="text" name="degree" id="" placeholder='Degree'/>        
            
            <input className="form-control is-valid" required type="text" name="branch" id="" placeholder='branch'/>

            <input className="form-control is-valid" required type="text" name="city" id="" placeholder='city'/>

            <input className="form-control is-valid" required type="text" name="state" id="" placeholder='state'/>

            <input className="form-control is-valid" required type="text" name="gradYear" id="" placeholder='Year of graduation' />

            <input className="form-control is-valid" type="password" name="password" id="validationTextarea" placeholder='Password' required/>

            <button type="submit">Submit</button>
            
            </form>
    </div>
  )
}
