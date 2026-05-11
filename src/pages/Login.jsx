// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { Shield, Mail, Lock, Loader2 } from "lucide-react";
// import { useAuth } from "../context/AuthContext";
// import { authAPI } from "../services/api";

// function Login() {
//    const navigate = useNavigate();
//    const { login } = useAuth();
//    const [loading, setLoading] = useState(false);
//    const [formData, setFormData] = useState({
//       email: "",
//       password: "",
//    });
//    const [errors, setErrors] = useState({});

//    const validateForm = () => {
//       const newErrors = {};

//       if (!formData.email) {
//          newErrors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//          newErrors.email = "Please enter a valid email";
//       }

//       if (!formData.password) {
//          newErrors.password = "Password is required";
//       }

//       setErrors(newErrors);
//       return Object.keys(newErrors).length === 0;
//    };

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//       if (errors[name]) {
//          setErrors((prev) => ({ ...prev, [name]: "" }));
//       }
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       if (!validateForm()) return;

//       setLoading(true);
//       try {
//          const response = await authAPI.login(formData);
//          const { token, user, message } = response.data;

//          login(user, token);
//          toast.success(message || "Login successful!");
//          navigate("/dashboard");
//       } catch (error) {
//          const errorMessage =
//             error.response?.data?.message || "Login failed. Please try again.";
//          toast.error(errorMessage);
//       } finally {
//          setLoading(false);
//       }
//    };

//    return (
//       <div className="min-h-screen relative flex items-center justify-center px-4 py-12 overflow-hidden bg-[#05060a]">
//          {/* Background Glow */}
//          <div className="absolute inset-0">
//             <div className="absolute top-[-10%] left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -translate-x-1/2" />
//             <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
//          </div>

//          <div className="w-full max-w-md relative z-10">
//             {/* Logo */}
//             <motion.div
//                initial={{ opacity: 0, y: -10 }}
//                animate={{ opacity: 1, y: 0 }}
//                className="flex flex-col items-center mb-8"
//             >
//                <Link to="/" className="flex items-center gap-2 group">
//                   <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:scale-105 transition">
//                      <Shield className="w-7 h-7 text-cyan-400" />
//                   </div>
//                   <span className="text-xl font-semibold text-white tracking-tight">
//                      AuditAI
//                   </span>
//                </Link>

//                <h2 className="mt-6 text-2xl font-semibold text-white">
//                   Welcome back
//                </h2>
//                <p className="text-sm text-white/60 mt-2 text-center">
//                   Don’t have an account?{" "}
//                   <Link
//                      to="/signup"
//                      className="text-cyan-400 hover:text-cyan-300 transition"
//                   >
//                      Sign up
//                   </Link>
//                </p>
//             </motion.div>

//             {/* Card */}
//             <motion.div
//                initial={{ opacity: 0, scale: 0.98 }}
//                animate={{ opacity: 1, scale: 1 }}
//                transition={{ duration: 0.4 }}
//                className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)] p-8"
//             >
//                <form onSubmit={handleSubmit} className="space-y-5">
//                   {/* Email */}
//                   <div>
//                      <label className="text-sm text-white/70 mb-2 block">
//                         Email
//                      </label>
//                      <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
//                         <input
//                            name="email"
//                            type="email"
//                            value={formData.email}
//                            onChange={handleChange}
//                            placeholder="you@example.com"
//                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition
//                     focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
//                     ${errors.email ? "border-red-400/60" : "border-white/10"}`}
//                         />
//                      </div>
//                      {errors.email && (
//                         <p className="text-red-400 text-xs mt-1">
//                            {errors.email}
//                         </p>
//                      )}
//                   </div>

//                   {/* Password */}
//                   <div>
//                      <label className="text-sm text-white/70 mb-2 block">
//                         Password
//                      </label>
//                      <div className="relative">
//                         <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
//                         <input
//                            name="password"
//                            type="password"
//                            value={formData.password}
//                            onChange={handleChange}
//                            placeholder="Enter your password"
//                            className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/30 outline-none transition
//                     focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20
//                     ${errors.password ? "border-red-400/60" : "border-white/10"}`}
//                         />
//                      </div>
//                      {errors.password && (
//                         <p className="text-red-400 text-xs mt-1">
//                            {errors.password}
//                         </p>
//                      )}
//                   </div>

//                   {/* Button */}
//                   <button
//                      type="submit"
//                      disabled={loading}
//                      className="w-full relative overflow-hidden group py-3 rounded-xl font-medium text-white
//               bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500
//               transition disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                      <span className="relative z-10 flex items-center justify-center gap-2">
//                         {loading ? (
//                            <>
//                               <Loader2 className="w-5 h-5 animate-spin" />
//                               Signing in...
//                            </>
//                         ) : (
//                            "Sign In"
//                         )}
//                      </span>

