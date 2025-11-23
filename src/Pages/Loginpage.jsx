    import React from 'react'
    import { useState } from 'react';
    import axios from 'axios';
import { Link } from 'react-router-dom';

    const Loginpage = () => {
    let [form,setForm] = useState({
        enroll:"",
        password:"",
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };



    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post("http://localhost:5000/login",form);
        if(res.data.success){

            localStorage.setItem("token",res.data.token)
            window.location.href = "/";
            }else{
                alert(res.data.message);

            }
    
        
        } catch (error) {
        alert((error.response?.data?.message ));

        }
    }

    return (
        <>
        <div className='login-contain'>
        <h1>Login</h1>
        <div className='login-form'>
            <form onSubmit={handlesubmit}>
            
                <input type="number" 
                    name='enroll' 
                    placeholder='Enter your Enrollment'
                    id='enroll' 
                    value={form.enroll}
                onChange={handleChange}   
                        />
            <input type="password" 
                name='password'
                id='password' 
                placeholder='Enter your Password'
                value={form.password}
                onChange={handleChange}   
                />
            <input type="submit" value="Login" />
            <Link to="/registerpage"><button>Register</button></Link>
            </form>
        </div>
        </div>

        </>
    )
    }

    export default Loginpage