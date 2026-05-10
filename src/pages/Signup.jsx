import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Shield, User, Mail, Lock, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { authAPI } from "../services/api";

function Signup() {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });
   const [errors, setErrors] = useState({});

   const validateForm = () => {
      const newErrors = {};

      if (!formData.name) {
         newErrors.name = "Name is required";
      } else if (formData.name.length < 2) {
         newErrors.name = "Name must be at least 2 characters";
      }

      if (!formData.email) {
         newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Please enter a valid email";
      }

      if (!formData.password) {
         newErrors.password = "Password is required";
      } else if (formData.password.length < 6) {
         newErrors.password = "Password must be at least 6 characters";
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
         const response = await authAPI.signup(formData);
         const { token, user, message } = response.data;

         login(user, token);
         toast.success(message || "Signup successful!");
         navigate("/login");
      } catch (error) {
         const errorMessage =
            error.response?.data?.message || "Signup failed. Please try again.";
         toast.error(errorMessage);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden bg-[#05060a]">
         {/* Background Glow */}
         <div className="absolute inset-0">
            <div className="absolute top-[-10%] left-1/2 w-[520px] h-[520px] bg-cyan-500/20 blur-[130px] rounded-full -translate-x-1/2" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[420px] h-[420px] bg-blue-600/20 blur-[130px] rounded-full" />
         </div>

         <div className="w-full max-w-md relative z-10">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-8"
            >
               <Link to="/" className="inline-flex items-center gap-2 group">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:scale-105 transition">
                     <Shield className="w-7 h-7 text-cyan-400" />
                  </div>
                  <span className="text-xl font-semibold text-white tracking-tight">
                     AuditAI
                  </span>
               </Link>

               <h2 className="mt-6 text-2xl font-semibold text-white">
                  Create your account
               </h2>

               <p className="text-sm text-white/60 mt-2">
                  Already have an account?{" "}
                  <Link
                     to="/login"
                     className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                     Sign in
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
                  {/* Name */}
                  <div>
                     <label className="text-sm text-white/70 mb-2 block">
                        Name
                     </label>
                     <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                           name="name"
                           type="text"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="John Doe"
                           className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition
                    focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
                    ${errors.name ? "border-red-400/60" : "border-white/10"}`}
                        />
                     </div>
                     {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                           {errors.name}
                        </p>
                     )}
                  </div>

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
                           placeholder="Create a password"
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
                              Creating account...
                           </>
                        ) : (
                           "Create Account"
                        )}
                     </span>

                     <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition" />
                  </button>
               </form>

               <p className="mt-6 text-center text-xs text-white/40">
                  By signing up, you agree to our Terms of Service and Privacy
                  Policy.
               </p>
            </motion.div>
         </div>
      </div>
   );
}

export default Signup;
