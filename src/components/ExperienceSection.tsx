import { Code, Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experience = [
    {
      title: 'Academic Projects & Final Year Project (FYP)',
      company: 'Government College University Faisalabad',
      period: '2021 – 2025',
      description: 'Worked on diverse software development projects applying core computer science concepts and modern web technologies. Developed scalable and user-centric applications demonstrating proficiency in full-stack development.',
      achievements: [
        'Designed and implemented a responsive bus ticket booking system with seat selection and online payments.',
        'Built a Rock-Paper-Scissors game with real-time animations using JavaScript and React.',
        'Applied database management with MongoDB and integrated Firebase authentication in projects.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express.js', 'JavaScript']
    },
    {
      title: 'Saylani Mass IT Training (SMIT) Trainee',
      company: 'Saylani Welfare International Trust',
      period: 'Dec 2023 – Dec 2024',
      description: 'Completed an intensive full-stack development training program focused on MERN stack. Gained hands-on experience building modern web applications with authentication, real-time databases, and RESTful APIs.',
      achievements: [
        'Developed multiple projects featuring Firebase authentication and database integration.',
        'Learned best practices for coding, testing, and deploying full-stack applications.',
        'Collaborated in team projects simulating real-world software development environments.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express.js']
    },
    {
      title: 'Techloset Solutions Bootcamp',
      company: 'Techloset Solutions',
      period: 'Jan 2025 – Apr 2025',
      description: 'Participated in an industry-focused bootcamp emphasizing practical full-stack development skills. Worked on real-world projects under mentorship, refining coding standards and deployment workflows.',
      achievements: [
        'Built and deployed full-stack applications using MERN stack technologies.',
        'Improved problem-solving and debugging skills through project challenges.',
        'Gained experience with version control, CI/CD pipelines, and collaborative development.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git', 'CI/CD']
    }
  ];


  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Professional journey and achievements that demonstrate my growth and expertise in web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary h-full rounded-full"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="glass-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-sm text-foreground-muted">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-foreground-secondary flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium px-2 py-1 bg-muted text-foreground rounded border border-glass-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="p-3 bg-gradient-primary rounded-full shadow-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;