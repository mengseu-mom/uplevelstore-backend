// import React, { useState } from "react";
// import BgLogin from "../../assets/bglogin.png";
// import Logo from "../../assets/logo.png";
// import { Eye, EyeOff, Mail } from "lucide-react";
// import LinkIn from "../../assets/linkin.png";
// import Google from "../../assets/googleicon.png";
// import Fblogo from "../../assets/loginfb.png";
// import { Link, useNavigate } from "react-router-dom";
// import {request } from "../../util/request"
// import { profileStore } from "../../store/profileStore";
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const {setProfile,setAccessToken} = profileStore();
//   const [showPassword, setShowPassword] = useState(false); // Password hidden by default

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const onLogin = async (values) => {
//     const param = {
//       email: values.username,
//       password: values.password
//     }
//     const res = await request("login","post");
//     if(res && !res.error){
//       setProfile(res.user);
//       setAccessToken(res.access_token)
//       navigate("/")
//     }
//   }
//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${BgLogin})` }}
//     >
//       <div className=" w-8/12 flex items-center justify-center space-x-10 h-[80vh]">
//         <div className="h-full w-2/5">
//           <div className=" flex flex-col items-center justify-between space-y-3">
//             <span role="img" aria-label="home" className=" text-3xl">
//               🏠
//             </span>
//             <p className=" text-4xl inter">Welcome Home</p>
//             <p className=" text-sm text-gray-700">Please enter your details.</p>
//           </div>
//           <form className=" mt-7   space-y-6">
//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none "
//               />
//               <div className="absolute right-3 top-2.5 text-gray-400">
//                 <Mail size={20} />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none "
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-2.5 flex items-center justify-center text-gray-400"
//               >
//                 {/* Line separator before the icon */}
//                 <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                 {showPassword ? (
//                   <Eye size={20} className="text-gray-500" />
//                 ) : (
//                   <EyeOff size={20} className="text-gray-500" />
//                 )}
//               </button>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex justify-between items-center text-sm">
//               <label className="cl-checkbox flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   // checked={checked}
//                   // onChange={onChange}
//                   // disabled={disabled}
//                 />
//                 <span className="text-sm select-none">
//                   Remember for 30 days
//                 </span>
//               </label>

//               <a href="#" className="text-green-500 text-sm hover:underline">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Login Button */}
//             <button className="w-full py-3 inter bg-[#009639] text-white rounded-lg hover:bg-green-700 transition">
//               Login
//             </button>
//           </form>
//           <div className="flex items-center space-x-5 mt-5">
//             <div className=" w-full h-[1px] bg-green-400"></div>

//             <p className=" mb-2 text-[#009639]">or</p>
//             <div className=" w-full h-[1px] bg-green-400"></div>
//           </div>
//           <div className=" flex items-center justify-center space-x-4 mt-3">
//             <img src={LinkIn} alt="Linkin" className="w-14" />
//             <img src={Fblogo} alt="facebook" className="w-11" />
//             <img src={Google} alt="goole" className="w-14" />
//           </div>
//           <div className=" text-sm flex items-center justify-center mt-3">
//             <p>
//               Don't you have an account ?{" "}
//               <span className="text-[#009639] hover:underline cursor-pointer">
//                   {/* <a href="register">Sign up</a> */}
//                   <Link to="/register"> Sign up</Link>
//               </span>
//             </p>
//           </div>
//         </div>
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

// export default LoginPage;












// import React, { useState } from "react";
// import BgLogin from "../../assets/bglogin.png";
// import Logo from "../../assets/logo.png";
// import { Eye, EyeOff, Mail } from "lucide-react";
// import LinkIn from "../../assets/linkin.png";
// import Google from "../../assets/googleicon.png";
// import Fblogo from "../../assets/loginfb.png";
// import { Link, useNavigate } from "react-router-dom";
// import { request } from "../../util/request";
// import { profileStore } from "../../store/profileStore";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { setProfile, setAccessToken } = profileStore();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // ⬅️ loading state

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const onLogin = async (values) => {
//     setLoading(true); // start loading
//     const param = {
//       email: values.email,
//       password: values.password,
//     };
//     const res = await request("login", "post", param);
//     setLoading(false); // stop loading

//     if (res && !res.error) {
//       setProfile(res.user);
//       setAccessToken(res.access_token);
//       navigate("/");
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin({ email, password });
//   };

//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
//       style={{ backgroundImage: `url(${BgLogin})` }}
//     >
//       <div className="w-8/12 flex items-center justify-center space-x-10 h-[80vh]">
//         <div className="h-full w-2/5">
//           <div className="flex flex-col items-center justify-between space-y-3">
//             <span role="img" aria-label="home" className="text-3xl">🏠</span>
//             <p className="text-4xl inter">Welcome Home</p>
//             <p className="text-sm text-gray-700">Please enter your details.</p>
//           </div>

//           <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
//             {/* Email Input */}
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 required
//               />
//               <div className="absolute right-3 top-2.5 text-gray-400">
//                 <Mail size={20} />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute right-3 top-2.5 flex items-center justify-center text-gray-400"
//               >
//                 <span className="h-5 w-px bg-gray-300 mr-2"></span>
//                 {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
//               </button>
//             </div>

//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             {/* Remember & Forgot */}
//             <div className="flex justify-between items-center text-sm">
//               <label className="cl-checkbox flex items-center space-x-2">
//                 <input type="checkbox" />
//                 <span className="text-sm select-none">Remember for 30 days</span>
//               </label>
//               <a href="#" className="text-green-500 hover:underline">Forgot password?</a>
//             </div>

//             {/* Login Button with loading */}
//             <button
//               type="submit"
//               className="w-full py-3 bg-[#009639] text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center"
//               disabled={loading}
//             >
//               {loading ? (
//                 <div className="flex space-x-3 items-center">
//                   <p>Logging in...</p>
//                   <div role="status">
//                     <svg
//                       aria-hidden="true"
//                       className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
//                       viewBox="0 0 100 101"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M100 50.5908C100 78.2051 77.6142 100.591 50 
//                           100.591C22.3858 100.591 0 78.2051 0 
//                           50.5908C0 22.9766 22.3858 0.59082 50 
//                           0.59082C77.6142 0.59082 100 22.9766 100 
//                           50.5908ZM9.08144 50.5908C9.08144 73.1895 
//                           27.4013 91.5094 50 91.5094C72.5987 91.5094 
//                           90.9186 73.1895 90.9186 50.5908C90.9186 
//                           27.9921 72.5987 9.67226 50 9.67226C27.4013 
//                           9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         d="M93.9676 39.0409C96.393 38.4038 97.8624 
//                           35.9116 97.0079 33.5539C95.2932 28.8227 
//                           92.871 24.3692 89.8167 20.348C85.8452 
//                           15.1192 80.8826 10.7238 75.2124 
//                           7.41289C69.5422 4.10194 63.2754 1.94025 
//                           56.7698 1.05124C51.7666 0.367541 46.6976 
//                           0.446843 41.7345 1.27873C39.2613 1.69328 
//                           37.813 4.19778 38.4501 6.62326C39.0873 
//                           9.04874 41.5694 10.4717 44.0505 
//                           10.1071C47.8511 9.54855 51.7191 
//                           9.52689 55.5402 10.0491C60.8642 
//                           10.7766 65.9928 12.5457 70.6331 
//                           15.2552C75.2735 17.9648 79.3347 
//                           21.5619 82.5849 25.841C84.9175 
//                           28.9121 86.7997 32.2913 88.1811 
//                           35.8758C89.083 38.2158 91.5421 
//                           39.6781 93.9676 39.0409Z"
//                         fill="currentFill"
//                       />
//                     </svg>
//                     <span className="sr-only">Loading...</span>
//                   </div>
//                 </div>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </form>

//           {/* Social & Signup */}
//           <div className="flex items-center space-x-5 mt-5">
//             <div className="w-full h-[1px] bg-green-400"></div>
//             <p className="mb-2 text-[#009639]">or</p>
//             <div className="w-full h-[1px] bg-green-400"></div>
//           </div>
//           <div className="flex items-center justify-center space-x-4 mt-3">
//             <img src={LinkIn} alt="Linkin" className="w-14" />
//             <img src={Fblogo} alt="Facebook" className="w-11" />
//             <img src={Google} alt="Google" className="w-14" />
//           </div>
//           <div className="text-sm flex justify-center mt-3">
//             <p>
//               Don't have an account?{" "}
//               <span className="text-[#009639] hover:underline">
//                 <Link to="/register">Sign up</Link>
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
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

// export default LoginPage;















import React, { useState } from "react";
import BgLogin from "../../assets/bglogin.png";
import Logo from "../../assets/logo.png";
import { Eye, EyeOff, Mail } from "lucide-react";
import LinkIn from "../../assets/linkin.png";
import Google from "../../assets/googleicon.png";
import Fblogo from "../../assets/loginfb.png";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../../util/request";
import { profileStore } from "../../store/profileStore";
import { message } from "antd"; // ✅ import antd message

const LoginPage = () => {
  const navigate = useNavigate();
  const { setProfile, setAccessToken } = profileStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = async ({ email, password }) => {
    setLoading(true);
    setError("");

    try {
      const res = await request("login", "post", { email, password });
      setLoading(false);

      if (res && !res.error) {
        setProfile(res.user);
        setAccessToken(res.access_token);

        // ✅ Show success message
        message.success("Login successful!");

        // ✅ Reset form fields
        setEmail("");
        setPassword("");

        // ✅ Navigate to homepage
        navigate("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setLoading(false);
      setError("Login failed. Please try again.");
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${BgLogin})` }}
    >
      <div className="w-8/12 flex items-center justify-center space-x-10 h-[80vh]">
        <div className="h-full w-2/5">
          <div className="flex flex-col items-center justify-between space-y-3">
            <span role="img" aria-label="home" className="text-3xl">🏠</span>
            <p className="text-4xl inter">Welcome Home</p>
            <p className="text-sm text-gray-700">Please enter your details.</p>
          </div>

          <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                required
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <Mail size={20} />
              </div>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 pr-10 bg-[#D9D9D9] rounded-lg focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 flex items-center justify-center text-gray-400"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-between items-center text-sm">
              <label className="cl-checkbox flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm select-none">Remember for 30 days</span>
              </label>
              <a href="#" className="text-green-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#009639] text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="flex space-x-3 items-center">
                  <p>Logging in...</p>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 
                          100.591C22.3858 100.591 0 78.2051 0 
                          50.5908C0 22.9766 22.3858 0.59082 50 
                          0.59082C77.6142 0.59082 100 22.9766 100 
                          50.5908ZM9.08144 50.5908C9.08144 73.1895 
                          27.4013 91.5094 50 91.5094C72.5987 91.5094 
                          90.9186 73.1895 90.9186 50.5908C90.9186 
                          27.9921 72.5987 9.67226 50 9.67226C27.4013 
                          9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 
                          35.9116 97.0079 33.5539C95.2932 28.8227 
                          92.871 24.3692 89.8167 20.348C85.8452 
                          15.1192 80.8826 10.7238 75.2124 
                          7.41289C69.5422 4.10194 63.2754 1.94025 
                          56.7698 1.05124C51.7666 0.367541 46.6976 
                          0.446843 41.7345 1.27873C39.2613 1.69328 
                          37.813 4.19778 38.4501 6.62326C39.0873 
                          9.04874 41.5694 10.4717 44.0505 
                          10.1071C47.8511 9.54855 51.7191 
                          9.52689 55.5402 10.0491C60.8642 
                          10.7766 65.9928 12.5457 70.6331 
                          15.2552C75.2735 17.9648 79.3347 
                          21.5619 82.5849 25.841C84.9175 
                          28.9121 86.7997 32.2913 88.1811 
                          35.8758C89.083 38.2158 91.5421 
                          39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="flex items-center space-x-5 mt-5">
            <div className="w-full h-[1px] bg-green-400"></div>
            <p className="mb-2 text-[#009639]">or</p>
            <div className="w-full h-[1px] bg-green-400"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-3">
            <img src={LinkIn} alt="Linkin" className="w-14" />
            <img src={Fblogo} alt="Facebook" className="w-11" />
            <img src={Google} alt="Google" className="w-14" />
          </div>
          <div className="text-sm flex justify-center mt-3">
            <p>
              Don't have an account?{" "}
              <span className="text-[#009639] hover:underline">
                <Link to="/register">Sign up</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Right Section */}
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

export default LoginPage;
