// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { Shield, Mail, Lock, Loader2 } from 'lucide-react'
// import { useAuth } from '../context/AuthContext'
// import { authAPI } from '../services/api'

// function Login() {
//   const navigate = useNavigate()
//   const { login } = useAuth()
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   })
//   const [errors, setErrors] = useState({})

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.email) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email'
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required'
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setLoading(true)
//     try {
//       const response = await authAPI.login(formData)
//       const { token, user, message } = response.data

//       login(user, token)
//       toast.success(message || 'Login successful!')
//       navigate('/dashboard')
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Login failed. Please try again.'
//       toast.error(errorMessage)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link to="/" className="flex items-center justify-center gap-2 mb-6">
//           <Shield className="w-8 h-8 text-gray-900" />
//           <span className="text-xl font-semibold text-gray-900">AuditAI</span>
//         </Link>
//         <h2 className="text-center text-2xl font-semibold text-gray-900">
//           Welcome back
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           {"Don't have an account? "}
//           <Link to="/signup" className="font-medium text-gray-900 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-6 shadow-sm rounded-xl border border-gray-200">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Email
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`block w-full pl-10 pr-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors ${errors.email ? 'border-red-300' : 'border-gray-200'
//                     }`}
//                   placeholder="you@example.com"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`block w-full pl-10 pr-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors ${errors.password ? 'border-red-300' : 'border-gray-200'
//                     }`}
//                   placeholder="Enter your password"
//                 />
//               </div>
//               {errors.password && (
//                 <p className="mt-1.5 text-sm text-red-500">{errors.password}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Signing in...
//                 </>
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { authAPI } from "../services/api";

function Login() {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });
   const [errors, setErrors] = useState({});

   const validateForm = () => {
      const newErrors = {};

      if (!formData.email) {
         newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Please enter a valid email";
      }

      if (!formData.password) {
         newErrors.password = "Password is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
         setErrors((prev) => ({ ...prev, [name]: "" }));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setLoading(true);
      try {
         const response = await authAPI.login(formData);
         const { token, user, message } = response.data;

         login(user, token);
         toast.success(message || "Login successful!");
         navigate("/dashboard");
      } catch (error) {
         const errorMessage =
            error.response?.data?.message || "Login failed. Please try again.";
         toast.error(errorMessage);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden bg-[#05060a]">
         {/* Background Glow */}
         <div className="absolute inset-0">
            <div className="absolute top-[-10%] left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -translate-x-1/2" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
         </div>

         <div className="w-full max-w-md relative z-10">
            {/* Logo */}
            <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex flex-col items-center mb-8"
            >
               <Link to="/" className="flex items-center gap-2 group">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:scale-105 transition">
                     <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                  <span className="text-xl font-semibold text-white tracking-tight">
                     AuditAI
                  </span>
               </Link>

               <h2 className="mt-6 text-2xl font-semibold text-white">
                  Welcome back
               </h2>
               <p className="text-sm text-white/60 mt-2 text-center">
                  Don’t have an account?{" "}
                  <Link
                     to="/signup"
                     className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                     Sign up
                  </Link>
               </p>
            </motion.div>

            {/* Card */}
            <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.4 }}
               className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)] p-8"
            >
               <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                     <label className="text-sm text-white/70 mb-2 block">
                        Email
                     </label>
                     <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                           name="email"
                           type="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="you@example.com"
                           className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition
                    focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
                    ${errors.email ? "border-red-400/60" : "border-white/10"}`}
                        />
                     </div>
                     {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                           {errors.email}
                        </p>
                     )}
                  </div>

                  {/* Password */}
                  <div>
                     <label className="text-sm text-white/70 mb-2 block">
                        Password
                     </label>
                     <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                           name="password"
                           type="password"
                           value={formData.password}
                           onChange={handleChange}
                           placeholder="Enter your password"
                           className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition
                    focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
                    ${errors.password ? "border-red-400/60" : "border-white/10"}`}
                        />
                     </div>
                     {errors.password && (
                        <p className="text-red-400 text-xs mt-1">
                           {errors.password}
                        </p>
                     )}
                  </div>

                  {/* Button */}
                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full relative overflow-hidden group py-3 rounded-xl font-medium text-white
              bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
              transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                     <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                           <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Signing in...
                           </>
                        ) : (
                           "Sign In"
                        )}
                     </span>

                     <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition" />
                  </button>
               </form>
            </motion.div>
         </div>
      </div>
   );
}

export default Login;
