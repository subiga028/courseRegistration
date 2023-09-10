import React,{useEffect,useState} from 'react'
// import './Course_catalog.css'
import { Outlet, Link } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import './MyCourses.css'


const MyCourses = () => {


    const [data, setData] = useState([]);
    const [search,setSearch] = useState('');


    const getData = ()=>{

        fetch('http://localhost:2882/user/myCourses',{
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })

        .then(async(data1)=>{
            const course = await data1.json();
            console.log(course[0])
            setData(course[0])
        })
 
    }
    useEffect(()=>{
        getData()
    },[])


  return (
    <>
       <Navbar/>
       <h2 className='text-center'>Courses Enrolled</h2>
    <div className='search-box'>
        <input className='form-control' type="search" name="" id="" onChange={(event)=>{setSearch(event.target.value)}} />
    </div>

    
    
    <div className='course-catalog card-group container'>

        {   
        data.filter(course => course.name.toLowerCase().includes(search.toLocaleLowerCase())).map(item => (
            // <Link to ={`/overview/${item._id}`}>
                <div className="card course" key={item._id} >
                <div className="course-img">
                <img src={item.logo} alt=""  />
                </div>
                <div className="card-body">
                    <div className="card-title ">
                        {item.name}
                    </div>
                </div>
                </div>
            // </Link>
        ))
        }

    </div>
    
    {/* <>Hii</> */}
    <Footer/>
    </>
  )
}



export default MyCourses