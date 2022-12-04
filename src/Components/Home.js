import React, { useEffect, useState } from 'react';
import Logo from '../Components/Assests/ultimate hrm logo-05-02 2.png'
const Home = () => {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://test.nexisltd.com/test')
        .then(res=>res.json())
        .then(data=>console.log(data))
    })
    return (
        <div>
            <img src={Logo} alt="" className="my-12 ml-14" />
        </div>
    );
};

export default Home;