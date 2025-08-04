import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.className = isDark ? '' : 'light';
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass backdrop-blur-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-serif text-2xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground-secondary hover:text-foreground'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="hover:bg-muted"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="glass rounded-2xl p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground-secondary hover:bg-muted hover:text-foreground'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;