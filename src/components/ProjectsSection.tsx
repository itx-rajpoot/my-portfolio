import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bhattiimage from './images/bhatti-store.png';
import usmanimage from './images/usman-cloth.png'

const ProjectsSection = () => {

  const projects = [
    {
      id: 1,
      title: 'Usman Clothes House',
      description: 'An e-commerce website for clothing, featuring product browsing, cart management, and secure checkout.',
      image: usmanimage,
      tech: ['React', 'Firebase', 'Bootstrap'],
      category: 'frontend',
      liveUrl: 'https://usman-clothes-house.netlify.app/',
      githubUrl: 'https://github.com/itx-rajpoot/usman-clothes-house',
      featured: true
    },
    {
      id: 2,
      title: 'Bhatti General Store',
      description: 'A general store website offering a user-friendly shopping experience with product categories and contact features.',
      image: bhattiimage,
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'frontend',
      liveUrl: 'https://bhattistore.netlify.app/',
      githubUrl: 'https://github.com/itx-rajpoot/Bhatti-General-Store',
      featured: true
    }
    // {
    //     id: 3,
    //     title: 'Weather Dashboard',
    //     description: 'Beautiful weather app with location-based forecasts and interactive charts.',
    //     image: '/api/placeholder/400/300',
    //     tech: ['Next.js', 'Chart.js', 'OpenWeather API'],
    //     category: 'frontend',
    //     liveUrl: '#',
    //     githubUrl: '#',
    //     featured: false
    //   }
  ];





  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A showcase of my recent work, featuring web applications, APIs, and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white/30"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white/30"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>

                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium px-3 py-1 bg-muted text-foreground rounded-full border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:opacity-90 text-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-glass-border hover:bg-muted"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-foreground-secondary mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white px-8"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;