//                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition" />
//                   </button>
//                </form>
//             </motion.div>
//          </div>
//       </div>
//    );
// }

// export default Login;

import { useState, lazy, Suspense, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { authAPI } from "../services/api";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import {
   FaFire,
   FaShieldAlt,
   FaBolt,
   FaEthereum,
   FaCheckCircle,
   FaCode,
   FaCubes,
} from "react-icons/fa";

// ─── Inline 3D Components (from Hero3D) ───────────────────────────────────────

function ParticleField() {
   const mesh = useRef();
   const count = 180;
   const positions = useMemo(() => {
      const arr = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
         arr[i * 3] = (Math.random() - 0.5) * 12;
         arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
         arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
      return arr;
   }, []);

   useFrame((state) => {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
   });

   return (
      <points ref={mesh}>
         <bufferGeometry>
            <bufferAttribute
               attach="attributes-position"
               args={[positions, 3]}
            />
         </bufferGeometry>
         <pointsMaterial
            size={0.04}
            color="#22d3ee"
            transparent
            opacity={0.6}
         />
      </points>
   );
}

function CoreShield() {
   const mesh = useRef();
   const ring1 = useRef();
   const ring2 = useRef();

   useFrame((state) => {
      const t = state.clock.elapsedTime;
      mesh.current.rotation.y = t * 0.4;
      mesh.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      ring1.current.rotation.z = t * 0.8;
      ring1.current.rotation.x = t * 0.3;
      ring2.current.rotation.z = -t * 0.6;
      ring2.current.rotation.y = t * 0.4;
   });

   return (
      <group>
         <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <Sphere ref={mesh} args={[1.1, 64, 64]} position={[0, 0, 0]}>
               <MeshDistortMaterial
                  color="#0e7490"
                  distort={0.35}
                  speed={2}
                  roughness={0.1}
                  metalness={0.9}
                  emissive="#06b6d4"
                  emissiveIntensity={0.3}
               />
            </Sphere>
         </Float>
         <Torus ref={ring1} args={[1.8, 0.03, 16, 100]} position={[0, 0, 0]}>
            <meshStandardMaterial
               color="#22d3ee"
               emissive="#22d3ee"
               emissiveIntensity={1}
               transparent
               opacity={0.8}
            />
         </Torus>
         <Torus
            ref={ring2}
            args={[2.3, 0.02, 16, 100]}
            position={[0, 0, 0]}
            rotation={[Math.PI / 3, 0, 0]}
         >
            <meshStandardMaterial
               color="#06b6d4"
               emissive="#06b6d4"
               emissiveIntensity={0.6}
               transparent
               opacity={0.5}
            />
         </Torus>
      </group>
   );
}

function Scene3D() {
   return (
      <>
         <ambientLight intensity={0.2} />
         <pointLight position={[5, 5, 5]} intensity={1.5} color="#22d3ee" />
         <pointLight position={[-5, -3, -5]} intensity={0.8} color="#0891b2" />
         <pointLight position={[0, 0, 4]} intensity={0.5} color="#ffffff" />
         <fog attach="fog" args={["#000000", 8, 20]} />
         <ParticleField />
         <CoreShield />
      </>
   );
}

// ─── Right Panel Floating Cards ────────────────────────────────────────────────

function RightPanel() {
   const stats = [
      { value: "8+", label: "Vulnerability Types" },
      { value: "<10s", label: "Audit Speed" },
      { value: "100%", label: "On-Chain Verified" },
   ];

   return (
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
         {/* Radial glow behind canvas */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.13),transparent_70%)]" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

         {/* 3D Canvas */}
         <div className="absolute inset-0">
            <Canvas
               camera={{ position: [0, 0, 6], fov: 50 }}
               gl={{ antialias: true, alpha: true }}
               dpr={[1, 2]}
            >
               <Scene3D />
            </Canvas>
         </div>

         {/* Floating card – top right: Live Audit */}
         <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-6 z-20 bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-4 py-3 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
         >
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
               <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
               Live Audit
            </div>
            <p className="text-white text-sm font-semibold">
               Reentrancy — Detected
            </p>
            <p className="text-red-400 text-xs mt-0.5">Critical Risk</p>
         </motion.div>

         {/* Floating card – bottom left: Tx Hash */}
         <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
               duration: 5,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1,
            }}
            className="absolute bottom-24 left-6 z-20 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
         >
            <p className="text-xs text-gray-400 mb-1">Tx Hash</p>
            <p className="text-cyan-400 text-xs font-mono">0x3f9a...d7b2</p>
            <p className="text-xs text-gray-500 mt-0.5">Stored on Sepolia ✓</p>
         </motion.div>

         {/* Floating card – bottom right: Credits */}
         <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
               duration: 3.5,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 0.5,
            }}
            className="absolute bottom-24 right-6 z-20 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
         >
            <p className="text-xs text-gray-400 mb-1">Credits Used</p>
            <div className="flex items-end gap-1">
               <span className="text-white font-bold text-lg">20</span>
               <span className="text-gray-500 text-xs mb-0.5">/ 100</span>
            </div>
            <div className="w-20 h-1 bg-white/10 rounded-full mt-1.5">
               <div className="h-full w-1/5 bg-cyan-400 rounded-full" />
            </div>
         </motion.div>

         {/* Stats strip at bottom */}
         <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-6 px-6">
            {stats.map(({ value, label }) => (
               <div key={label} className="flex flex-col items-center">
                  <span className="text-lg font-black text-white">{value}</span>
                  <span className="text-[10px] text-gray-500 text-center">
                     {label}
                  </span>
               </div>
            ))}
         </div>

         {/* Branding / headline overlay */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-8 left-6 z-20"
         >
            <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-1">
               AI-Powered Auditing
            </p>
            <h2 className="text-white text-2xl font-black leading-tight">
               Audit Smarter.
               <br />
               <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  Ship Safer.
               </span>
            </h2>
         </motion.div>

         {/* Trust badges bottom overlay */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute top-[calc(8rem+4px)] left-6 z-20 flex flex-col gap-1.5"
         >
            {["Gemini AI", "Ethereum Sepolia", "Solidity"].map((badge) => (
               <span
                  key={badge}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] text-gray-400"
               >
                  <FaCheckCircle className="text-cyan-500" size={8} />
                  {badge}
               </span>
            ))}
         </motion.div>
      </div>
   );
}

