import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare, Award, Building, Calendar, Brain, Boxes } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  demo?: string;
  image: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
}

interface EdExperience {
  id: string;
  college: string;
  course: string;
  period: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const experiences: Experience[] = [
    {
      id: 'exp1',
      company: 'IEEE - VBIT SB',
      position: 'Web Master',
      period: '2024 - 2025',
      description: [
        "Developed and maintained the official website of IEEE VBIT SB",
        "Improved website performance by 20% through dependency optimization and image compression",
        "Mentored 2 junior developers and conducted code reviews to maintain code quality"
      ]
    },
    {
      id: 'exp2',
      company: 'coding.Studio();',
      position: 'Executive',
      period: '2024 - 2025',
      description: [
        "Developed applications for tracking late attendees for our institution and scheduling meetings of communities within the college",
        "Managing existing LMS and assessment submission portal",
        "Leading a team of 16 developers and maintaining good work ethics"
      ]
    }
  ];

  const ed_experiences: EdExperience[] = [
    {
      id: 'edexp1',
      college: 'University of Hyderabad - SCIS',
      course: 'Masters of Technology - Artificial Inteligence',
      period: '2025 - Present'
    },
    {
      id: 'edexp2',
      college: 'Vignana Bharathi Institute of Technology',
      course: 'Bachelors of Technology - AI & ML',
      period: '2021 - 2025'
    }
]
//   const professionalExperiences: Experience[] = [];

  const achievements: Achievement[] = [
    {
      id: 'ach1',
      title: 'Technical Leadership',
      description: 'Successfully led a team of 16 developers in delivering web applications',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 'ach2',
      title: 'Performance Optimization',
      description: 'Improved website efficiency by 20% through dependency optimization',
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 'ach3',
      title: 'Continuous Learning',
      description: 'Completed certifications in AWS, Infosys Springboard, Udemy React course, Wipro TalentNext and many more', 
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
        id: 'ach4',
        title: 'Competitive Programming',
        description: 'Achieved a Global Rank of 2078 in IEEE Xtreme 17.0',
        icon: <Code className="w-6 h-6" />
    },
    {
        id: 'ach5',
        title: 'GATE 2025',
        description: 'Secured an All India Rank of 4358 in DA GATE 2025',
        icon: <Brain className="w-6 h-6" />
    },
    {
        id: 'ach6',
        title: 'Hackathon Participation',
        description: 'Participated in IEEE IC Hackathon 2.0',
        icon: <Boxes className="w-6 h-6" />
    }
  ];

  const projects: Project[] = [
    {
        "id": "project1",
        "title": "Secure Blockchain-Enhanced Machine Learning Model for UAV-VANET Data Transfer",
        "description": "A blockchain-integrated machine learning system to detect and prevent malicious messages in UAV-VANET communication.",
        "tags": ["Flask", "React", "Solidity", "TensorFlow", "Web3"],
        "link": "https://github.com/Saiganeshk15/VANET",
        "image": "https://www.nomidl.com/wp-content/uploads/2023/05/mlbc.png"
    },
    {
        "id": "project2",
        "title": "Prognostic Machine Sentinel",
        "description": "A machine learning-based predictive maintenance system for real-time equipment failure detection.",
        "tags": ["Python", "TensorFlow", "Scikit-Learn", "Jupyter Notebook", "Predictive Maintenance"],
        "link": "https://github.com/Saiganeshk15/Prognostic-Machine-Sentinal",
        "image": "https://www.smartdatacollective.com/wp-content/uploads/2018/11/Machine-learning-scaled.jpg"
    },    
    {
      id: 'project3',
      title: 'ToDo Application',
      description: 'A simple task management app that allows users to create, update, and track their to-do items.',
      tags: ['ReactJs', 'Node.js', 'Firebase'],
      link: 'https://github.com/Saiganeshk15/todo-app',
      demo: 'https://todo-app-15ks.web.app/',
      image: 'https://s3-alpha.figma.com/hub/file/2893009731/269ab397-737b-4c80-9350-744919d48f78-cover.png'
    }
  ];

