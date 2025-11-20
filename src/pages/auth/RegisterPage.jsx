
// import React, { useState, useRef } from "react";
// import BgLogin from "../../assets/bglogin.png";
// import Logo from "../../assets/logo.png";
// import { Eye, EyeOff, Mail, PhoneIcon } from "lucide-react";
// import LinkIn from "../../assets/linkin.png";
// import Google from "../../assets/googleicon.png";
// import Fblogo from "../../assets/loginfb.png";
// import { Link } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { request } from "../../util/request";
// import { message } from "antd";

// const RegisterPage = () => {


//   const [showPassword, setShowPassword] = useState(false);
//   const [image, setImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const fileInputRef = useRef(null);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };
//   const OnSignIn = async (value) => {
//     let formData = new FormData();
//     formData.append("name", value.name);
//     formData.append("email", value.email);
//     formData.append("password", value.password);
//     formData.append("password_confirmation", value.password_confirmation);
//     formData.append("phone", value.phone);
//     if (value.image && value.image.file) {
//       formData.append("image", value.image.file.originFileObj);
//     }
//     formData.append("type", null);

//     const res = await request("register", "post");
//     if (res && res.error) {
//             message.error("Create account fail!")

//       navigate("/login");
//     }else{
//       message.error("Create account fail!")
//     }
//   };

//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${BgLogin})` }}
//     >
//       <div className="w-8/12 flex items-center justify-center space-x-10 h-[85vh]">
//         <div className="h-full w-1/2">
//           <div className="flex flex-col items-center justify-between space-y-1">
//             <span role="img" aria-label="home" className="text-3xl">
//               🏠
//             </span>
//             <p className="text-4xl inter">Welcome Home</p>
//             <p className="text-sm text-gray-700">Please enter your details.</p>
//           </div>

//           <form className="mt-4 space-y-3">
//             <div className="flex flex-col items-center space-y-2">
//               <div
//                 className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer"
//                 onClick={triggerFileInput}
//               >
//                 {previewUrl ? (
//                   <img
//                     src={previewUrl}
//                     alt="Preview"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 ) : (
//                   <FaRegUser size={30} />
//                 )}
//               </div>

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />

//               <label
//                 onClick={triggerFileInput}
//                 className="text-sm text-gray-600 cursor-pointer hover:underline"
//               >
//                 Upload Profile Picture
//               </label>
//             </div>

//             <div className="flex justify-between space-x-2">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Full name"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <FaRegUser size={20} />
//                 </div>
//               </div>
//               <div className="relative w-full">
//                 <input
//                   type="email"
//                   placeholder="Phone Number"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <PhoneIcon size={20} />
//                 </div>
//               </div>
//             </div>

//             <div className="relative w-full">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//               />
//               <div className="absolute right-3 top-3.5 text-gray-400">
//                 <Mail size={20} />
//               </div>
//             </div>

//             <div className="flex justify-between space-x-2">
//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
//                 >
//                   <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                   {showPassword ? (
//                     <Eye size={20} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={20} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="R-Password"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
//                 >
//                   <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                   {showPassword ? (
//                     <Eye size={20} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={20} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-between items-center text-sm">
//               <label className="cl-checkbox flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span className="text-sm select-none">
//                   Remember for 30 days
//                 </span>
//               </label>
//             </div>

//             <button className="w-full py-3 inter bg-[#009639] text-white rounded-lg hover:bg-green-700 transition">
//               Sign up
//             </button>
//           </form>

//           <div className="flex items-center space-x-5 mt-1">
//             <div className="w-full h-[1px] bg-green-400"></div>
//             <p className="mb-2 text-[#009639]">or</p>
//             <div className="w-full h-[1px] bg-green-400"></div>
//           </div>

//           <div className="flex items-center justify-center space-x-4 mt-1">
//             <img src={LinkIn} alt="Linkin" className="w-14" />
//             <img src={Fblogo} alt="facebook" className="w-11" />
//             <img src={Google} alt="google" className="w-14" />
//           </div>

//           <div className="text-sm flex items-center justify-center mt-1">
//             <p>
//               Already have an account{" "}
//               <span className="text-[#009639] hover:underline cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Right Side Section */}
//         <div className="w-2/5 flex flex-col space-y-5 rounded-xl justify-center items-center h-full relative z-10">
//           <div className="absolute h-full inset-0 rounded-xl bg-gradient-to-t from-green-200 via-green-200 to-white opacity-80"></div>
//           <img src={Logo} alt="logo" className="w-[160px] relative z-20" />
//           <p className="text-[#009639] text-5xl inter relative z-20">
//             Uplevel Store
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

























