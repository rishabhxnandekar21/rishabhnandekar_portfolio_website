import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from 'sonner';
import { personalInfo, socialLinks } from '@/data/portfolio-data';

// Form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  phone: z
    .string()
    .trim()
    .min(10, { message: 'Please enter a valid phone number' })
    .max(20, { message: 'Phone number is too long' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm
              form={form}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              isInView={isInView}
            />

            {/* Contact Info */}
            <ContactInfo isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactFormProps {
  form: ReturnType<typeof useForm<ContactFormData>>;
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  isInView: boolean;
}

function ContactForm({
  form,
  onSubmit,
  isSubmitting,
  isInView,
}: ContactFormProps) {
  return (
    <motion.div
      className="p-8 rounded-xl bg-card border border-border/50"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="bg-muted/50 border-border focus:border-primary interactive"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+91 00000-00000"
                    {...field}
                    className="bg-muted/50 border-border focus:border-primary interactive"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ask question or inquiry"
                    rows={5}
                    {...field}
                    className="bg-muted/50 border-border focus:border-primary resize-none interactive"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 gap-2 interactive"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}

function ContactInfo({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
    >
      {/* Contact Details */}
      <div className="space-y-6 mb-10">
        <ContactItem
          icon={Mail}
          label="Email"
          value={personalInfo.email}
          href={`mailto:${personalInfo.email}`}
        />
        <ContactItem
          icon={Phone}
          label="Phone"
          value={personalInfo.phone}
          href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}
        />
        <ContactItem
          icon={MapPin}
          label="Location"
          value={personalInfo.location}
        />
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
        <div className="flex flex-wrap gap-3">
          <SocialButton
            href={socialLinks.github}
            icon={Github}
            label="GitHub"
          />
          <SocialButton
            href={socialLinks.linkedin}
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialButton
            href={socialLinks.leetcode}
            icon={ExternalLink}
            label="LeetCode"
          />
        </div>
      </div>

      {/* Availability */}
      <div className="mt-10 p-5 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">
            Currently available for new opportunities
          </span>
        </div>
      </div>
    </motion.div>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

interface SocialButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
