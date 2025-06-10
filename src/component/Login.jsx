import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login=()=> {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res= await axios.post(BASE_URL+"/login",{
            emailId:formData?.email,
            password:formData?.password
        }, {withCredentials:true});
        dispatch(addUser(res?.data))
        return navigate("/");
    } catch(err){
        console.log(err)
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-[calc(100vh-64px)]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password" 
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;