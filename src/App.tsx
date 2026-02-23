import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  Bot, 
  Zap, 
  Database, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Award,
  Layers,
  Cpu,
  Workflow,
  Briefcase,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import ProjectModal from "./components/ProjectModal";

// --- Data ---

const SERVICES = [
  {
    title: "AI Automation",
    description: "End-to-end intelligent workflows using n8n, OpenAI, and Claude to reduce manual workload by 20+ hours weekly.",
    icon: <Bot className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    title: "CRM & Marketing",
    description: "Automated lead qualification, customer follow-ups, and data synchronization across GHL, HubSpot, and Klaviyo.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-orange-500"
  },
  {
    title: "Custom AI Agents",
    description: "Building intelligent chatbots and support agents that handle 500+ inquiries monthly with 85% resolution rate.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-emerald-500"
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Customer Support AI Chatbot",
    description: "Intelligent chatbot handling 800+ monthly inquiries with natural language understanding.",
    longDescription: "Developed a sophisticated AI chatbot for a high-volume client using n8n and OpenAI. The system features context-aware responses, seamless handoff to human agents when necessary, and deep integration with the client's existing knowledge base. It reduced support response times by 90%.",
    tags: ["n8n", "OpenAI", "Webhooks"],
    image: "https://picsum.photos/seed/chatbot/800/600"
  },
  {
    id: 2,
    title: "AI Video Clipping System",
    description: "Automated system converting long-form videos into optimized shorts for social media.",
    longDescription: "A complex automation pipeline that takes long-form video content, identifies viral-worthy segments using AI analysis, crops them for vertical formats, and automatically generates captions and metadata for YouTube Shorts and TikTok.",
    tags: ["AI", "Video API", "Automation"],
    image: "https://picsum.photos/seed/video/800/600"
  },
  {
    id: 3,
    title: "HR Job Evaluation System",
    description: "AI-powered workflow for automated resume screening and candidate evaluation.",
    longDescription: "Streamlined the hiring process for a growing tech company. The system automatically parses resumes, scores candidates based on job requirements using GPT-4, and schedules interviews for top-tier applicants, saving the HR team 18 hours per week.",
    tags: ["HR Tech", "GPT-4", "Airtable"],
    image: "https://picsum.photos/seed/hr/800/600"
  }
];

const BRANDS = [
  { name: "Thelix Holdings", logo: "https://picsum.photos/seed/thelix/100/40" },
  { name: "Personatify", logo: "https://picsum.photos/seed/personatify/100/40" },
  { name: "Naija Mart", logo: "https://picsum.photos/seed/naija/100/40" },
  { name: "Africum", logo: "https://picsum.photos/seed/africum/100/40" },
  { name: "WAmation", logo: "https://picsum.photos/seed/wa/100/40" }
];

// --- Components ---

const EXPERIENCE = [
  {
    role: "AI Automation Expert",
    company: "Thelix Holdings",
    location: "Texas, USA (Remote)",
    period: "July 2025 – Present",
    description: "Design and implement end-to-end AI automation workflows for sales, customer onboarding, and operational systems.",
    achievements: [
      "Reduced manual processing time by 20+ hours per week",
      "Automated 60+ repetitive business processes",
      "Built custom AI agents handling 500+ inquiries monthly with 85% resolution rate",
      "Decreased operational costs by 40% through self-hosted solutions"
    ]
  },
  {
    role: "AI Automation Expert (Contract)",
    company: "Personatify",
    location: "Thailand (Remote)",
    period: "March 2025 – September 2025",
    description: "Developed AI-powered chatbots and intelligent appointment scheduling systems.",
    achievements: [
      "Reduced no-shows by 35% through automated booking workflows",
      "Categorized 1,000+ emails weekly with 90% accuracy",
      "Lead response time improved from 4 hours to under 5 minutes",
      "Integrated WhatsApp Business API for seamless customer interactions"
    ]
  },
  {
    role: "Digital Marketing Expert",
    company: "Naija Essential Mart",
    location: "Nigeria (Remote)",
    period: "February 2024 – April 2025",
    description: "Developed and automated marketing workflows to streamline campaign execution.",
    achievements: [
      "Increased conversion rates by 28% through behavior-based triggers",
      "Processed and personalized 10,000+ monthly communications",
      "Improved ROI by 35% through A/B testing automation"
    ]
  }
];

