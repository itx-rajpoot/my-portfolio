import { Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'TypeScript', level: 85, category: 'API' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Firebase', level: 85, category: 'Backend' },
    { name: 'Tailwind CSS', level: 95, category: 'Styling' },
    { name: 'Next.js', level: 78, category: 'Framework' },
  ];


  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Bio Section */}
          <div className="glass-card animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">My Story</h3>
            </div>
            <div className="space-y-4 text-foreground-secondary leading-relaxed">
              <p>
                I started my journey with a love for design and curiosity about how websites function.
                Learning HTML and CSS sparked my passion for building clean, responsive layouts.
              </p>
              <p>
                I advanced into full-stack development with the MERN stack—MongoDB, Express.js, React, and Node.js.
                Alongside that, I use Firebase for authentication, database, and real-time updates in my projects.
              </p>
              <p>
                I’m driven by a desire to create smooth, user-focused digital experiences.
                Always learning and building, I aim to grow as a full-stack developer and contribute to impactful projects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center ">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card hover-lift">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-foreground-muted">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-accent mt-2">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;