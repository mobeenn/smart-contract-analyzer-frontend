import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
   FaShieldAlt,
   FaGithub,
   FaTwitter,
   FaLinkedin,
   FaDiscord,
} from "react-icons/fa";

const footerLinks = {
   Product: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Dashboard", to: "/dashboard" },
      { label: "API Docs", to: "/docs" },
   ],
   Company: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
   ],
   Legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Security", to: "/security" },
   ],
};

const socials = [
   { icon: FaGithub, href: "#", label: "GitHub" },
   { icon: FaTwitter, href: "#", label: "Twitter" },
   { icon: FaLinkedin, href: "#", label: "LinkedIn" },
   { icon: FaDiscord, href: "#", label: "Discord" },
];

export default function Footer() {
   return (
      <footer className="relative bg-black border-t border-white/6 overflow-hidden">
         {/* Subtle gradient */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 h-20 bg-cyan-500/5 blur-3xl" />

         <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
               {/* Brand */}
               <div className="col-span-2">
                  <Link to="/" className="flex items-center gap-3 mb-5 group">
                     <div className="p-2 bg-cyan-500 text-black rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                        <FaShieldAlt size={16} />
                     </div>
                     <span className="text-xl font-bold text-white">
                        Audit<span className="text-cyan-400">AI</span>
                     </span>
                  </Link>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                     AI-powered smart contract auditing with on-chain
                     verification. Protect your DeFi protocol before hackers
                     exploit it.
                  </p>
                  {/* Sepolia badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                     <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                     Live on Ethereum Sepolia
                  </div>
                  {/* Socials */}
                  <div className="flex gap-3 mt-5">
                     {socials.map(({ icon: Icon, href, label }) => (
                        <a
                           key={label}
                           href={href}
                           aria-label={label}
                           className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-200"
                        >
                           <Icon size={14} />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Links */}
               {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                     <h4 className="text-white text-sm font-semibold mb-4">
                        {category}
                     </h4>
                     <ul className="space-y-3">
                        {links.map(({ label, to }) => (
                           <li key={label}>
                              <Link
                                 to={to}
                                 className="text-gray-500 text-sm hover:text-gray-200 transition-colors"
                              >
                                 {label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-14 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
               <p className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} AuditAI. All rights reserved.
               </p>
               <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  All systems operational
               </div>
            </div>
         </div>
      </footer>
   );
}
