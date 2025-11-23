import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import List from './Pages/List';
import Registerpage from './Pages/Registerpage';
import Loginpage from './Pages/Loginpage';
import Contact from './Pages/Contact';


function App() {

   let [islogin,setIsLogin] = useState(false)

   useEffect(()=>{
      const token = localStorage.getItem("token");
      if(token){
         setIsLogin(true)
      }
      else{
         setIsLogin(false)
      }
   },[])

 return(
  <>
     <BrowserRouter>
     {/* {islogin &&<Navbar/>} */}
     <Routes>
      {/* {islogin ? (
         <> */}
            <Route path='/loginpage' element={<Loginpage/>}></Route>
            <Route path='/registerpage' element={<Registerpage/>}></Route>
             <Route path='/' element={<Home/>}></Route>
         <Route path='/list' element={<List/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
            
         {/* </>
      ):(
         <> */}
            {/* <Route path='*' element={<Loginpage/>}></Route>
        
         <Route path='/loginpage' element={<Loginpage/>}></Route>
            <Route path='/registerpage' element={<Registerpage/>}></Route>
         </>
      )} */}

     </Routes>
     </BrowserRouter>
  </>
 )
}

export default App
