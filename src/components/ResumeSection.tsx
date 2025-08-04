import { Download, FileText, Award, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: '2+ Years Experience',
      description: 'Hands-on experience building full-stack applications using the MERN stack and Firebase.'
    },
    {
      icon: Award,
      title: 'Certified in Full Stack Development',
      description: 'Trained at Saylani and Techloset Bootcamp with certifications in MERN/MEAN stack and Web Design.'
    },
    {
      icon: User,
      title: 'Project Oriented',
      description: 'Built real-world projects with a focus on clean UI, performance, and user satisfaction.'
    }
  ];

  const handleDownload = () => {
    // In a real application, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/ZohaibResume.pdf';
    link.download = 'Zohaib Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Comprehensive overview of my professional experience, skills, and achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <div className="order-2 lg:order-1">
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Professional Resume</h3>
                  <p className="text-foreground-secondary">Updated July 2025</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Professional Summary</h4>
                  <p className="text-foreground-secondary">
                    Experienced Full Stack Developer with expertise in React, Node.js, and modern web technologies.
                    Proven track record of delivering high-quality applications and leading development teams.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'Node.js', 'MongoDB', 'TypeScript', 'Firebase', 'Bootstrap', 'SCSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted text-sm rounded-full border border-glass-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg mb-2">Recent Achievement</h4>
                  <p className="text-foreground-secondary">
                    Designed and implemented a robust e-commerce solution that improved site responsiveness and contributed to notable revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-6">Download Full Resume</h3>
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                Get the complete details of my professional journey, including detailed education,
                work experience, certifications, and project portfolios.
              </p>

              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl hover-lift mb-8"
              >
                <Download className="h-5 w-5 mr-3" />
                Download Resume (PDF)
              </Button>

              <div className="text-sm text-foreground-muted">
                <p>• PDF format, Single Page</p>
                <p>• Updated regularly</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-gradient-accent rounded-lg mr-4 mt-1">
                      <highlight.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-foreground-secondary">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="glass-card text-center max-w-4xl mx-auto px-6 py-10">
            <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Reliable</div>
                <div className="text-foreground-secondary text-sm">On-time delivery and consistent communication.</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Skilled</div>
                <div className="text-foreground-secondary text-sm">Experienced in React, Firebase, and the MERN stack.</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Focused</div>
                <div className="text-foreground-secondary text-sm">Detail-oriented with a user-first development approach.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;