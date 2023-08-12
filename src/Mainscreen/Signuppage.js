import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'

export default function Signuppage() {
  let navigate=useNavigate();

  const [details, setDetails] = useState({ name: "", email: "", password: "", geoloctaion: "" })

  const hundleSubmit =async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: details.name, email: details.email, password: details.password, geolocation: details.loctaion })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('token', json.authToken)
      navigate("/login")

    }

    if (!json.success) {
      alert("Enter valid details");
    }

  }

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>
    <div className="container">

      <form onSubmit={hundleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input type="text" className="form-control" placeholder="Enter your name" name="name" value={details.name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" name="email" value={details.email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder=" Enter Password" name="password" value={details.password} onChange={onChange} />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Location</label>
          <input type="text" className="form-control" placeholder="Enter Location" name="location" value={details.geolocation} onChange={onChange} />
        </div>
        <button   type="submit" className=" m-3 btn btn-success" to="/login">Submit</button>
        <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
      </form>
    </div>
    </div>
  )
}
