import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './Course_overview.css'

export default function Course_overview() {

    const {id} = useParams();

    const [course, setCourse] = useState([]);

    const getCourse = ()=>{
        fetch('http://localhost:2882/user/courseCatalog',{
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })

        .then(async(data1)=>{
            const course1 = await data1.json();
            setCourse(course1)
            console.log(course1)
        })
 
    }
    useEffect(()=>{
        getCourse()
    },[])

  return (
    <>
       <Navbar/>
    
    {   
        course.filter(course => course._id.includes(id)).map(item => (
        <div className="container">
        
            <div className="course-overview-img">
                <img src={item.logo} alt="j" />
            </div>
            <h2 className='course-title'>
                {item.name}
            </h2>

            <div className='pre-req'>
                <strong>Pre-requisite :</strong> {item.pre_requisite}
            </div>

            <p className='course-desc'>

            </p>

            <div className='duration'>
                <strong>Duration :</strong> {item.duration}
            </div>

            <br />

            <div className='category'>
                <strong>Category/Domain : </strong>{item.domain}
            </div>

            <br />

            <div className="criteria">
                <strong> Criteria to get a certificate : </strong>
                    Average assignment score = 25% of average of best 8 assignments out of the total 12 assignments given in the course.
                    Exam score = 75% of the proctored certification exam score out of 100

                    Final score = Average assignment score + Exam score
            </div>
            <br />
           
                <form action={`http://localhost:2882/userCourse/${item.name}`}>
                <button type="submit" className="btn btn-primary register" data-bs-toggle="modal"  data-bs-target="#exampleModal">
                    Register
                </button>
                </form>

                {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Select your mentor</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <select name="" id="" className='btn-success btn'>
                            <option className='dropdown-item' value="" disabled selected>Mentor</option>
                            <option className='dropdown-item' value="RajaDevi">Dr. R Rajadevi</option>
                            <option className='dropdown-item' value="svg">Dr. S Varadhaganapathy</option>
                            <option className='dropdown-item' value="loki">S Logeshwaran</option>
                            <option className='dropdown-item' value="lalitha">Lalitha</option>
                            <option className='dropdown-item' value="devisurya">Devisurya</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" className='btn btn-success'>Register</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        
                    </div>
                    </div> 
        </div>*/}
                {/* </div> */}







        </div>
        ))
    }

    <Footer/>
    </>
        
  )
}
