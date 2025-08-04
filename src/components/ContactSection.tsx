import { useState } from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Send, MessageSquare, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ranazohaib6210@gmail.com',
      href: 'mailto:ranazohaib6210@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 306 9259523',
      href: 'tel:+923069259523'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chak no. 60 RB, Balochani, District Faisalabad',
      href: 'https://www.google.com/maps/place/Balochni,+Pakistan/@31.55613,73.4199026,14z',
      target: '_blank'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/itx-rajpoot',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-zohaib-677183287/',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'Whatsapp',
      href: 'https://wa.me/923069259523',
      color: 'hover:text-green-400'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        to_name: 'Muhammad Zohaib',
      };

      await emailjs.send(
        'service_mqya9mx',
        'template_k90tyyl',
        templateParams,
        '3GoSgPnNu72XZksHw'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you have a specific project in mind or just want to chat about possibilities,
                I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground-muted">{info.label}</div>
                      <a
                        href={info.href}
                        {...(info.href.startsWith('mailto:') || info.href.startsWith('tel:')
                          ? {}
                          : { target: '_blank', rel: 'noopener noreferrer' })}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card">
              <h4 className="text-xl font-bold mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-muted rounded-xl hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground-secondary mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-muted border-glass-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground-secondary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-glass-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground-secondary mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-muted border-glass-border focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground-secondary mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted border-glass-border focus:border-primary resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;