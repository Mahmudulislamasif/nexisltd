import React from 'react';

const SignUpOne = ({ formData, setFormData }) => {
    return (
        <div className="sign-up-container">
      <input
        type="text"
        placeholder="Write First Name"
        value={formData.first_name}
        className="border-b-2 px-3 text-xl border-[#A4A4A4] w-3/4 focus:outline-none my-6"
        onChange={(event) =>
          setFormData({ ...formData, first_name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Write Last Name"
        className="border-b-2 px-3 my-6 text-xl border-[#A4A4A4] w-3/4 focus:outline-none"
        value={formData.last_Name}
        onChange={(event) =>
          setFormData({ ...formData, last_Name: event.target.value })
        }
      />
    </div>
    );
};

export default SignUpOne;