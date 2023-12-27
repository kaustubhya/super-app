import React, { useState } from 'react';
import bgImg from '../assets/form-img.jpg';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    shareData: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });

    // Clear the error message when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
    }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, update the state to display them
      setErrors(newErrors);
    } else {
      // If there are no errors, save data to localStorage
      localStorage.setItem('registrationData', JSON.stringify(formData));

      // You can also redirect the user to another page or perform other actions
    }
  };

  return (
    <section>
      <div className='register'>
        <div className='col-2'>
          <img src={bgImg} alt="" />
          <div id='imgText'>
            Discover new things on Superapp
          </div>
        </div>

        <div className='col-1'>
          <h2 id='super'>Super App</h2>
          <span id='span'>Create your new account</span>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
            <input
              className="input"
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              style={{ color: 'white' }}
              required
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

            <input
              className="input"
              type='text'
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              style={{ color: 'white' }}
              required
            />
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

            <input
              className="input"
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              style={{ color: 'white' }}
              required
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

            <input
              className="input"
              type="tel"
              name='mobile'
              pattern="[0-9]{10}"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={{ color: 'white' }}
              required
            />
            {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}

            <div id='checkbox'>
              <input
                id="checkbox"
                type="checkbox"
                name='shareData'
                checked={formData.shareData}
                onChange={handleChange}
              />
              <label htmlFor='checkbox' style={{ marginLeft: '20px', marginTop: '10px', color: 'white' }}>Share my registration data with superapp</label>
            </div>
            <button className='btn' type="submit">SIGN UP</button>

            <div id='terms'>
              <p>By clicking on Sign-up, you agree to Superapp <span id = 'sterms'>Terms and Conditions of Use</span></p>
            </div>

            <div id='terms2'>
              <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span id = 'sterms2'>Privacy Policy</span></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
