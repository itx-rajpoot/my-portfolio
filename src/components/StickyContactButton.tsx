import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const StickyContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: 'Muhammad Zohaib', // Your name
      };

      await emailjs.send(
        'service_mqya9mx',
        'template_0mv5bbh',
        templateParams,
        '3GoSgPnNu72XZksHw'
      );

      toast({
        title: "Quick message sent!",
        description: "I'll get back to you as soon as possible.",
      });

      setFormData({ name: '', email: '', message: '' });
      setIsOpen(false);
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
    <>
      {/* Sticky Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full h-14 w-14 bg-gradient-primary hover:opacity-90 shadow-glow transition-all duration-300 ${
            isOpen ? 'rotate-45' : 'hover:scale-110'
          }`}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MessageCircle className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>

      {/* Contact Form Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 sm:w-96">
          <div className="glass-card animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Quick Contact</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
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
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-muted border-glass-border focus:border-primary"
                  placeholder="Your email"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted border-glass-border focus:border-primary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white"
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

            <div className="mt-4 pt-4 border-t border-glass-border">
              <p className="text-xs text-foreground-muted text-center">
                Or email me directly at{' '}
                <a href="mailto:ranazohaib6210@gmail.com" className="text-primary hover:underline">
                  ranazohaib6210@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default StickyContactButton;