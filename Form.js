import React, { useState } from 'react';
import './forms.css';

function Form() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    add: '',
    stadd: '',
    pcname: '',
    cityname: '',
    stname: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    password2: '',
    num: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // First Name Validation (only alphabets)
    if (!/^[a-zA-Z]+$/.test(formData.fname.trim())) {
      isValid = false;
      newErrors.fname = 'First Name should only contain alphabets.';
    }

    // Last Name Validation (only alphabets)
    if (!/^[a-zA-Z]+$/.test(formData.lname.trim())) {
      isValid = false;
      newErrors.lname = 'Last Name should only contain alphabets.';
    }

    // Pin Code Validation
    if (!/^\d{6}$/.test(formData.pcname)) {
      isValid = false;
      newErrors.pcname = 'Pin Code must be 6 digits.';
    }

    // Gender Validation
    if (!formData.gender) {
      isValid = false;
      newErrors.gender = 'Please select your gender.';
    }

    // Email Validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email format.';
    }

    // Password Validation
    if (
      !/^[a-zA-Z0-9!@#$%^&*]+$/.test(formData.password) || // Only allowed characters
      formData.password.length < 8 // Minimum length
    ) {
      isValid = false;
      newErrors.password = 'Password must be at least 8 characters and include only letters, numbers, and !@#$%^&*.';
    }

    // Re-enter Password Validation
    if (formData.password !== formData.password2) {
      isValid = false;
      newErrors.password2 = 'Passwords do not match.';
    }

    // Phone Number Validation
    if (!/^\d{10}$/.test(formData.num)) {
      isValid = false;
      newErrors.num = 'Phone Number must be 10 digits.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter your First Name"
          />
          <span className="error">{errors.fname}</span>
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Enter your Last Name"
          />
          <span className="error">{errors.lname}</span>
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="add"
            value={formData.add}
            onChange={handleChange}
            placeholder="Enter your Address"
          />
        </div>

        <div>
          <label>Street Name:</label>
          <input
            type="text"
            name="stadd"
            value={formData.stadd}
            onChange={handleChange}
            placeholder="Enter Street Name"
          />
        </div>

        <div>
          <label>Pin Code:</label>
          <input
            type="text"
            name="pcname"
            value={formData.pcname}
            onChange={handleChange}
            placeholder="Enter Pin Code"
          />
          <span className="error">{errors.pcname}</span>
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            name="cityname"
            value={formData.cityname}
            onChange={handleChange}
            placeholder="Enter your City"
          />
        </div>

        <div>
          <label>State:</label>
          <input
            type="text"
            name="stname"
            value={formData.stname}
            onChange={handleChange}
            placeholder="Enter your State"
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
          <span className="error">{errors.gender}</span>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail"
          />
          <span className="error">{errors.email}</span>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
          />
          <span className="error">{errors.password}</span>
        </div>

        <div>
          <label>Re-enter Password:</label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            placeholder="Re-Enter your Password"
          />
          <span className="error">{errors.password2}</span>
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="num"
            value={formData.num}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
          />
          <span className="error">{errors.num}</span>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Form;
