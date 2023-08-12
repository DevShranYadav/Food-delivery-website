import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';


export default function Login() {
  const [details, setDetails] = useState({ email: "", password: ""})
   let navigate=useNavigate();

  const hundleSubmit =async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: details.email, password: details.password })
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid details");
    }
    if (json.success) {
      localStorage.setItem("userEmail", details.email)
      navigate('/');
    }

  }

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
    <div className="container">
    <form onSubmit={hundleSubmit}>      
      <div className="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email" name="email" value={details.email} onChange={onChange} />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" placeholder=" Enter Password" name="password" value={details.password} onChange={onChange} />
      </div>
      <button type="submit" className=" m-3 btn btn-success">Submit</button>
      <Link to="/singup" className='m-3 btn btn-danger'>Create new account</Link>
    </form>
  </div>
  </div>
  )
}
