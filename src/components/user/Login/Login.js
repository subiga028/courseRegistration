import React from 'react'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'
import CredentialForm from '../CredentialForm/CredentialForm'
import DetailForm from '../DetailForm/DetailForm'

export default function Login() {
  return (
    <>
        <Navbar/>
        <div className='forms'>
            <CredentialForm name="Login" action="http://localhost:2882/user/login" btn="Login"/>
            {/* <DetailForm/> */} 
            <CredentialForm name="Register" action="http://localhost:2882/user/register" btn="Register"/>
            
        </div>
        <Footer/>
    </>
  )
}
