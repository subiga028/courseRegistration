import React from 'react'
import './NoPage.css'

export default function NoPage () {
  return (
    <div class="container-center">
         <div className='page-not-found w-40 text-center'>
         <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
            <h6>404</h6>
             Page not Found.
             <br />
             Kindly check your URL
        </div>    
    </div>
   
  )
}