// import React, { useState, useRef } from "react";
// import BgLogin from "../../assets/bglogin.png";
// import Logo from "../../assets/logo.png";
// import { Eye, EyeOff, Mail, PhoneIcon } from "lucide-react";
// import LinkIn from "../../assets/linkin.png";
// import Google from "../../assets/googleicon.png";
// import Fblogo from "../../assets/loginfb.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa";
// import { request } from "../../util/request";
// import { message } from "antd";

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     password_confirmation: '',
//   });
//   const [image, setImage] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current.click();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onSignIn();
//   };

//   const onSignIn = async () => {
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', formData.phone);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('password_confirmation', formData.password_confirmation);
//       if (image) {
//         formDataToSend.append('image', image);
//       }

//       const res = await request("register", "post", formDataToSend);
      
//       if (res && res.success) {
//         message.success("Account created successfully!");
//         navigate("/login");
//       } else {
//         const errorMessage = res?.message || "Create account failed!";
//         message.error(errorMessage);
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       message.error("An error occurred during registration");
//     }
//   };

//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${BgLogin})` }}
//     >
//       <div className="w-8/12 flex items-center justify-center space-x-10 h-[85vh]">
//         <div className="h-full w-1/2">
//           <div className="flex flex-col items-center justify-between space-y-1">
//             <span role="img" aria-label="home" className="text-3xl">
//               🏠
//             </span>
//             <p className="text-4xl inter">Welcome Home</p>
//             <p className="text-sm text-gray-700">Please enter your details.</p>
//           </div>

//           <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
//             <div className="flex flex-col items-center space-y-2">
//               <div
//                 className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer"
//                 onClick={triggerFileInput}
//               >
//                 {previewUrl ? (
//                   <img
//                     src={previewUrl}
//                     alt="Preview"
//                     className="w-20 h-20 rounded-full object-cover"
//                   />
//                 ) : (
//                   <FaRegUser size={30} />
//                 )}
//               </div>

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 name="image"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />

//               <label
//                 onClick={triggerFileInput}
//                 className="text-sm text-gray-600 cursor-pointer hover:underline"
//               >
//                 Upload Profile Picture
//               </label>
//             </div>

//             <div className="flex justify-between space-x-2">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Full name"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                   required
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <FaRegUser size={20} />
//                 </div>
//               </div>
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="Phone Number"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                   required
//                 />
//                 <div className="absolute right-3 top-3.5 text-gray-400">
//                   <PhoneIcon size={20} />
//                 </div>
//               </div>
//             </div>

//             <div className="relative w-full">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 required
//               />
//               <div className="absolute right-3 top-3.5 text-gray-400">
//                 <Mail size={20} />
//               </div>
//             </div>

//             <div className="flex justify-between space-x-2">
//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Password"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                   required
//                   minLength="8"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
//                 >
//                   <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                   {showPassword ? (
//                     <Eye size={20} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={20} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password_confirmation"
//                   value={formData.password_confirmation}
//                   onChange={handleInputChange}
//                   placeholder="Confirm Password"
//                   className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                   required
//                   minLength="8"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
//                 >
//                   <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                   {showPassword ? (
//                     <Eye size={20} className="text-gray-500" />
//                   ) : (
//                     <EyeOff size={20} className="text-gray-500" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex justify-between items-center text-sm">
//               <label className="cl-checkbox flex items-center space-x-2">
//                 <input type="checkbox" required />
//                 <span className="text-sm select-none">
//                   I agree to terms and conditions
//                 </span>
//               </label>
//             </div>

//             <button 
//               type="submit"
//               className="w-full py-3 inter bg-[#009639] text-white rounded-lg hover:bg-green-700 transition"
//             >
//               Sign up
//             </button>
//           </form>

//           <div className="flex items-center space-x-5 mt-1">
//             <div className="w-full h-[1px] bg-green-400"></div>
//             <p className="mb-2 text-[#009639]">or</p>
//             <div className="w-full h-[1px] bg-green-400"></div>
//           </div>

//           <div className="flex items-center justify-center space-x-4 mt-1">
//             <img src={LinkIn} alt="Linkin" className="w-14 cursor-pointer" />
//             <img src={Fblogo} alt="facebook" className="w-11 cursor-pointer" />
//             <img src={Google} alt="google" className="w-14 cursor-pointer" />
//           </div>

