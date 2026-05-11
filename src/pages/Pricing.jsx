import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
   FaCheckCircle,
   FaTimes,
   FaArrowRight,
   FaShieldAlt,
   FaBolt,
   FaRocket,
   FaBuilding,
   FaWallet,
   FaEthereum,
   FaFileAlt,
   FaInfinity,
   FaHeadset,
   FaCode,
   FaStar,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
   }),
};

function Section({ children, className = "" }) {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-80px" });
   return (
      <section ref={ref} className={className}>
         <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
            {children}
         </motion.div>
      </section>
   );
}

function GlowBadge({ children }) {
   return (
      <motion.div
         variants={fadeUp}
         className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-5"
      >
         {children}
      </motion.div>
   );
}

// ─── Pricing Plans ────────────────────────────────────────────────────────────
const plans = [
   {
      id: "starter",
      icon: FaWallet,
      name: "Starter",
      tagline: "Try AuditAI for free",
      price: { monthly: 0, annual: 0 },
      credits: "100",
      audits: "5 audits",
      color: "from-white/5 to-white/[0.02]",
      border: "border-white/10",
      cta: "Get Started Free",
      ctaStyle:
         "bg-white/10 hover:bg-white/15 text-white border border-white/15",
      highlight: false,
      features: [
         { text: "100 free credits", included: true },
         { text: "5 complete audits", included: true },
         { text: "8+ vulnerability classes", included: true },
         { text: "On-chain tx hash (Sepolia)", included: true },
         { text: "PDF report download", included: true },
         { text: "Dashboard history", included: true },
         { text: "Priority processing", included: false },
         { text: "API access", included: false },
         { text: "Team collaboration", included: false },
         { text: "Dedicated support", included: false },
      ],
   },
   {
      id: "pro",
      icon: FaRocket,
      name: "Pro",
      tagline: "For active builders",
      price: { monthly: 29, annual: 23 },
      credits: "500",
      audits: "25 audits / mo",
      color: "from-cyan-500/15 to-blue-600/10",
      border: "border-cyan-500/30",
      cta: "Start Pro — Free Trial",
      ctaStyle:
         "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]",
      highlight: true,
      badge: "Most Popular",
      features: [
         { text: "500 credits / month", included: true },
         { text: "25 complete audits", included: true },
         { text: "8+ vulnerability classes", included: true },
         { text: "On-chain tx hash (Sepolia)", included: true },
         { text: "PDF report download", included: true },
         { text: "Dashboard history", included: true },
         { text: "Priority processing", included: true },
         { text: "API access", included: true },
         { text: "Team collaboration", included: false },
         { text: "Dedicated support", included: false },
      ],
   },
   {
      id: "enterprise",
      icon: FaBuilding,
      name: "Enterprise",
      tagline: "For protocols & firms",
      price: { monthly: 149, annual: 119 },
      credits: "Unlimited",
      audits: "Unlimited audits",
      color: "from-blue-600/15 to-violet-600/10",
      border: "border-blue-500/30",
      cta: "Contact Sales",
      ctaStyle:
         "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)]",
      highlight: false,
      features: [
         { text: "Unlimited credits", included: true },
         { text: "Unlimited audits", included: true },
         { text: "8+ vulnerability classes", included: true },
         { text: "On-chain tx hash (Sepolia)", included: true },
         { text: "PDF report download", included: true },
         { text: "Dashboard history", included: true },
         { text: "Priority processing", included: true },
         { text: "API access", included: true },
         { text: "Team collaboration", included: true },
         { text: "Dedicated support", included: true },
      ],
   },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function PricingHero() {
   return (
      <section className="relative pt-36 pb-16 px-6 overflow-hidden bg-black">
         <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />
            <div
               className="absolute inset-0 opacity-[0.03]"
               style={{
                  backgroundImage:
                     "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
               }}
            />
         </div>

         <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6"
            >
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
               Simple, Transparent Pricing
            </motion.div>

            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.1 }}
               className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
               Pay for What You{" "}
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Actually Use
               </span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.25 }}
               className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
            >
               Start free with 100 credits. Upgrade when you need more. No
               contracts, no surprises — just security credits that match your
               audit volume.
            </motion.p>
         </div>
      </section>
   );
}

