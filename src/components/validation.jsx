import React, { useState } from 'react';

const Validation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value) error = 'Name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Invalid email address';
        break;
      case 'contact':
        const contactRegex = /^[0-9]{10}$/;
        if (!contactRegex.test(value)) error = 'Contact must be a 10-digit number';
        break;
      case 'password':
        if (value.length < 6) error = 'Password must be at least 6 characters long';
        break;
      case 'confirmPassword':
        if (value !== formData.password) error = 'Passwords do not match';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: error
    });

    const allFieldsFilled = Object.values({
      ...formData,
      [name]: value
    }).every(field => field.trim() !== '');

    const allFieldsValid = Object.values({
      ...errors,
      [name]: error
    }).every(error => error === '');

    setIsFormValid(allFieldsFilled && allFieldsValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div><h1>Registration Form</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        {errors.contact && <span className="error">{errors.contact}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
    </div>
  );
};

export default Validation;