const SKILLS = [
  {
    category: "Automation & Integration",
    tools: ["n8n", "Make.com", "Zapier", "API Integration", "Webhooks", "Workflow Automation"],
    icon: <Workflow className="w-5 h-5" />
  },
  {
    category: "AI & Development",
    tools: ["OpenAI", "Claude", "Gemini", "AI Agent Development", "Prompt Engineering", "Chatbot Development"],
    icon: <Cpu className="w-5 h-5" />
  },
  {
    category: "CRM & Marketing",
    tools: ["GoHighLevel", "HubSpot", "Klaviyo", "Manychat", "CRM Automation"],
    icon: <Layers className="w-5 h-5" />
  },
  {
    category: "Database & Management",
    tools: ["Airtable", "Google Sheets", "Notion", "Postgres", "Supabase"],
    icon: <Database className="w-5 h-5" />
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl px-8 py-4 flex items-center justify-between transition-all ${isScrolled ? "bg-white/60" : "bg-white/40"}`}>
          <div className="text-2xl font-black tracking-tighter text-secondary">
            Elewachi<span className="text-primary">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-semibold hover:text-primary transition-colors">Home</a>
            <a href="#services" className="font-semibold hover:text-primary transition-colors">Services</a>
            <a href="#experience" className="font-semibold hover:text-primary transition-colors">Experience</a>
            <a href="#stack" className="font-semibold hover:text-primary transition-colors">Stack</a>
            <a href="#projects" className="font-semibold hover:text-primary transition-colors">Projects</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
              Contact Us
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 flex flex-col gap-4 bg-white/95">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold p-2">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold p-2">Services</a>
              <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold p-2">Experience</a>
              <a href="#stack" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold p-2">Stack</a>
              <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold p-2">Projects</a>
              <button className="bg-primary text-white w-full py-3 rounded-xl font-bold">Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-secondary leading-[1.1] mb-6">
                  Hy! I Am <br />
                  <span className="text-primary">Elewachi Emmanuel</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
                  AI Automation Specialist building intelligent workflows and automation systems that drive operational efficiency.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                    Hire Me
                  </button>
                  <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <img 
                          key={i} 
                          src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                          className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                          alt="Client"
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-bold">500+ Inquiries</div>
                      <div className="text-gray-500">Handled Monthly</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Brands */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 pt-8 border-t border-gray-100"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Work For All This Brand & Client</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                  {BRANDS.map(brand => (
                    <img key={brand.name} src={brand.logo} alt={brand.name} className="h-8 object-contain" referrerPolicy="no-referrer" />
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                {/* Main Image Placeholder */}
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full animate-pulse" />
                  <img 
                    src="https://picsum.photos/seed/elewachi/600/600" 
                    alt="Elewachi Emmanuel" 
                    className="relative z-10 w-full h-full object-cover rounded-[40px] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Cards */}
                  <motion.div 
                    className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20 animate-float"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-400 p-2 rounded-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500">Best AI</div>
                        <div className="text-sm font-black">Solutions 2024</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-10 -left-10 glass p-4 rounded-2xl shadow-xl z-20 animate-float-delayed"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-500 p-2 rounded-lg">
                        <Workflow className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500">n8n Expert</div>
                        <div className="text-sm font-black">Workflow Dev</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-6 right-10 glass p-4 rounded-2xl shadow-xl z-20 animate-float"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500 p-2 rounded-lg">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500">AI Agents</div>
                        <div className="text-sm font-black">Custom Built</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">My Awesome</h2>
              <h3 className="text-5xl font-black text-secondary mb-8 leading-tight">Services</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                I specialize in designing and deploying AI-powered solutions using no/low code tools to automate complex business processes.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-primary/20">
                Download CV
              </button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-[32px] glass transition-all ${idx === 0 ? "md:col-span-2" : ""}`}
                >
                  <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Journey</h2>
            <h3 className="text-5xl font-black text-secondary">Professional Experience</h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
                
                <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 w-full">
                    <div className="glass p-8 rounded-[32px] hover:shadow-2xl transition-all border-l-4 border-l-primary">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-secondary">{exp.role}</h4>
                          <p className="text-primary font-bold">{exp.company}</p>
                        </div>
                        <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm">{exp.description}</p>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-white items-center justify-center z-10 shadow-xl shadow-primary/20 shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Stack Section */}
      <section id="stack" className="py-24 bg-secondary text-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Tech Stack</h2>
              <h3 className="text-5xl font-black mb-8 leading-tight">Tools & <br />Technologies</h3>
              <p className="text-gray-400 leading-relaxed mb-10">
                A comprehensive suite of industry-leading tools I use to build robust, scalable, and intelligent automation systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass-dark rounded-2xl">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-gray-400">Core Tools</div>
                </div>
                <div className="p-4 glass-dark rounded-2xl">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-400">Cloud Native</div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS.map((skill) => (
                <motion.div
                  key={skill.category}
                  whileHover={{ scale: 1.02 }}
                  className="glass-dark p-8 rounded-[32px] border-white/5"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/10 text-primary">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-bold">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map(tool => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-medium text-gray-300 border border-white/5 hover:bg-white/10 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Portfolio</h2>
            <h3 className="text-5xl font-black text-secondary">Recent Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative glass rounded-[40px] overflow-hidden bg-white/60"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-secondary text-white py-4 rounded-2xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-primary mb-2">4+</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">60+</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">Automated Processes</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">20+</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">85%</div>
              <div className="text-sm font-bold text-gray-600 uppercase tracking-widest">Resolution Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-white/80 to-primary/5">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8">
                Ready to automate your <br />
                <span className="text-primary">business growth?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Let's build intelligent workflows that save you time and money. 
                Schedule a free discovery call today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-primary text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-primary/30">
                  Get Started Now
                </button>
                <button className="w-full sm:w-auto bg-white text-secondary px-12 py-5 rounded-2xl font-bold text-xl border-2 border-gray-100 hover:bg-gray-50 transition-all">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-2xl font-black tracking-tighter text-secondary">
              Elewachi<span className="text-primary">.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="p-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all"><Github className="w-5 h-5" /></a>
            </div>
            <div className="text-gray-400 text-sm font-medium">
              © 2024 Elewachi Emmanuel. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-2xl shadow-primary/40 flex items-center justify-center gap-2">
          Hire Me Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

import { AnimatePresence } from "motion/react";
