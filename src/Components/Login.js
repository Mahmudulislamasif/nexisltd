import React, { useState } from 'react';
import Logo from '../Components/Assests/ultimate hrm logo-05-02 2.png'
import Image from '../Components/Assests/istockphoto-1321277096-612x612 1.png'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate=useNavigate()
    const [token, setToken] = useState('');
    const onSubmitBlog=(e)=>
    {
        e.preventDefault();
        
        const submitBlogs={
            email:e.target.email.value,
            password:e.target.password.value
        }
        fetch('https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitBlogs)
             })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.access_token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                navigate('/home')
            });
        
    }
    return (
        <div className="bg-[#FFFFFF] min-h-screen">
            <img src={Logo} alt="" className="mt-16 ml-14" />
            <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
                <img src={Image} alt="" />
            </div>
            <div className="bg-white shadow-lg py-20 mx-2">
                <h1 className="font-bold text-lg">Login Form</h1>
                <form action="" onSubmit={(e)=>onSubmitBlog(e)}>
                    <input type="email" placeholder="Write Your Email Address" name="email" className="border-b-2 px-3 text-xl border-[#A4A4A4] w-3/4 focus:outline-none my-6" />
                    <input type="password" placeholder="Write Your Password" name="password"  className="border-b-2 px-3 my-6 text-xl border-[#A4A4A4] w-3/4 focus:outline-none" />
                    <input type="submit" className="border p-4 block bg-[#1678CB] mx-auto text-white rounded-lg" />
                </form>
                <h1 className="text-[#7E7E7E] my-14">Don’t have an account?<NavLink to='/signup'><span className="text-[#1678CB]">SIGNUP HERE!</span></NavLink> </h1>
            </div>
            </div>
        </div>
    );
};

export default Login;