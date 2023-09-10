import React,{useEffect,useState} from 'react'

import './Navbar.css'

export default function Navbar() {
    const [login,setLogin] = useState('')
    const [user,setUser] = useState('')
    function isLoggedIn()
    {
        fetch('http://localhost:2882/user/isLoggedIn',{
            mode: 'cors',
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })

        .then(res => res.json())
        .then(data => {
            setLogin(data.msg)
            setUser(data.user)   
        })



        // fetch("http://localhost:2882/user/isLoggedIn")

    }
    useEffect(()=>{
        isLoggedIn()
    },[])
  return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        {/* <a class="navbar-brand" href="#"><img src="https://i.ibb.co/1RTC6nL/image-removebg-preview-30.png" className='w-10' /></a> */}
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
            </li>
            {
                    (()=>{
                        if(login=='true')
                        {
                            return(
                                <>
                                <li class="nav-item">
                                <a class="nav-link" href="/#review">Review</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="/catalog" >Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="/deleteCourse" >Admin actions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="/userCourses" >My Learnings</a>
                                </li>
                                </>
                                )
                        }
                    })()
                }

          
            </ul>

            <ul className='login'>
                {
                    (()=>{
                        if(login=='false')
                        {
                            return(<li>
                            <a class=" nav-link btn btn-primary px-4 mb-2" href="/loginUser" >Login/Register</a>
                            </li>)
                        }

                        return(
                            <li className='user'>
                            <p>{user}</p>
                            <form action="http://localhost:2882/user/logout" method="post">
                                <button class="btn btn-primary">Logout</button>
                            </form>
                            </li>
                        )
                    })()
                }

                {/* <li>
                <a class="nav-link " href="/loginUser" >{login}</a>
                </li> */}

            </ul>

        </div>
        </div>
        </nav>
    </>
  )
}
