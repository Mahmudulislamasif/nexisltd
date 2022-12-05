import React, { useState } from 'react';
import Logo from '../Components/Assests/ultimate hrm logo-05-02 2.png'
import Image from '../Components/Assests/istockphoto-1321277096-612x612 1.png'
import { NavLink, useNavigate } from 'react-router-dom';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';
import SignUpThree from './SignUpThree';
import { FaGreaterThan } from 'react-icons/fa';
import {  FaLessThan} from 'react-icons/fa';
const Registration = () => {
    const [page, setPage] = useState(0);
    const navigate=useNavigate()
    const [errorMsg,setErrorMsg]=useState('')
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      other: "",
    });
    const displayData=(formData)=>{
        fetch('https://test.nexisltd.com/signup ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
             })
            .then(res => res.json())
            .then(data => {
               navigate('/home')
            });
        
    }
    const FormTitles = ["SignUp Form", "SignUp Form", "SignUp Form"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <SignUpOne formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <SignUpTwo formData={formData} setFormData={setFormData} />;
      } else {
        return <SignUpThree formData={formData} setFormData={setFormData} />;
      }
    };
   
    return (
        <div className="bg-[#FFFFFF] min-h-screen font-inter w-">
            <img src={Logo} alt="" className="mt-16 ml-14" />
            <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
                <img src={Image} alt="" />
            </div>
            <div className="bg-white shadow-lg py-20 mx-2">
                <h1 className="font-bold text-xl my-5">{FormTitles[page]}</h1>
                <div className="">
                   
                    <div className="">{PageDisplay()}</div>
                    <div className="flex justify-evenly">
                    <button
                        hidden={page == 0}
                        onClick={() => {
                        setPage((currPage) => currPage - 1);
                        }}
                    >
                        Back
                    </button>
                    <button
                        className="bg-[#1678CB] w-28 h-10 text-base text-white rounded-lg"
                        onClick={() => {
                        if (page === FormTitles.length - 1) {
                            displayData(formData)
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next Steps"}
                    </button>
                    {errorMsg}
                    </div>
                </div>
                 {
                    page==0 &&   <h1 className="text-[#7E7E7E] my-14">Already have an account <NavLink to='/login'><span className="text-[#1678CB]">LOGIN HERE</span></NavLink> </h1>
                 }
            </div>
            </div>
             <div className="mx-auto flex text-white text-4xl bg-black w-20 h-12 rounded-full py-2 pl-1 my-4">
             <FaLessThan/>
             <FaGreaterThan/>
            
             </div>
        </div>
    );
};

export default Registration;