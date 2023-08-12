
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './Mainscreen/Home';
import Login from './Mainscreen/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import'./index.css';
import Signuppage from './Mainscreen/Signuppage';
import {Cart} from './Component/ContextReducer';
import MyOrder from './Mainscreen/MyOrder';


function App() {
  return (
    <Cart>
       <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/singup" element={<Signuppage/>}/>
          <Route exact path="/myOrder" element={<MyOrder/>}/>
        </Routes>
      </div>
    </Router>
    </Cart>
   
  );
}

export default App;
