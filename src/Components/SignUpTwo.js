import React from 'react';

const SignUpTwo = ({ formData, setFormData }) => {
    return (
        <div className="personal-info-container">
      <input
        type="text"
        placeholder="Phone Number"  
        className="border-b-2 px-3 my-6 text-xl border-[#A4A4A4] w-3/4 focus:outline-none"
        value={formData.phone_number}
        onChange={(e) => {
          setFormData({ ...formData, phone_number: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Phone Number"  
        className="border-b-2 px-3 my-6 text-xl border-[#A4A4A4] w-3/4 focus:outline-none"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
    </div>
    );
};

export default SignUpTwo;