// ─── Plans Grid ───────────────────────────────────────────────────────────────
function PricingPlans() {
   const [annual, setAnnual] = useState(false);

   return (
      <Section className="py-16 px-6 relative">
         <div className="max-w-6xl mx-auto">
            {/* Toggle */}
            <motion.div variants={fadeUp} className="flex justify-center mb-14">
               <div className="flex items-center gap-4 p-1.5 rounded-2xl bg-white/5 border border-white/10">
                  <button
                     onClick={() => setAnnual(false)}
                     className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                        !annual
                           ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                           : "text-gray-400 hover:text-white"
                     }`}
                  >
                     Monthly
                  </button>
                  <button
                     onClick={() => setAnnual(true)}
                     className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                        annual
                           ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                           : "text-gray-400 hover:text-white"
                     }`}
                  >
                     Annual
                     <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 font-bold">
                        Save 20%
                     </span>
                  </button>
               </div>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6 items-start">
               {plans.map(
                  (
                     {
                        id,
                        icon: Icon,
                        name,
                        tagline,
                        price,
                        credits,
                        audits,
                        color,
                        border,
                        cta,
                        ctaStyle,
                        highlight,
                        badge,
                        features,
                     },
                     i,
                  ) => (
                     <motion.div
                        key={id}
                        variants={fadeUp}
                        custom={i * 0.2}
                        whileHover={{ y: highlight ? -6 : -3 }}
                        className={`relative rounded-3xl bg-gradient-to-br ${color} border ${border} p-7 transition-all duration-300
                        ${highlight ? "shadow-[0_0_60px_rgba(6,182,212,0.15)] md:-mt-4 md:mb-4" : "shadow-[0_4px_30px_rgba(0,0,0,0.3)]"}`}
                     >
                        {/* Popular badge */}
                        {badge && (
                           <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-black text-[11px] font-black uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center gap-1.5">
                              <FaStar size={9} /> {badge}
                           </div>
                        )}

                        {/* Plan header */}
                        <div className="flex items-start gap-3 mb-5">
                           <div
                              className={`p-2.5 rounded-xl bg-white/5 border ${border}`}
                           >
                              <Icon className="text-cyan-400" size={18} />
                           </div>
                           <div>
                              <h3 className="text-white font-black text-lg leading-tight">
                                 {name}
                              </h3>
                              <p className="text-gray-500 text-xs">{tagline}</p>
                           </div>
                        </div>

                        {/* Price */}
                        <div className="mb-2">
                           {price.monthly === 0 ? (
                              <div className="flex items-end gap-1">
                                 <span className="text-5xl font-black text-white">
                                    Free
                                 </span>
                              </div>
                           ) : (
                              <div className="flex items-end gap-1">
                                 <span className="text-5xl font-black text-white">
                                    ${annual ? price.annual : price.monthly}
                                 </span>
                                 <span className="text-gray-500 text-sm mb-2">
                                    / mo
                                 </span>
                              </div>
                           )}
                           {annual && price.monthly > 0 && (
                              <p className="text-emerald-400 text-xs font-semibold">
                                 Billed annually — saves $
                                 {(price.monthly - price.annual) * 12}/yr
                              </p>
                           )}
                        </div>

                        {/* Credits pill */}
                        <div className="flex items-center gap-2 mb-6 py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/10">
                           <FaWallet className="text-cyan-400" size={12} />
                           <span className="text-white text-sm font-bold">
                              {credits} credits
                           </span>
                           <span className="text-gray-500 text-xs">·</span>
                           <span className="text-gray-400 text-xs">
                              {audits}
                           </span>
                        </div>

                        {/* CTA */}
                        <Link
                           to={id === "enterprise" ? "/contact" : "/signup"}
                           className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 mb-7 ${ctaStyle}`}
                        >
                           {cta}
                        </Link>

                        {/* Features */}
                        <ul className="space-y-2.5 border-t border-white/5 pt-5">
                           {features.map(({ text, included }) => (
                              <li
                                 key={text}
                                 className="flex items-center gap-2.5"
                              >
                                 {included ? (
                                    <FaCheckCircle
                                       className="text-cyan-500 shrink-0"
                                       size={11}
                                    />
                                 ) : (
                                    <FaTimes
                                       className="text-gray-700 shrink-0"
                                       size={11}
                                    />
                                 )}
                                 <span
                                    className={`text-xs ${included ? "text-gray-300" : "text-gray-700"}`}
                                 >
                                    {text}
                                 </span>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  ),
               )}
            </div>

            {/* Fine print */}
            <motion.p
               variants={fadeUp}
               custom={3}
               className="text-center text-gray-700 text-xs mt-8"
            >
               All plans include basic Sepolia on-chain verification. Prices in
               USD. Cancel anytime.
            </motion.p>
         </div>
      </Section>
   );
}

// ─── Credit Calculator ────────────────────────────────────────────────────────
function CreditCalculator() {
   return (
      <Section className="py-24 px-6 bg-black relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_60%)]" />
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
               <GlowBadge>
                  <FaWallet /> Credit System
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  How Credits Work
               </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
               {[
                  {
                     icon: FaBolt,
                     title: "20 Credits",
                     subtitle: "per audit",
                     desc: "Each full contract scan — including AI analysis, vulnerability report, and on-chain tx — costs exactly 20 credits.",
                     color: "text-cyan-400",
                     bg: "bg-cyan-500/10",
                     border: "border-cyan-500/20",
                  },
                  {
                     icon: FaEthereum,
                     title: "1 Credit",
                     subtitle: "= 1 unit of AI compute",
                     desc: "Credits are consumed only when an audit completes successfully. Failed uploads or invalid files don't cost anything.",
                     color: "text-blue-400",
                     bg: "bg-blue-500/10",
                     border: "border-blue-500/20",
                  },
                  {
                     icon: FaInfinity,
                     title: "Never Expire",
                     subtitle: "on paid plans",
                     desc: "Unused credits roll over month-to-month on Pro and Enterprise. Starter credits are one-time and don't expire.",
                     color: "text-violet-400",
                     bg: "bg-violet-500/10",
                     border: "border-violet-500/20",
                  },
               ].map(
                  ({
                     icon: Icon,
                     title,
                     subtitle,
                     desc,
                     color,
                     bg,
                     border,
                  }) => (
                     <motion.div
                        key={title}
                        variants={fadeUp}
                        className={`p-6 rounded-2xl ${bg} border ${border} text-center`}
                     >
                        <div
                           className={`inline-flex p-3 rounded-xl ${bg} border ${border} mb-4`}
                        >
                           <Icon className={`${color} text-2xl`} />
                        </div>
                        <h4 className="text-white font-black text-xl">
                           {title}
                        </h4>
                        <p className="text-gray-500 text-xs mb-3">{subtitle}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                           {desc}
                        </p>
                     </motion.div>
                  ),
               )}
            </div>
         </div>
      </Section>
   );
}

// ─── Feature Comparison Table ─────────────────────────────────────────────────
const comparisonRows = [
   {
      feature: "Credits included",
      starter: "100",
      pro: "500 / mo",
      enterprise: "Unlimited",
   },
   { feature: "Audits", starter: "5", pro: "25 / mo", enterprise: "Unlimited" },
   {
      feature: "Vulnerability classes",
      starter: "8+",
      pro: "8+",
      enterprise: "8+ (custom)",
   },
   {
      feature: "On-chain verification",
      starter: "✓ Sepolia",
      pro: "✓ Sepolia",
      enterprise: "✓ Mainnet ready",
   },
   {
      feature: "Report format",
      starter: "PDF",
      pro: "PDF + JSON",
      enterprise: "PDF + JSON + API",
   },
   {
      feature: "Processing speed",
      starter: "Standard",
      pro: "Priority",
      enterprise: "Dedicated queue",
   },
   {
      feature: "API access",
      starter: "—",
      pro: "✓",
      enterprise: "✓ Rate unlimited",
   },
   { feature: "Team seats", starter: "1", pro: "3", enterprise: "Unlimited" },
   {
      feature: "Support",
      starter: "Community",
      pro: "Email",
      enterprise: "Dedicated CSM",
   },
   {
      feature: "SLA guarantee",
      starter: "—",
      pro: "—",
      enterprise: "99.9% uptime",
   },
];

function ComparisonTable() {
   return (
      <Section className="py-24 px-6 relative">
         <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
               <GlowBadge>
                  <MdSecurity /> Compare Plans
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Side-by-Side Comparison
               </motion.h2>
            </div>

            <motion.div
               variants={fadeUp}
               custom={1}
               className="rounded-2xl border border-white/10 overflow-hidden"
            >
               {/* Header */}
               <div className="grid grid-cols-4 bg-white/[0.04] border-b border-white/10">
                  <div className="px-5 py-4 text-gray-500 text-xs font-semibold uppercase tracking-wide">
                     Feature
                  </div>
                  {["Starter", "Pro", "Enterprise"].map((plan) => (
                     <div
                        key={plan}
                        className={`px-5 py-4 text-center text-sm font-black ${plan === "Pro" ? "text-cyan-400" : "text-white"}`}
                     >
                        {plan}
                        {plan === "Pro" && (
                           <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400">
                              Popular
                           </span>
                        )}
                     </div>
                  ))}
               </div>

               {comparisonRows.map(
                  ({ feature, starter, pro, enterprise }, i) => (
                     <div
                        key={feature}
                        className={`grid grid-cols-4 border-b border-white/[0.05] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}
                     >
                        <div className="px-5 py-3.5 text-gray-400 text-xs font-medium">
                           {feature}
                        </div>
                        {[starter, pro, enterprise].map((val, j) => (
                           <div
                              key={j}
                              className={`px-5 py-3.5 text-center text-xs font-semibold ${
                                 j === 1 ? "text-cyan-300" : "text-gray-400"
                              }`}
                           >
                              {val === "—" ? (
                                 <span className="text-gray-700">—</span>
                              ) : (
                                 val
                              )}
                           </div>
                        ))}
                     </div>
                  ),
               )}
            </motion.div>
         </div>
      </Section>
   );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
   {
      q: "What happens when I run out of credits?",
      a: "Your dashboard will show a low-credits warning. You won't be able to start new audits until you upgrade your plan or top up. Existing reports and on-chain records remain accessible forever.",
   },
   {
      q: "Are the audits stored permanently on-chain?",
      a: "Yes. Every audit generates a Keccak-256 hash stored on Ethereum Sepolia. The hash is immutable and verifiable on Etherscan — your proof of audit never disappears.",
   },
   {
      q: "Can I use AuditAI for mainnet contracts?",
      a: "Absolutely. AuditAI audits Solidity source code regardless of which network you plan to deploy on. The blockchain verification is on Sepolia (testnet), but your contract audit covers all deployment targets.",
   },
   {
      q: "Is AuditAI a replacement for a professional audit firm?",
      a: "AuditAI significantly reduces risk and catches the most common critical vulnerabilities. For high-value protocols (>$1M TVL), we recommend using AuditAI as a first-pass filter and complement with a manual audit.",
   },
   {
      q: "Can I cancel my plan anytime?",
      a: "Yes — no lock-ins. Cancel from your dashboard settings. Your plan stays active until the end of the billing period. Unused credits on paid plans roll over if you stay subscribed.",
   },
   {
      q: "Do you offer custom plans for audit firms?",
      a: "Yes. Enterprise customers can request custom credit volumes, white-label report branding, API rate limit increases, and dedicated support. Contact our sales team for a custom quote.",
   },
];

