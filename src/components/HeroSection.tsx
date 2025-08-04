import { useState, useEffect } from 'react';
import { ChevronDown, Download, Image, Import, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImg from '../imgs/portfolio image.jpg';
import { profile } from 'console';
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Specialist',
    'Front-End Designer',
    'UI/UX Designer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif mb-4">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="gradient-text">Muhammad Zohaib</span>
              </h1>

              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl text-foreground-secondary font-medium">
                  <span className="inline-block animate-slide-up" key={currentRole}>
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg text-foreground-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Transforming ideas into stunning, user-friendly digital experiences using modern web technologies and clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl hover-lift"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-glass-border text-foreground hover:bg-muted font-semibold px-8 py-3 rounded-xl hover-lift"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-background-secondary p-4">
                  <div className="w-full h-full rounded-full overflow-hidden glass-card hover-lift">
                    <img
                      src={profileImg}
                      alt="John Doe - Full Stack Developer"
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        transform: "scale(1.2)",
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-120"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl animate-float">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6 text-foreground-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;