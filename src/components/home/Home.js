import React,{useEffect,useState} from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Home.css'

export default function Home() {

    const [review, setReview] = useState([]);


    const getData = ()=>{

        fetch('http://localhost:2882/user/review',{
            mode: 'cors',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })

        .then(async(data)=>{
            const rev = await data.json();
            setReview(rev)
        })
 
    }
    useEffect(()=>{
        getData()
    },[])



  return (
    <>
    <Navbar/>

    <div className="container row mt-5 m-auto">
        <div className="col-sm-6 bold" > 
        The beautiful thing about learning is that nobody can take it away from you.
        </div>
        <div className="col-sm-6">
            <img src="https://media.istockphoto.com/photos/elearning-online-education-or-internet-encyclopedia-concept-open-and-picture-id1263424631?b=1&k=20&m=1263424631&s=612x612&w=0&h=EJAv5q-L9GcPM7KVUngaapW67C_lNGmhRaYL-U58TWQ=" alt="" />
        </div>
    </div>

    <div className="popular-subject text-center mt-5">
        <h2>Popular Subjects</h2>

        <div className="popular-subjects">
            <a href="/domain/Web development"><i class="fa fa-light fa-diagram-project"></i>Web Development</a>
            <a href="/domain/Database"><i class="fa fa-light fa-database"></i> DBMS</a>
            <a href="/domain/Artificial intelligence"><i class="fa fa-light fa-robot"></i>Artificial Intelligence</a>
            <a href="/domain/Cloud Computing"><i class="fa fa-light fa-cloud"></i>Cloud Computing</a>
            <a href="/domain/Android Development"><i class="fa fa-light fa-cloud"></i>Android Development</a>
        </div>
    </div>

    <div className="about-us">
        <h2>What you think about us</h2>

        <p>
            Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.
            Educational website can include websites that have games, videos or topic related resources that act as tools to enhance learning and supplement classroom teaching. These websites help make the process of learning entertaining and attractive to the student, especially in today's age.
            Using HTML(HyperText Markup Language), CSS(Cascading Style Sheet), JavaScript, we can make learning more easier and in a interesting way.
        </p>
    </div>

    <div className="review" id="review">
        <h2>What the Students Say About Us?</h2>
        <div className="card-group">    
       { 
       
       review.map((reviewer)=>(
        <div className="review-card">
                <img src="https://i.ibb.co/WWgbXMx/352002-account-circle-icon.png" alt="352002-account-circle-icon" border="0"></img>
                <br />
                Name : {reviewer.name}
                <br />
                Course : {reviewer.course}
                <br />
                Review : {reviewer.message}
        </div>
        
        
       ))

              }

              </div>
    </div>

    <div className="add-review">
        
        <form action="http://localhost:2882/user/addReview" method="post">
        <h2 className='mb-4'>Add your Review here</h2>
            <input type="text" className='form-control' name="name" placeholder='Enter your name' id="" />
            <br />
            <input type="text" className='form-control' name="course" placeholder='Enter the course' id="" />
            <br />
            <textarea name="message" className='form-control' id="" placeholder='Enter your review here' cols="30" rows="10"></textarea>
            <br />
            <input type="number" name="stars" placeholder='Give rating from 1 to 5' className='form-control' max='5' min='1' id="" />
            <br />
            <button type="submit" className='btn btn-success'>Submit a Review</button>
        </form>
    </div>
        
    <Footer/>

    </>
  )
}
