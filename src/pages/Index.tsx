import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import StickyContactButton from '@/components/StickyContactButton';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <StickyContactButton />
      
      {/* Footer */}
      <footer className="bg-background-tertiary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-foreground-muted">
              © 2025 Muhammad Zohaib. All rights reserved. Built with ❤️ and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