//           <div className="text-sm flex items-center justify-center mt-1">
//             <p>
//               Already have an account{" "}
//               <span className="text-[#009639] hover:underline cursor-pointer">
//                 <Link to="/login">Login</Link>
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Right Side Section */}
//         <div className="w-2/5 flex flex-col space-y-5 rounded-xl justify-center items-center h-full relative z-10">
//           <div className="absolute h-full inset-0 rounded-xl bg-gradient-to-t from-green-200 via-green-200 to-white opacity-80"></div>
//           <img src={Logo} alt="logo" className="w-[160px] relative z-20" />
//           <p className="text-[#009639] text-5xl inter relative z-20">
//             Uplevel Store
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;












import React, { useState, useRef } from "react";
import BgLogin from "../../assets/bglogin.png";
import Logo from "../../assets/logo.png";
import { Eye, EyeOff, Mail, PhoneIcon } from "lucide-react";
import LinkIn from "../../assets/linkin.png";
import Google from "../../assets/googleicon.png";
import Fblogo from "../../assets/loginfb.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { request } from "../../util/request";
import { message } from "antd";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      message.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    await onSignIn();
    setLoading(false);
  };

  const onSignIn = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('password_confirmation', formData.password_confirmation);
      if (image) {
        formDataToSend.append('image', image);
      }

      const res = await request("register", "post", formDataToSend);

      if (res && res.success) {
        message.success("Account created successfully!");
        navigate("/login");
      } else {
        const errorMessage = res?.message || "Create account failed!";
        message.error(errorMessage);
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("An error occurred during registration");
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgLogin})` }}
    >
      <div className="w-8/12 flex items-center justify-center space-x-10 h-[85vh]">
        <div className="h-full w-1/2">
          <div className="flex flex-col items-center justify-between space-y-1">
            <span role="img" aria-label="home" className="text-3xl">🏠</span>
            <p className="text-4xl inter">Welcome Home</p>
            <p className="text-sm text-gray-700">Please enter your details.</p>
          </div>

          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-2">
              <div
                className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-white cursor-pointer"
                onClick={triggerFileInput}
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <FaRegUser size={30} />
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                onClick={triggerFileInput}
                className="text-sm text-gray-600 cursor-pointer hover:underline"
              >
                Upload Profile Picture
              </label>
            </div>

            <div className="flex justify-between space-x-2">
              <div className="relative w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                  required
                />
                <div className="absolute right-3 top-3.5 text-gray-400">
                  <FaRegUser size={20} />
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                  required
                />
                <div className="absolute right-3 top-3.5 text-gray-400">
                  <PhoneIcon size={20} />
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                required
              />
              <div className="absolute right-3 top-3.5 text-gray-400">
                <Mail size={20} />
              </div>
            </div>

            <div className="flex justify-between space-x-2">
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                  required
                  minLength="8"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                  required
                  minLength="8"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3.5 flex items-center justify-center text-gray-400"
                >
                  {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="cl-checkbox flex items-center space-x-2">
                <input type="checkbox" required />
                <span className="text-sm select-none">
                  I agree to terms and conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 inter bg-[#009639] text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center"
            >
              {loading ? (
                <div role="status" className="flex items-center space-x-2">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-200 animate-spin fill-green-500"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591..."
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116..."
                      fill="currentFill"
                    />
                  </svg>
                  <span className="text-sm">Signing up...</span>
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          <div className="flex items-center space-x-5 mt-1">
            <div className="w-full h-[1px] bg-green-400"></div>
            <p className="mb-2 text-[#009639]">or</p>
            <div className="w-full h-[1px] bg-green-400"></div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-1">
            <img src={LinkIn} alt="Linkin" className="w-14 cursor-pointer" />
            <img src={Fblogo} alt="facebook" className="w-11 cursor-pointer" />
            <img src={Google} alt="google" className="w-14 cursor-pointer" />
          </div>

          <div className="text-sm flex items-center justify-center mt-1">
            <p>
              Already have an account{" "}
              <span className="text-[#009639] hover:underline cursor-pointer">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-2/5 flex flex-col space-y-5 rounded-xl justify-center items-center h-full relative z-10">
          <div className="absolute h-full inset-0 rounded-xl bg-gradient-to-t from-green-200 via-green-200 to-white opacity-80"></div>
          <img src={Logo} alt="logo" className="w-[160px] relative z-20" />
          <p className="text-[#009639] text-5xl inter relative z-20">
            Uplevel Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
