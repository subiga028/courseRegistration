import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './AddCourse.css'

export default function AddCourse() {
  return (
    <div>
        <Navbar/>
        <div className="add-course-container">
            <h2>Add a new course</h2>
        <form action="http://localhost:2882/admin/addCourse" method='post'>
            <input type="text" className='form-control' name="name" placeholder='Enter Course Name' id="" />
            <br />
            <input type="text" className='form-control' name="logo" placeholder='Enter course image link' id="" />
            <br />
            <input type="text" className='form-control' name="pre_requisite" id="" placeholder='Enter course pre_requisite' />
            <br />
            <input type="text" className='form-control' name="duration" id="" placeholder='Enter Course Duration in weeks' />
            <br />
            {/* <input type="text" className='form-control' name="domain" placeholder='Enter course Domain' id="" /> */}

            <div class="dropdown">
            <select class="form-select" aria-label="Default select example" name='domain'>
              <option selected>Select course Domain</option>
              <option value="Programming language">Programming language</option>
              <option value="Artificial intelligence">Artificial Intelligence</option>
              <option value="Web development">Web Development</option>
              <option value="Database">Database</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Android Development">Android Development</option>
            </select>
          </div>
            <br />
            <input type="submit" className='btn btn-success' value='Add Course'></input>
            <br />
        </form>
        </div>
    </div>
  )
}
