import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Form() {

  const navigate = useNavigate()


  const initialFormData = {
    name: '',
    username: '',
    email: '',
    mobile: '',
    agree: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const initialErrors = {
    name: '',
    username: '',
    email: '',
    mobile: '',
    agree: '',
    general: '', // Add a general error message
  };

  const [errors, setErrors] = useState(initialErrors);

  // Load form data from local storage on component mount
  useEffect(() => {
    const shouldFetchData = JSON.parse(localStorage.getItem('shouldFetchData'));

    // Check if there is a flag in local storage to determine whether to fetch data
    if (shouldFetchData) {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
    
    if (savedFormData) {
      setFormData(savedFormData);
    }
  } else {
    // If the flag is not set or false, do not fetch data automatically
  }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors(initialErrors);

    // Check if all fields are filled
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (key !== 'agree' && !formData[key]) {
        newErrors[key] = 'Please fill out this field';
        isValid = false;
      }
    });

    if (!formData.agree) {
      newErrors.agree = 'Please agree to share registration data';
      isValid = false;
    }

    if (!isValid) {
      // Display a general error message if any field is not filled
      newErrors.general = 'Please fill out all the fields';
    }

    setErrors(newErrors);

    if (isValid) {
      // Save form data to local storage
      localStorage.setItem('formData', JSON.stringify(formData));

      // Set a flag to indicate that data should be fetched on the next page load
      localStorage.setItem('shouldFetchData', JSON.stringify(true));

      
      // Navigate to the entertainment page only if all fields are filled and checkbox is checked
      if (Object.values(newErrors).every((error) => !error)) {
        navigate('/entertainment');
      }
    
    }
  };

  return (
    <div className="flex h-screen bg-black">
      <div className="flex-1 p-0">
        {/* Image covering the entire left div */}
        <img
          src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Left Div Img"
          className="w-full h-full object-cover"
        />
        {/* Text overlay at the bottom */}
        <div className="absolute bottom-0 object-cover text-left p-4 mb-10">
          <p className="text-white text-5xl font-bold mb-4">
            Discover new things on
          </p>
          <p className="text-white text-5xl font-bold mb-4">Superapp</p>
        </div>
      </div>

      <div className="flex-col flex-1 p-8 justify-center items-center">
        {/* Container in the center of the right div */}
        <div>
          <h2 className="text-5xl font-bold mb-4 text-[#72D873] text-center">
            Super app
          </h2>
          <p className="text-xl text-white text-center">
            Create your new account
          </p>
        </div>

        {/* Form */}
        {/* Form with input fields */}
        <form className="mt-14 w-full px-40" onSubmit={handleSubmit} >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full py-2 px-4 border ${
                errors.name ? 'border-red-500' : 'border-gray-800'
              } focus:border-gray-300 bg-gray-800 rounded-md text-white`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full py-2 px-4 border ${
                errors.username ? 'border-red-500' : 'border-gray-800'
              } focus:border-gray-300 bg-gray-800 rounded-md text-white`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-2 px-4 border ${
                errors.email ? 'border-red-500' : 'border-gray-800'
              } focus:border-gray-300 bg-gray-800 rounded-md text-white`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full py-2 px-4 border ${
                errors.mobile ? 'border-red-500' : 'border-gray-800'
              } focus:border-gray-300 bg-gray-800 rounded-md text-white`}
            />
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          </div>

          <div className="mt-5 text-white flex justify-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <p className="text-[#7C7C7C] pl-4">
              Share my registration data with SuperApp
            </p>
            <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
          </div>

          
            <div className="my-10 flex justify-center">
              <button
                type="submit"
                className="text-white bg-[#72D873] py-1 rounded-3xl w-full text-2xl font-bold"
              >
              Submit
              </button>
            </div>
            
          

          <p className="text-red-500 text-sm mt-1">{errors.general}</p>

          <div className="text-[#7C7C7C]">
            <p>
              By clicking on Signup. You agree to SuperApp{' '}
              <span className="text-[#72D873] cursor-pointer hover:underline">
                Terms and Conditions of Use
              </span>
            </p>
          </div>

          <div className="text-[#7C7C7C] my-5">
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{' '}
              <span className="text-[#72D873] cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
  

export default Form;
