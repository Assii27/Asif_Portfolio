import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  ArrowRight,
  Github,
  Linkedin,
  Download,
  CheckCircle2,
  Layers,
  Zap,
  FileText,
  Code2,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Activity,
  Trophy,
  Users,
  Briefcase,
  Sun,
  Moon,
  Terminal,
  Globe,
  Building2,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TransactionFlow = ({ isDark }: { isDark: boolean }) => {
  const [activeTab, setActiveTab] = useState<'on-us' | 'off-us'>('on-us');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isReturning, setIsReturning] = useState(false);

  const onUsNodes = [
    { id: 'user', label: 'User', icon: Users, sub: 'Initiator' },
    { id: 'atm', label: 'ATM/POS', icon: CreditCard, sub: 'Terminal' },
    { id: 'switch', label: 'Payment Switch', icon: Server, sub: 'Hub' },
    { id: 'core', label: 'Core Banking', icon: Building2, sub: 'Issuer' },
    { id: 'success', label: 'Success', icon: CheckCircle2, sub: 'Approved' }
  ];

  const offUsNodes = [
    { id: 'user', label: 'User', icon: Users, sub: 'Initiator' },
    { id: 'atm', label: 'ATM/POS', icon: CreditCard, sub: 'Terminal' },
    { id: 'switch', label: 'Payment Switch', icon: Server, sub: 'Hub' },
    { id: 'network', label: 'Card Network', icon: Globe, sub: 'Visa/RuPay' },
    { id: 'other', label: 'Other Bank', icon: Building2, sub: 'Acquirer' },
    { id: 'response', label: 'Response', icon: CheckCircle2, sub: 'Settled' }
  ];

  const nodes = activeTab === 'on-us' ? onUsNodes : offUsNodes;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (!isReturning) {
          if (prev === nodes.length - 1) {
            setIsReturning(true);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 0) {
            setIsReturning(false);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [nodes.length, isReturning]);

  return (
    <section className={`w-full py-24 ${isDark ? 'bg-slate-950' : 'bg-white'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">System Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Transaction Lifecycle</h2>
            <div className="flex items-center gap-4">
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>End-to-end payment processing visualization.</p>
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${activeTab === 'on-us' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                {activeTab === 'on-us' ? 'Fast Processing' : 'Network Dependent'}
              </span>
            </div>
          </div>
          
          <div className={`flex p-1.5 rounded-2xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'} border shadow-inner`}>
            <button 
              onClick={() => { setActiveTab('on-us'); setActiveIndex(0); setIsReturning(false); }}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'on-us' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:text-slate-900'}`}
            >
              On-Us Flow
            </button>
            <button 
              onClick={() => { setActiveTab('off-us'); setActiveIndex(0); setIsReturning(false); }}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'off-us' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Off-Us Flow
            </button>
          </div>
        </div>

        <div className="relative w-full">
          {/* Horizontal Scroll Container */}
          <div className="w-full overflow-x-auto pb-12 no-scrollbar">
            <div className="min-w-[1000px] relative px-10 py-20">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 px-20">
                <div className={`w-full h-full ${isDark ? 'bg-slate-900' : 'bg-slate-100'} rounded-full relative overflow-hidden`}>
                  {/* Moving Gradient Path */}
                  <motion.div 
                    className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    animate={{ 
                      left: isReturning ? ["100%", "-20%"] : ["-20%", "100%"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-between relative z-10"
                >
                  {nodes.map((node, i) => (
                    <div key={node.id} className="flex flex-col items-center">
                      <motion.div 
                        animate={{ 
                          scale: activeIndex === i ? 1.15 : 1,
                          boxShadow: activeIndex === i ? (isDark ? '0 0 40px rgba(37,99,235,0.3)' : '0 20px 40px rgba(37,99,235,0.15)') : 'none'
                        }}
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] flex items-center justify-center transition-all duration-500 relative border-2 ${
                          activeIndex === i 
                            ? 'bg-blue-600 border-blue-400 text-white' 
                            : (isDark ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800 text-slate-400' : 'bg-white/80 backdrop-blur-xl border-slate-100 text-slate-400 shadow-sm')
                        }`}
                      >
                        <node.icon size={activeIndex === i ? 48 : 40} />
                        
                        {/* Active Pulse Rings */}
                        {activeIndex === i && (
                          <>
                            <motion.div 
                              className="absolute inset-0 bg-blue-500 rounded-[2.5rem] -z-10"
                              animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div 
                              className="absolute inset-0 bg-blue-500 rounded-[2.5rem] -z-10"
                              animate={{ scale: [1, 1.8], opacity: [0.1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            />
                          </>
                        )}

                        {/* Step Number */}
                        <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${activeIndex === i ? 'bg-white text-blue-600' : (isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-400')}`}>
                          {i + 1}
                        </div>
                      </motion.div>

                      <div className="mt-8 text-center">
                        <h4 className={`font-black text-sm uppercase tracking-tighter mb-1 transition-colors ${activeIndex === i ? 'text-blue-600' : (isDark ? 'text-slate-300' : 'text-slate-900')}`}>
                          {node.label}
                        </h4>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                          {node.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className={`px-4 py-2 rounded-full ${isDark ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-400'} text-[10px] font-black uppercase tracking-widest flex items-center gap-2`}>
              <ArrowRight size={12} className="animate-bounce-x" /> Scroll to view flow
            </div>
          </div>
        </div>

        {/* Technical Detail Card */}
        <div className={`mt-20 p-10 rounded-[3rem] ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'} border backdrop-blur-xl relative overflow-hidden group`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-600/10 transition-all duration-700" />
          
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center relative z-10">
            <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/20">
              {isReturning ? <ArrowRight className="rotate-180" size={32} /> : <Zap size={32} />}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h3 className="text-2xl font-black tracking-tight">
                  {activeTab === 'on-us' ? 'Internal Bank Processing' : 'Inter-Bank Network Routing'}
                </h3>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isReturning ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'}`}>
                  {isReturning ? 'Response Phase' : 'Request Phase'}
                </span>
              </div>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed max-w-4xl`}>
                {activeTab === 'on-us' 
                  ? 'On-Us transactions are processed entirely within the same bank infrastructure. The request travels to the core banking system and returns with an authorization response in milliseconds, ensuring maximum speed and reliability.' 
                  : 'Off-Us transactions involve external networks like Visa or RuPay. The request is securely routed through the network to the acquirer bank, which then sends back a secure authorization response through the same encrypted channel.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TypewriterRoles = () => {
  const roles = ["Payment Systems", "CMS Architecture", "Banking APIs", "Microservices"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === roles[index].length ? 1000 : 150, parseInt((Math.random() * 100).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-blue-600 inline-block min-w-[200px]">
      {`${roles[index].substring(0, subIndex)}`}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const TypewriterCode = () => {
  const codeLines = [
    { text: "@Service", color: "text-blue-600" },
    { text: "public class PaymentSwitch {", color: "text-purple-600" },
    { text: "  @Autowired", color: "text-blue-600" },
    { text: "  private KafkaTemplate kafka;", color: "text-purple-600" },
    { text: "", color: "" },
    { text: "  public void process(Transaction tx) {", color: "text-purple-600" },
    { text: "    log.info(\"Processing: \" + tx.id());", color: "text-green-600" },
    { text: "    kafka.send(\"tx-topic\", tx);", color: "text-green-600" },
    { text: "  }", color: "text-purple-600" },
    { text: "}", color: "text-purple-600" }
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine].text;
      if (currentChar < line.length) {
        const timeout = setTimeout(() => {
          setCurrentChar(prev => prev + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => [...prev, line]);
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      // Reset after a delay to loop
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <code className="text-sm font-mono block leading-relaxed min-h-[240px]">
      {displayedLines.map((line, i) => (
        <div key={i} className={codeLines[i].color}>
          {line || "\u00A0"}
        </div>
      ))}
      {currentLine < codeLines.length && (
        <div className={codeLines[currentLine].color}>
          {codeLines[currentLine].text.substring(0, currentChar)}
          <span className="inline-block w-2 h-4 bg-blue-600 animate-pulse ml-0.5" />
        </div>
      )}
    </code>
  );
};

const Marquee = ({ items }: { items: { name: string; logo: string }[] }) => {
  return (
    <div className="relative flex overflow-x-hidden bg-white py-6 border-b border-slate-100">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.concat(items).map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center p-1.5 border border-slate-100">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center h-full">
        {items.concat(items).map((item, i) => (
          <div key={i} className="flex items-center gap-2 mx-8">
            <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center p-1.5 border border-slate-100">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const techLogos = [
  { name: "Java", logo: "https://cdn.simpleicons.org/java/007396", category: "Backend" },
  { name: "Spring Boot", logo: "https://cdn.simpleicons.org/springboot/6DB33F", category: "Backend" },
  { name: "Hibernate", logo: "https://cdn.simpleicons.org/hibernate/59666C", category: "Backend" },
  { name: "Kafka", logo: "https://cdn.simpleicons.org/apachekafka/231F20", category: "Messaging" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1", category: "Database" },
  { name: "Microservices", logo: "https://cdn.simpleicons.org/microservices/000000", category: "Architecture" },
  { name: "REST API", logo: "https://cdn.simpleicons.org/insomnia/4000BF", category: "Architecture" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", category: "Tools" },
  { name: "IntelliJ", logo: "https://cdn.simpleicons.org/intellijidea/000000", category: "Tools" },
  { name: "Jira", logo: "https://cdn.simpleicons.org/jira/0052CC", category: "Tools" }
];

const stats = [
  { label: "Years Experience", value: "4+", icon: Briefcase },
  { label: "Transactions/Day", value: "1M+", icon: Activity },
  { label: "System Uptime", value: "99.9%", icon: ShieldCheck },
  { label: "APIs Delivered", value: "50+", icon: Cpu }
];

const experiences = [
  {
    role: "Software Developer-Java",
    company: "Euronet Services Pvt Ltd, Pune",
    period: "March 2024 — Nov 2025",
    domain: "Payments & Switching",
    bullets: [
      "Developed and enhanced Java-based backend modules for <span class='text-blue-600 font-bold'>Switch System (REN Product)</span> in the Payment Domain.",
      "Worked on <span class='text-blue-600 font-bold'>Card Management System (CMS)</span> modules including card issuance, transaction processing, and statement report generation.",
      "Involved in payment processing flows ensuring smooth <span class='text-blue-600 font-bold'>real-time transaction operations</span>.",
      "Performed data transformation using <span class='text-blue-600 font-bold'>XML/XSL/JSON</span> and handled data mapping for fintech and banking formats.",
      "Participated in debugging, <span class='text-blue-600 font-bold'>RCA (Root Cause Analysis)</span>, defect fixing and issue resolution in UAT and Production environments.",
      "Worked on issuer transactions authorization routing and end-of-day settlement.",
      "Prepared <span class='text-blue-600 font-bold'>Low-Level Design (LLD)</span> with class diagrams and contributed to technical documentation."
    ]
  },
  {
    role: "Software Developer",
    company: "ZS Associates",
    period: "Aug 2021 — Jan 2024",
    domain: "Banking Domain",
    bullets: [
      "Developed and maintained Java-based backend modules for <span class='text-blue-600 font-bold'>Banking Admin Application</span> used by banks to manage and update customer information.",
      "Built customer and corporate registration modules and supported complete <span class='text-blue-600 font-bold'>registration workflows</span>.",
      "Designed and developed menu/submenu management features for service configuration and dynamic UI control.",
      "Implemented <span class='text-blue-600 font-bold'>secure transaction logging</span> to record and monitor all banking activities.",
      "Designed and implemented business logic using Java, <span class='text-blue-600 font-bold'>Spring Boot, Hibernate and OOP principles</span> to ensure system reliability and scalability.",
      "Managed <span class='text-blue-600 font-bold'>MySQL database</span> operations including query optimization, stored procedures and data handling.",
      "Debugged, analysed defects and performed <span class='text-blue-600 font-bold'>RCA</span> to improve system performance and stability."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Shivaji University, Kolhapur",
    score: "68% (First Class with Distinction)",
    period: "Graduated"
  }
];

const technicalSkills = [
  { category: "Programming Languages", skills: ["Java (8+)"] },
  { category: "Frameworks & Architecture", skills: ["Spring Boot", "Hibernate / JPA", "Microservices Architecture"] },
  { category: "Messaging & Streaming", skills: ["Apache Kafka"] },
  { category: "Web Technologies", skills: ["RESTful API Development & Integration"] },
  { category: "Database", skills: ["MySQL"] },
  { category: "Data Formats & Processing", skills: ["JSON", "XML"] },
  { category: "Development & Collaboration Tools", skills: ["IntelliJ IDEA", "Spring Tool Suite (STS)", "Git", "GitHub", "Git Bash", "SourceTree", "Jira"] }
];

const projects = [
  {
    title: "Payment Switch System",
    client: "Euronet",
    description: "Built robust backend modules for transaction processing, integrating CMS and complex settlement systems for real-time financial operations.",
    metrics: ["10K+ Transactions/Day", "30% Latency Reduction", "99.9% Success Rate"],
    tags: ["Java", "Spring Boot", "Kafka", "Payments"]
  },
  {
    title: "Banking Admin Application",
    client: "ZS Associates",
    description: "Developed comprehensive registration modules and secure logging features for a banking administration platform, focusing on data integrity and security.",
    metrics: ["40% Faster Onboarding", "Secure Audit Logs", "Role-based Access"],
    tags: ["Java", "Hibernate", "MySQL", "Banking"]
  }
];

const achievements = [
  { text: "Reduced downtime by 25% via proactive monitoring and performance optimization.", icon: Zap, value: "25%" },
  { text: "Improved API response time by 40% through query optimization and caching.", icon: Activity, value: "40%" },
  { text: "Successfully delivered 5+ major feature releases in high-pressure financial environments.", icon: Trophy, value: "5+" }
];

const ResumeSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section id="resume" className={`py-32 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Resume</h2>
          <p className="text-4xl font-black tracking-tight mb-8">Professional Summary</p>
          <a 
            href="https://raw.githubusercontent.com/Assii27/Asif_Portfolio/main/Files/Asif_Maner_Java_Dev-4Y.pdf" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            <Download size={20} /> Download PDF Version
          </a>
        </div>

        <div className={`p-12 md:p-20 rounded-[3rem] border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'} shadow-2xl relative overflow-hidden`}>
          {/* Header */}
          <div className="border-b border-slate-800/10 pb-12 mb-12">
            <h3 className="text-5xl font-black mb-4">Asif Maner</h3>
            <p className="text-xl text-blue-600 font-bold mb-6">Java Developer</p>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><Mail size={16} /> asifmaner9902@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={16} /> +91 7972828315</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> Pune, India</span>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-16">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Profile</h4>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Java Developer with over 4 years of experience in designing, developing, and maintaining scalable backend applications in the Payments and Switching domain. Possess strong hands-on expertise in Card Management Systems (CMS), transaction processing, card issuance, and secure financial data handling.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Technical Skills</h4>
            <div className="grid md:grid-cols-2 gap-10">
              {technicalSkills.map((group, i) => (
                <div key={i}>
                  <h5 className="font-black text-sm uppercase tracking-tighter mb-4 text-blue-600">{group.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className={`px-3 py-1 rounded-lg text-xs font-bold ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-600'} border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-10">Professional Experience</h4>
            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-blue-600/20">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-600" />
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h5 className="text-2xl font-black">{exp.role}</h5>
                      <p className="text-blue-600 font-bold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-slate-800 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'} flex gap-3`}>
                        <span className="text-blue-600 font-black">•</span>
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Education</h4>
            {education.map((edu, i) => (
              <div key={i} className={`p-8 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                <h5 className="text-xl font-black mb-1">{edu.degree}</h5>
                <p className="text-blue-600 font-bold mb-2">{edu.institution}</p>
                <div className="flex justify-between text-sm font-medium text-slate-500">
                  <span>{edu.score}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-[#0F172A]'} font-sans selection:bg-blue-600 selection:text-white`}>
      {/* Modern Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-100') : 'bg-transparent border-transparent'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <span className="text-base font-black">AM</span>
            </div>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>ASIF MANER</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#about" className={`${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>About</a>
            <a href="#projects" className={`${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>Projects</a>
            <a href="#experience" className={`${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>Experience</a>
            <a href="#resume" className={`${isDark ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'} transition-colors`}>Resume</a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full ${isDark ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'} hover:scale-110 transition-all`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all">Contact Me</a>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className={`relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'} border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'} text-xs font-bold uppercase tracking-wider mb-8`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Available for new opportunities
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                Building High-Performance <br />
                <TypewriterRoles />
              </h1>
              <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'} max-w-lg leading-relaxed mb-6`}>
                Handling Millions of Transactions Securely. Specialized in high-availability backend architectures.
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-10">
                4+ Years Experience | Spring Boot | Microservices | Kafka
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/asifmaner/" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'} border ${isDark ? 'border-slate-700' : 'border-slate-200'} rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2`}>
                  LinkedIn <Linkedin size={20} />
                </a>
                <a href="https://raw.githubusercontent.com/Assii27/Asif_Portfolio/main/Files/Asif_Maner_Java_Dev-4Y.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center gap-2">
                  <Download size={20} /> Download Resume
                </a>
                <div className="flex items-center gap-4 px-2">
                  <a href="https://github.com/Assii27" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative hidden lg:block"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl -rotate-6 blur-2xl" />
              <div className={`relative ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-8 rounded-3xl shadow-2xl border`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <TypewriterCode />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profile & Stats Section */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-6 rounded-3xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'} border shadow-sm hover:shadow-md transition-all`}
                  >
                    <stat.icon size={24} className="text-blue-600 mb-4" />
                    <div className="text-2xl font-black">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Profile</h2>
                <p className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">reliable</span> payment switches and core banking systems for high-volume transactions.
                </p>
                <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed`}>
                  With over 4 years of experience, I've mastered the art of building high-performance systems that drive modern banking. Specialized in Java, Spring Boot, and Microservices architecture with a focus on low-latency transaction processing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className={`p-8 rounded-[2rem] ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} border shadow-sm`}>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Core Expertise</h3>
                  <div className="space-y-4">
                    {["Payment Systems Expert", "Low Latency Systems", "High Availability APIs", "CMS Architecture"].map((item) => (
                      <div key={item} className="flex items-center gap-3 font-bold text-sm">
                        <CheckCircle2 size={18} className="text-blue-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`p-8 rounded-[2rem] ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} border shadow-sm`}>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Domain Focus</h3>
                  <div className="space-y-4">
                    {["Card Management (CMS)", "Transaction Switching", "Banking Workflows", "Settlement Systems"].map((item) => (
                      <div key={item} className="flex items-center gap-3 font-bold text-sm">
                        <Globe size={18} className="text-purple-600" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransactionFlow isDark={isDark} />

        {/* Tech Stack Section */}
        <section className={`py-32 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'} border-y ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Tech Stack</h2>
              <p className="text-4xl font-black tracking-tight">Modern tools for modern banking.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Backend", "Messaging", "Database", "Tools"].map((cat) => (
                <div key={cat} className={`p-8 rounded-[2.5rem] ${isDark ? 'bg-slate-950' : 'bg-white'} border ${isDark ? 'border-slate-800' : 'border-slate-100'} shadow-sm`}>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
                    {cat === "Backend" && <Server size={14} />}
                    {cat === "Messaging" && <Activity size={14} />}
                    {cat === "Database" && <Database size={14} />}
                    {cat === "Tools" && <Terminal size={14} />}
                    {cat}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {techLogos.filter(t => t.category === cat).map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center gap-3 group cursor-help"
                        title={`${tech.name} - ${cat} Specialist`}
                      >
                        <div className={`w-14 h-14 ${isDark ? 'bg-slate-900' : 'bg-slate-50'} rounded-2xl flex items-center justify-center p-3 border ${isDark ? 'border-slate-800' : 'border-slate-100'} group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all`}>
                          <img 
                            src={tech.logo} 
                            alt={tech.name} 
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Architecture Section (New) */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-6">Architecture</h2>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Designing for <br />High Availability.</h3>
                <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed mb-12`}>
                  I specialize in distributed systems that handle financial transactions with zero data loss and sub-second latency.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Microservices Flow", desc: "Decoupled services for auth, processing, and settlement." },
                    { title: "Event-Driven Design", desc: "Asynchronous processing using Kafka for high throughput." },
                    { title: "Secure Gateways", desc: "Robust API gateways with role-based access and encryption." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0">
                        <Code2 size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className={isDark ? 'text-slate-500' : 'text-slate-400'}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative p-12 rounded-[3rem] ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'} border`}>
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <div className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg">API Gateway</div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="rotate-90 text-slate-300" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className={`p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'} text-center text-xs font-bold`}>Auth Service</div>
                    <div className={`p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'} text-center text-xs font-bold shadow-xl shadow-blue-500/10`}>Payment Core</div>
                    <div className={`p-4 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'} text-center text-xs font-bold`}>CMS Module</div>
                  </div>
                  <div className="flex justify-center gap-20">
                    <ArrowRight className="rotate-90 text-slate-300" />
                    <ArrowRight className="rotate-90 text-slate-300" />
                    <ArrowRight className="rotate-90 text-slate-300" />
                  </div>
                  <div className="flex justify-center">
                    <div className="px-10 py-4 bg-slate-900 text-blue-400 rounded-xl font-mono text-sm border border-blue-900/50">Apache Kafka Cluster</div>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="rotate-90 text-slate-300" />
                  </div>
                  <div className="flex justify-center">
                    <div className={`px-6 py-3 ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'} text-xs font-bold`}>Database (MySQL/Hibernate)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-32 ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'} border-y ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Key Projects</h2>
                <p className="text-4xl font-black tracking-tight">Real-world impact, delivered.</p>
              </div>
              <a href="https://github.com/Assii27" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-blue-600 transition-colors">
                View All on GitHub <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} p-12 rounded-[3rem] border shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-600">
                      <Layers size={32} />
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className={`p-3 rounded-xl ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'} hover:bg-blue-600 hover:text-white transition-all`}><ExternalLink size={18} /></a>
                      <a href="https://github.com/Assii27" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'} hover:bg-slate-900 hover:text-white transition-all`}><Github size={18} /></a>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-2">{project.title}</h3>
                  <p className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-6">{project.client}</p>
                  <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'} leading-relaxed mb-10`}>
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className={`px-4 py-1.5 ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-50 text-slate-600'} text-[10px] font-black rounded-full border ${isDark ? 'border-slate-700' : 'border-slate-100'} uppercase tracking-widest`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-8 p-4 rounded-2xl bg-blue-600/5 border border-blue-600/10">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-600">
                      <Cpu size={20} />
                    </div>
                    <div className="text-xs font-bold">
                      <div className="text-slate-400 uppercase tracking-widest mb-1">Architecture</div>
                      <div>Microservices • Event-Driven</div>
                    </div>
                  </div>

                  <button className={`w-full py-4 ${isDark ? 'bg-slate-800' : 'bg-slate-900'} text-white rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2`}>
                    View Project Details <ArrowRight size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">Core Technologies & Skills</h2>
          </div>
          <div className={`rounded-3xl border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100'} overflow-hidden shadow-sm`}>
            <Marquee items={techLogos} />
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className={`${isDark ? 'bg-slate-950' : 'bg-slate-900'} text-white py-32`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Work History</h2>
              <p className="text-4xl font-black tracking-tight">Professional journey in fintech.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-slate-800 border border-slate-800 rounded-[3rem] overflow-hidden">
              {experiences.map((exp, index) => (
                <div key={index} className={`${isDark ? 'bg-slate-900' : 'bg-slate-900'} p-16 hover:bg-slate-800/50 transition-all group`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-blue-400 text-sm font-black tracking-[0.2em]">{exp.period}</div>
                    <div className="px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/30">{exp.domain}</div>
                  </div>
                  <h3 className="text-4xl font-black mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{exp.role}</h3>
                  <div className="text-slate-400 text-xl font-medium mb-10">{exp.company}</div>
                  <ul className="space-y-4 mb-12">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-400 text-base leading-relaxed flex gap-4">
                        <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-1" />
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-all">
                    Learn More <ChevronRight size={18} className="text-blue-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Achievements</h2>
            <p className="text-4xl font-black tracking-tight">Proven track record of excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex flex-col gap-8 p-10 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'} rounded-[3rem] border hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all group`}>
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-all">
                    <achievement.icon size={32} />
                  </div>
                  <div className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">{achievement.value}</div>
                </div>
                <p className={`text-xl font-bold leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ResumeSection isDark={isDark} />

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                  LET'S BUILD <br />THE FUTURE.
                </h2>
                <p className="text-blue-100 text-xl max-w-md mb-12 leading-relaxed">
                  Open to opportunities in Java Backend Development, Payment Systems, and Microservices Architecture.
                </p>
                <div className="space-y-6">
                  <a href="mailto:asifmaner9902@gmail.com" className="flex items-center gap-6 text-2xl lg:text-3xl font-black hover:text-blue-200 transition-colors group">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all"><Mail size={32} /></div>
                    asifmaner9902@gmail.com
                  </a>
                  <div className="flex items-center gap-6 text-2xl lg:text-3xl font-black group">
                    <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-all"><Phone size={32} /></div>
                    +91 7972828315
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start lg:items-end gap-12">
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/asifmaner/" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/10 rounded-3xl hover:bg-white/20 hover:-translate-y-2 transition-all shadow-xl">
                    <Linkedin size={32} />
                  </a>
                  <a href="https://github.com/Assii27" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/10 rounded-3xl hover:bg-white/20 hover:-translate-y-2 transition-all shadow-xl">
                    <Github size={32} />
                  </a>
                  <a href="https://raw.githubusercontent.com/Assii27/Asif_Portfolio/main/Files/Asif_Maner_Java_Dev-4Y.pdf" target="_blank" rel="noopener noreferrer" className="p-6 bg-white/10 rounded-3xl hover:bg-white/20 hover:-translate-y-2 transition-all shadow-xl">
                    <FileText size={32} />
                  </a>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center justify-end gap-3 text-lg font-black uppercase tracking-widest text-blue-200 mb-2">
                    <MapPin size={24} /> Pune, India
                  </div>
                  <div className="text-xs uppercase tracking-[0.5em] font-black opacity-50">
                    © 2026 ASIF MANER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`py-12 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'} text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]`}>
        Built with React, Tailwind & Motion • 2026
      </footer>
    </div>
  );
}
