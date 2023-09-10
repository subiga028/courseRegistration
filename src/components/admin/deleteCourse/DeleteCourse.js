import React,{useEffect,useState} from 'react'
import './DeleteCourse.css'
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
// import 'course/node_modules/bootstrap'

const DeleteCourse = () => {


    const [data, setData] = useState([]);
    const [search,setSearch] = useState('');


    const getData = ()=>{

        fetch('http://localhost:2882/user/courseCatalog',{
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })

        .then(async(data1)=>{
            const course = await data1.json();
            setData(course)
        })
 
    }
    useEffect(()=>{
        getData()
    },[])


  return (
    <>
       <Navbar/>
       
    <div className='search-box'>
        <input className='form-control' type="search" name="" id="" onChange={(event)=>{setSearch(event.target.value)}} />
        <Link to ={`/addCourse`}>
        <button className="btn-primary btn">Add Courses</button>
       </Link>
    </div>

    
    
    <div className='course-catalog card-group container'>

        {   
        data.filter(course => course.name.toLowerCase().includes(search.toLocaleLowerCase())).map(item => (
        
            <div>
                <div className="card course" key={item._id}>
                <div className="course-img">
                <img src={item.logo} alt=""  />
                </div>
                <div className="card-body">
                    <div className="card-title ">
                        {item.name}
                    </div>
                </div>
                <form action={`http://localhost:2882/admin/deleteCourse/${item._id}`} method="post">
                <input className="btn btn-danger" type='submit'value="Delete Course"/>
                </form>
                </div>
            
            </div>
        ))
        }

    </div>
    
    
    
    </>
  )
}



export default DeleteCourse