  const sections = ['home', 'experience', 'projects'];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <div className="flex items-center space-x-8">
              {sections.map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize relative ${
                    activeSection === section 
                      ? 'text-purple-400' 
                      : 'hover:text-purple-400'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-purple-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        {activeSection === 'home' && (
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <div className="relative inline-block">
                <h1 className="text-6xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Sai Ganesh Kemburu
                  </span>
                </h1>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
              </div>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Aspiring Software Engineer passionate about creating intuitive applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <User className="w-8 h-8 mb-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400 leading-relaxed">
                Computer Science Engineer specializing in Artificial Intelligence and Machine Learning, with a strong foundation
                in Programming, Web Application Development, Cross Platform Application Development.
                <br/><br/>
                Actively engaged in
                IEEE initiatives, leveraging communication skills to drive projects and mentor teams.
                </p>
              </div>

              <div className="group bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <Briefcase className="w-8 h-8 mb-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Node.js", "Express.js", "Flutter", "Firebase", "SQL", "TypeScript", "Tailwind CSS", "Python", "TensorFlow", "Scikit-learn", "Pandas", "OpenCV", "NLP", "REST APIs", "Git", "GitHub"].map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">Key Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id}
                    className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                        {achievement.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Saiganeshk15"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saiganesh-kemburu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:saiganeshk15@gmail.com"
                className="hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
            <>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Internship Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className="relative group"
                >
                  {/* Timeline connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-24 bg-purple-500/30 group-hover:bg-purple-500/50 transition-colors" />
                  )}
                  
                  <div className="flex gap-8">
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                        <Building className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10 group-hover:bg-white/10 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.position}</h3>
                          <p className="text-purple-400">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
              <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Educational Experience</h2>
            <div className="space-y-12">
              {ed_experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className="relative group"
                >
                  {/* Timeline connector */}
                  {index !== ed_experiences.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-24 bg-purple-500/30 group-hover:bg-purple-500/50 transition-colors" />
                  )}
                  
                  <div className="flex gap-8">
                    {/* Timeline dot */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                        <Building className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10 group-hover:bg-white/10 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold">{exp.colloge}</h3>
                          <p className="text-purple-400">{exp.course}</p>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </>
        )}

        {activeSection === 'projects' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div 
                  key={project.id} 
                  className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 group-hover:translate-x-2 transition-transform"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 group-hover:translate-x-2 transition-transform ml-4"
                      >
                        Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;


        //   <div className="max-w-4xl mx-auto">
        //   <h2 className="text-4xl font-bold text-center mb-16">Professional Journey</h2>
        //   <div className="space-y-12">
        //     {professionalExperiences.map((exp, index) => (
        //       <div 
        //         key={exp.id}
        //         className="relative group"
        //       >
        //         {/* Timeline connector */}
        //         {index !== professionalExperiences.length - 1 && (
        //           <div className="absolute left-8 top-16 w-0.5 h-24 bg-purple-500/30 group-hover:bg-purple-500/50 transition-colors" />
        //         )}
                
        //         <div className="flex gap-8">
        //           {/* Timeline dot */}
        //           <div className="relative">
        //             <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
        //               <Building className="w-8 h-8 text-purple-400" />
        //             </div>
        //           </div>
                  
        //           {/* Content */}
        //           <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10 group-hover:bg-white/10 transition-all">
        //             <div className="flex justify-between items-start mb-4">
        //               <div>
        //                 <h3 className="text-2xl font-bold">{exp.position}</h3>
        //                 <p className="text-purple-400">{exp.company}</p>
        //               </div>
        //               <div className="flex items-center text-gray-400">
        //                 <Calendar className="w-4 h-4 mr-2" />
        //                 <span>{exp.period}</span>
        //               </div>
        //             </div>
        //             <ul className="space-y-2">
        //               {exp.description.map((item, i) => (
        //                 <li key={i} className="text-gray-400 flex items-start">
        //                   <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-3 flex-shrink-0" />
        //                   {item}
        //                 </li>
        //               ))}
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>
