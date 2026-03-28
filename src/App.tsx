import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  ArrowRight,
  Github,
  Linkedin
} from 'lucide-react';
import { motion } from 'motion/react';

const techLogos = [
  { name: "Java", logo: "https://cdn.simpleicons.org/java/007396" },
  { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot/6DB33F" },
  { name: "Hibernate", logo: "https://cdn.simpleicons.org/hibernate/59666C" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Microservices", logo: "https://cdn.simpleicons.org/microservices/000000" },
  { name: "REST API", logo: "https://cdn.simpleicons.org/insomnia/4000BF" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "IntelliJ", logo: "https://cdn.simpleicons.org/intellijidea/000000" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC" }
];

const experiences = [
  {
    role: "Software Developer-Java",
    company: "Euronet Services Pvt Ltd",
    period: "2024 — 2025",
    domain: "Payments & Switching",
    description: "Developed backend modules for Switch System (REN Product). Focused on Card Management Systems (CMS), transaction processing, and real-time payment flows."
  },
  {
    role: "Java Developer",
    company: "SPCL Infotech",
    period: "2021 — 2024",
    domain: "Banking Domain",
    description: "Maintained Java-based backend for Banking Admin Applications. Built registration modules and implemented secure transaction logging using Spring Boot."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-blue-600 selection:text-white">
      {/* Modern Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <span className="text-sm font-black">AM</span>
            </div>
            ASIF MANER
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section (Recipe 11 inspired) */}
        <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                BUILDING <span className="text-blue-600">SCALABLE</span> BACKEND SYSTEMS.
              </h1>
              <p className="text-xl text-slate-500 max-w-lg leading-relaxed mb-10">
                Java Developer specializing in high-performance payment switching and banking architecture. 4+ years of engineering robust financial solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center gap-2">
                  Get in touch <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-4 px-6">
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                  <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
                </div>
              </div>
            </motion.div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent rounded-3xl -rotate-6" />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <code className="text-sm font-mono text-slate-600 block leading-relaxed">
                  <span className="text-blue-600">@Service</span><br />
                  <span className="text-purple-600">public class</span> PaymentSwitch {"{"}<br />
                  &nbsp;&nbsp;<span className="text-blue-600">@Autowired</span><br />
                  &nbsp;&nbsp;<span className="text-purple-600">private</span> KafkaTemplate kafka;<br /><br />
                  &nbsp;&nbsp;<span className="text-purple-600">public void</span> process(Transaction tx) {"{"}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;log.info(<span className="text-green-600">"Processing: "</span> + tx.id());<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;kafka.send(<span className="text-green-600">"tx-topic"</span>, tx);<br />
                  &nbsp;&nbsp;{"}"}<br />
                  {"}"}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Profile & Skills Section (The requested change) */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Profile</h2>
              <p className="text-3xl font-light leading-snug">
                I design and maintain <span className="font-bold">Java-based backend modules</span> for mission-critical financial systems.
              </p>
            </div>
            <div className="space-y-12">
              <p className="text-lg text-slate-500 leading-relaxed">
                With over 4 years of experience in the Payments and Switching domain, I've mastered the art of building scalable, secure, and high-availability applications. My expertise spans from Card Management Systems (CMS) to real-time transaction processing.
              </p>
              
              {/* Colorful Skill Logos Below Profile */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Technical Stack</h3>
                <div className="flex flex-wrap gap-6">
                  {techLogos.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center p-3 border border-slate-100 group-hover:border-blue-200 group-hover:bg-white transition-all shadow-sm group-hover:shadow-md">
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-16">Work History</h2>
            <div className="grid md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-900 p-12 hover:bg-slate-800/50 transition-all group">
                  <div className="text-blue-400 text-sm font-bold mb-4 tracking-widest">{exp.period}</div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <div className="text-slate-400 font-medium mb-6">{exp.company}</div>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {exp.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                    <ChevronRight size={16} className="text-blue-400" />
                    {exp.domain}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
                  READY TO<br />COLLABORATE?
                </h2>
                <p className="text-blue-100 text-xl max-w-md mb-12">
                  I'm currently looking for new challenges in Java Backend Development. Let's build something exceptional.
                </p>
                <div className="space-y-4">
                  <a href="mailto:asifmaner9902@gmail.com" className="flex items-center gap-4 text-2xl font-bold hover:text-blue-200 transition-colors">
                    <Mail size={32} /> asifmaner9902@gmail.com
                  </a>
                  <div className="flex items-center gap-4 text-2xl font-bold">
                    <Phone size={32} /> +91 7972828315
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-6">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-200">
                  <MapPin size={16} /> Pune, India
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-50">
                  © 2026 ASIF MANER
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs font-medium uppercase tracking-widest">
        Built with React, Tailwind & Motion
      </footer>
    </div>
  );
}
