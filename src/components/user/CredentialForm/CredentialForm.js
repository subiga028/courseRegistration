import React from 'react'
import './CredentialForm.css'

export default function CredentialForm(props) {
  return (
    <div className='form-container'>
        <form action={props.action} method='post' class="was-validated credential-form">
            <h2>{props.name} Form</h2>
            <input className="form-control is-valid" id="validationTextarea" type="email" name="username" placeholder='Email id' required/>
            <input className="form-control is-valid" type="password" name="password" id="validationTextarea" placeholder='Password' required/>
            <button type="submit" className='btn btn-success'>{props.btn}</button>
        </form>
    </div>
  )
}
