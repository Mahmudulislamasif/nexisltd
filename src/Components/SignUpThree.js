import React from 'react';

const SignUpThree = ({formData, setFormData}) => {
    return (
        <div className="other-info-container">
        <input
          type="password"
          placeholder="Write Password"
          className="border-b-2 px-3 my-6 text-xl border-[#A4A4A4] w-3/4 focus:outline-none"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </div>
    );
};

export default SignUpThree;