function FAQ() {
   const [open, setOpen] = useState(null);

   return (
      <Section className="py-24 px-6 bg-black relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.04),transparent_60%)]" />
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
               <GlowBadge>
                  <FaCode /> FAQ
               </GlowBadge>
               <motion.h2
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-black text-white mb-4"
               >
                  Common Questions
               </motion.h2>
            </div>

            <div className="space-y-3">
               {faqs.map(({ q, a }, i) => (
                  <motion.div key={q} variants={fadeUp} custom={i * 0.1}>
                     <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full text-left p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/20 transition-all duration-200 group"
                     >
                        <div className="flex items-center justify-between gap-4">
                           <span className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors">
                              {q}
                           </span>
                           <span
                              className={`text-gray-500 text-lg transition-transform duration-200 shrink-0 ${open === i ? "rotate-45 text-cyan-400" : ""}`}
                           >
                              +
                           </span>
                        </div>
                        {open === i && (
                           <motion.p
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25 }}
                              className="text-gray-400 text-sm leading-relaxed mt-3 border-t border-white/5 pt-3"
                           >
                              {a}
                           </motion.p>
                        )}
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>
   );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function PricingCTA() {
   return (
      <Section className="py-28 px-6">
         <div className="max-w-4xl mx-auto">
            <motion.div
               variants={fadeUp}
               className="relative rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-500/[0.05] p-14 text-center"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 blur-3xl" />

               <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
               >
                  Start Securing Contracts.
                  <br />
                  <span className="text-cyan-400">Free, Right Now.</span>
               </motion.h2>
               <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="text-gray-500 text-lg mb-10 max-w-lg mx-auto"
               >
                  100 free credits. No card. No waiting. On-chain proof on every
                  audit.
               </motion.p>
               <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
               >
                  <Link
                     to="/signup"
                     className="group px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] hover:bg-cyan-400 transition-all duration-300"
                  >
                     Get 100 Free Credits
                     <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                     to="/features"
                     className="px-8 py-4 border border-white/15 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium flex items-center justify-center"
                  >
                     Explore Features
                  </Link>
               </motion.div>
            </motion.div>
         </div>
      </Section>
   );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Pricing() {
   return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
         <Navbar />
         <PricingHero />
         <PricingPlans />
         <CreditCalculator />
         <ComparisonTable />
         <FAQ />
         <PricingCTA />
         <Footer />
      </div>
   );
}
