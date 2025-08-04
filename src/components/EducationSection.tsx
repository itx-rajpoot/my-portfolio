import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science (BS), Computer Science',
      school: 'Government College University, Faisalabad',
      year: '2021 - 2025',
      description: 'Studying core concepts of software development, data structures, and modern web technologies.',
      gpa: 'CGPA: 3.4 / 4.0'
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      school: 'Government Associate College, Shahkot',
      year: '2019 - 2021',
      description: 'Studied Computer Science, Statistics, and Mathematics.',
      gpa: 'Marks: 788 / 1100'
    }
  ];


const certifications = [
  'Computer Operator / Office Assistant',
  'Web Designing Crash Course',
  'MERN Stack (Full Stack) Development'
];


  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Academic achievements and continuous learning journey that shaped my expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Academic Background</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card hover-lift animate-fade-in">
                  <div className="flex items-start">
                    <div className="p-2 bg-gradient-primary rounded-lg mr-4 mt-1">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                      <p className="text-accent font-medium">{edu.school}</p>
                      <div className="flex justify-between items-center mt-1 mb-2">
                        <span className="text-sm text-foreground-muted">{edu.year}</span>
                        <span className="text-sm font-medium text-primary">GPA: {edu.gpa}</span>
                      </div>
                      <p className="text-sm text-foreground-secondary">{edu.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-accent rounded-xl mr-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center p-2">
                    <div className="p-2 bg-gradient-accent rounded-lg mr-4">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-card mt-8">
              <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
              <p className="text-foreground-secondary leading-relaxed">
                I believe in lifelong learning and staying updated with the latest technologies.
                I regularly attend tech conferences, complete online courses, and contribute to
                open-source projects to expand my knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;