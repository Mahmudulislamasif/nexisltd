import React, { useEffect, useState } from 'react';
import Logo from '../Components/Assests/ultimate hrm logo-05-02 2.png'
const Home = () => {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://test.nexisltd.com/test',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    return (
        <div>  
            <img src={Logo} alt="" className="my-12 ml-14" />
            <h1 className="bg-[#1678CB] text-white w-[480px] text-[36px] h-[72px] mx-auto pt-2">Attendance information</h1>
            <div class="overflow-x-auto my-4 container mx-auto">
             {info?.length}
           </div>
        </div>
    );
};

export default Home;