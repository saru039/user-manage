import React,{useState} from 'react'
import './Login.css'
import { setUsers, deleteUsers } from '../Slices/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });



  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const addUser = (event) =>{
    event.preventDefault();
    dispatch(setUsers([formData]))
  }



  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState)=>{
      return{
        ...prevState,
        [name]: value
      }
    })
  };

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //   })
  //   setTimeout(()=> setSubmitted(false), 3000)
  // }

  // console.log(formData)

  return (
    <div className='form-container'>
      <div className="form-column">
        <h1>User's Form</h1>
        <form onSubmit={addUser}>
          <input name="name" value={formData.name} type="text"  onChange={handleChange} placeholder='Enter Your Name' required/>
          <input name="email" value={formData.email} type="email"  onChange={handleChange} placeholder='Enter Your Email Address' required/>
          <input name="phone" value={formData.phone} type="number"  onChange={handleChange} placeholder='Enter Your Phone Number' required/>
          <textarea rows={3} name="message" value={formData.message} onChange={handleChange} placeholder='Message required'></textarea>
          <button type='submit'>Submit Your Data</button>
      </form>

      {
        submitted && (
          <div className='success-notification'>
            Form Submitted Successfully !!
          </div>
        )
      }
      </div>
    </div>
  )
}


export default Login