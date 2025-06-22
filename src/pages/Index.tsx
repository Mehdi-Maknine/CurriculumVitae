import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Code, Database, Briefcase, User, FileText, Image, ArrowUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import Lottie from 'lottie-react';
import codeAnim from '@/lotties/code.json';
import devAnim from '@/lotties/dev.json';
import dbAnim from '@/lotties/database.json';
import testAnim from '@/lotties/testing.json';
import gitAnim from '@/lotties/git.json';
import designAnim from '@/lotties/design.json';



const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      const sections = ['skills', 'experience', 'education', 'languages', 'contatti'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop - 100 <= window.scrollY && el.offsetTop + el.offsetHeight > window.scrollY) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const skills = ['Web Development','Software Development','Database Management','Debug & Testing','Git','Graphic Design'];
  const lottieIcons = [codeAnim, devAnim, dbAnim, testAnim, gitAnim, designAnim];
  const experiences = [
    { company: 'Linea Computers Srl', role: 'Full-Stack Odoo Developer', period: 'Sept 2024 – Oggi', description: 'Sviluppo su Odoo (Python, XML, JS), App mobile con Xamarin, Gestione DB con PgAdmin, Testing, CI/CD, ottimizzazione, Agile Team' },
    { company: 'Ranocchi Software', role: 'Sviluppatore Software Junior', period: '2022–2023', description: 'Sviluppo gestionale in Cobol, Testing, debug, distribuzione VM' }
  ];
  const education = [
    { institution: 'Istituto Volta', course: 'Intelligenza Artificiale', status: 'in corso' },
    { institution: 'Generation Italy', course: 'Junior Data Engineer', duration: '500h' },
    { institution: 'Epicode School', course: 'Bootcamp Full Stack', duration: '465h' },
    { institution: 'Umana Forma', course: 'Web Developer', duration: '248h' }
  ];
  const languages = [
    { name: 'Italiano', flag: '🇮🇹', level: 'Madrelingua' },
    { name: 'Arabo', flag: '🇹🇳', level: 'Madrelingua' },
    { name: 'Inglese', flag: '🇬🇧', level: 'Fluente' },
    { name: 'Francese', flag: '🇫🇷', level: 'Fluente' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-x-hidden relative" style={{ scrollBehavior: 'smooth' }}>

      <div className="fixed top-0 left-0 h-1 bg-cyan-400 z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Language Switcher - Tiny Flags */}
      <div className="fixed top-4 right-4 z-50 flex gap-1 text-xs">
        <button onClick={() => handleLanguageChange('it')} className={`w-6 h-6 rounded-full text-sm ${i18n.language === 'it' ? 'ring-2 ring-cyan-400' : 'opacity-70'} hover:opacity-100 transition`} title="Italiano">🇮🇹</button>
        <button onClick={() => handleLanguageChange('en')} className={`w-6 h-6 rounded-full text-sm ${i18n.language === 'en' ? 'ring-2 ring-cyan-400' : 'opacity-70'} hover:opacity-100 transition`} title="English">🇬🇧</button>
        <button onClick={() => handleLanguageChange('fr')} className={`w-6 h-6 rounded-full text-sm ${i18n.language === 'fr' ? 'ring-2 ring-cyan-400' : 'opacity-70'} hover:opacity-100 transition`} title="Français">🇫🇷</button>
      </div>


      <nav className="fixed top-0 left-0 right-0 z-40 bg-blue-950/90 backdrop-blur-md shadow-md">
        <ul className="flex justify-center gap-6 py-4 text-blue-300 text-sm sm:text-base">
          {['skills', 'experience', 'education', 'languages', 'contatti'].map(section => (
            <li key={section}>
              <a href={`#${section}`} className={`transition ${activeSection === section ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="h-20" />


      <section className="relative min-h-screen flex items-center justify-center px-4" id="hero">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 transition-all duration-1000 opacity-100 translate-y-0 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Mehdi Maknine
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Full-Stack Web & Software Developer
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          "Giovane professionista motivato ad apprendere e crescere nel mondo dello sviluppo Full-Stack."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'mailto:ordi2000@hotmail.fr'}
          >
            <Mail className="mr-2 h-5 w-5" />
            {t('Contact Me')}
          </Button>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            {t('Download')}
          </Button>
        </div>
      </div>
    </section>

    {/* Skills Section con Lottie */}
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">🧠 {t('skills')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={skill} className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden group" style={{ animationDelay: `${index * 100}ms` }}>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
              <div className="text-2xl mb-2 h-20 flex items-center justify-center">
                <Lottie animationData={lottieIcons[index]} loop={true} className="w-16 h-16" />
              </div>
              <h3 className="font-semibold text-white mt-2">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-blue-950/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">💼 Esperienze Lavorative</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative bg-blue-900/20 backdrop-blur-md border border-blue-700/40 hover:border-cyan-400 transition-all duration-300 hover:scale-105 overflow-hidden group" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-300">{exp.company}</h3>
                      <h4 className="text-lg text-white">{exp.role}</h4>
                    </div>
                    <span className="text-blue-300 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-blue-100">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">📚 {t('education')}</h2>
          <div className="relative border-l-4 border-cyan-500 ml-4 space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 group">
                <div className="absolute left-[-14px] top-0 w-6 h-6 bg-cyan-500 border-4 border-blue-950 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="bg-blue-900/40 p-6 rounded-xl shadow-md border border-blue-700/40 hover:border-cyan-400 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-cyan-300">{edu.institution}</h3>
                  <h4 className="text-white">{edu.course}</h4>
                  <p className="text-blue-300 text-sm">{edu.status || edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Languages Section */}
      <section id="languages" className="py-20 px-4 bg-blue-950/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">🌍 Lingue</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div key={lang.name} className="relative bg-blue-900/20 backdrop-blur-md rounded-xl p-6 text-center border border-blue-700/40 hover:border-cyan-400 transition-all duration-300 hover:scale-105 overflow-hidden group" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[-20deg] group-hover:left-full transition-all duration-700 ease-in-out" />
                <div className="text-4xl mb-2">{lang.flag}</div>
                <h3 className="font-semibold text-white">{lang.name}</h3>
                <p className="text-blue-300 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Contact button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-blue-700 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in z-50" aria-label="Torna su">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
