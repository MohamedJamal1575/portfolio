import { useState } from 'react';
import { Section } from '../Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle, Mail, Send, XCircle } from 'lucide-react';
import { profileData } from '@/data/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { toast } from 'sonner';

export function ContactSection() {
  const { ref, isInView } = useInViewAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'http://localhost:3000/api/send-mail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      toast('Message sent successfully 🎉', {
        position: "top-center",
        description: "Thanks for reaching out. I'll get back to you shortly.",
        action: (
          <CheckCircle className="text-green-500 w-5 h-5" />
        ),
      })
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error)
        toast('Message failed', {
          position: "top-center",
          description: error?.message || 'Unable to send message. Please try again later.',
          action: (
            <XCircle className="w-5 h-5" />
          ),
        });

    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind? Let's work together"
      className="bg-muted/30"
    >
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="bg-card rounded-lg p-8 md:p-12 shadow-sm border border-border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
              <Mail className="w-5 h-5" />
              <a
                href={`mailto:${profileData.email}`}
                className="text-lg hover:text-accent-foreground transition-colors"
              >
                {profileData.email}
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Or fill out the form below and I'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