// ─── Main Login Component ──────────────────────────────────────────────────────

function Login() {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({ email: "", password: "" });
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
      <div className="min-h-screen bg-[#05060a] flex overflow-hidden">
         {/* ── LEFT: Login Form ── */}
         <div className="relative flex-1 flex items-center justify-center px-6 py-12 z-10 lg:max-w-[520px] xl:max-w-[560px]">
            {/* Background glows for left panel */}
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-[-10%] left-1/2 w-[400px] h-[400px] bg-cyan-500/15 blur-[120px] rounded-full -translate-x-1/2" />
               <div className="absolute bottom-[-10%] right-0 w-[300px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full" />
            </div>

            {/* Subtle grid texture */}
            <div
               className="absolute inset-0 opacity-[0.025] pointer-events-none"
               style={{
                  backgroundImage:
                     "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
               }}
            />

            <div className="w-full max-w-md relative z-10">
               {/* Logo */}
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center mb-8"
               >
                  <Link to="/" className="flex items-center gap-2 group">
                     <div className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl group-hover:scale-105 transition shadow-[0_0_20px_rgba(34,211,238,0.1)]">
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
                     Don't have an account?{" "}
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
                           transition disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]"
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

               {/* Footer note */}
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center text-xs text-gray-600 mt-6"
               >
                  Every audit cryptographically verified on{" "}
                  <span className="text-cyan-500/70">Ethereum Sepolia</span>
               </motion.p>
            </div>
         </div>

         {/* ── RIGHT: 3D Visualization Panel (desktop only) ── */}
         <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block flex-1 relative overflow-hidden border-l border-white/5"
         >
            {/* Edge gradient blending left panel into right */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#05060a] to-transparent pointer-events-none" />

            <RightPanel />
         </motion.div>

         {/* ── MOBILE: Right section stacked below (sm only) ── */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:hidden w-full h-72 relative border-t border-white/5"
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
         >
            {/* On mobile this panel lives below the form — we use a simpler static layout */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
            <Canvas
               camera={{ position: [0, 0, 6], fov: 50 }}
               gl={{ antialias: true, alpha: true }}
               dpr={[1, 1.5]}
            >
               <Scene3D />
            </Canvas>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="flex gap-6">
                  {[
                     { value: "8+", label: "Vuln Types" },
                     { value: "<10s", label: "Audit Speed" },
                     { value: "100%", label: "On-Chain" },
                  ].map(({ value, label }) => (
                     <div key={label} className="flex flex-col items-center">
                        <span className="text-lg font-black text-white">
                           {value}
                        </span>
                        <span className="text-[10px] text-gray-500">
                           {label}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </motion.div>
      </div>
   );
}

export default Login;
