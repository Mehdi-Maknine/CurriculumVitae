
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Code, Database, Briefcase, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'Web Development',
    'Software Development', 
    'Database Management',
    'Debug & Testing',
    'Git',
    'Graphic Design'
  ];

  const experiences = [
    {
      company: 'Linea Computers Srl',
      role: 'Full-Stack Odoo Developer',
      period: 'Sept 2024 – Oggi',
      description: 'Sviluppo su Odoo (Python, XML, JS), App mobile con Xamarin, Gestione DB con PgAdmin, Testing, CI/CD, ottimizzazione, Agile Team'
    },
    {
      company: 'Ranocchi Software',
      role: 'Sviluppatore Software Junior',
      period: '2022–2023',
      description: 'Sviluppo gestionale in Cobol, Testing, debug, distribuzione VM'
    }
  ];

  const education = [
    {
      institution: 'Istituto Volta',
      course: 'Intelligenza Artificiale',
      status: 'in corso'
    },
    {
      institution: 'Generation Italy',
      course: 'Junior Data Engineer',
      duration: '500h'
    },
    {
      institution: 'Epicode School',
      course: 'Bootcamp Full Stack',
      duration: '465h'
    },
    {
      institution: 'Umana Forma',
      course: 'Web Developer',
      duration: '248h'
    }
  ];

  const languages = [
    { name: 'Italiano', flag: '🇮🇹', level: 'Madrelingua' },
    { name: 'Arabo', flag: '🇹🇳', level: 'Madrelingua' },
    { name: 'Inglese', flag: '🇬🇧', level: 'Fluente' },
    { name: 'Francese', flag: '🇫🇷', level: 'Fluente' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Mehdi Maknine
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 animate-fade-in delay-300">
            Full-Stack Web & Software Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in delay-500">
            "Giovane professionista motivato ad apprendere e crescere nel mondo dello sviluppo Full-Stack."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:ordi2000@hotmail.fr'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contattami
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Scarica CV
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🧠 Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-2">
                  {index === 0 && <Code className="mx-auto text-purple-400" />}
                  {index === 1 && <Briefcase className="mx-auto text-pink-400" />}
                  {index === 2 && <Database className="mx-auto text-blue-400" />}
                  {index === 3 && <FileText className="mx-auto text-green-400" />}
                  {index === 4 && <Github className="mx-auto text-orange-400" />}
                  {index === 5 && <Image className="mx-auto text-red-400" />}
                </div>
                <h3 className="font-semibold text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            💼 Esperienze Lavorative
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400/50 transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">{exp.company}</h3>
                      <h4 className="text-lg text-white">{exp.role}</h4>
                    </div>
                    <span className="text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            📚 Formazione
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">{edu.institution}</h3>
                  <h4 className="text-white mb-2">{edu.course}</h4>
                  <p className="text-gray-400">{edu.status || edu.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌍 Lingue
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{lang.flag}</div>
                <h3 className="font-semibold text-white">{lang.name}</h3>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            📫 Contatti
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">mehdi@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <Phone className="mx-auto mb-4 text-pink-400" size={32} />
              <h3 className="font-semibold text-white mb-2">Tel IT</h3>
              <p className="text-gray-300 text-sm">+39 XXX XXXXXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <Phone className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="font-semibold text-white mb-2">Tel TN</h3>
              <p className="text-gray-300 text-sm">+216 XX XXX XXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <MapPin className="mx-auto mb-4 text-green-400" size={32} />
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300 text-sm">Italia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 text-center">
        <p className="text-gray-400">© 2024 Mehdi Maknine. Made with ❤️ and React</p>
      </footer>
    </div>
  );
};

export default Index;
