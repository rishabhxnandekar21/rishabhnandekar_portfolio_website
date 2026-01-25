import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
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

/* -------------------- Validation Schema -------------------- */
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

/* -------------------- Main Section -------------------- */
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

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);

      toast.error('Failed to send message', {
        description: 'Please try again later or contact me directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
            <ContactForm
              form={form}
              onSubmit={onSubmit}
              isSubmitting={isSubmitting}
              isInView={isInView}
            />
            <ContactInfo isInView={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Contact Form -------------------- */
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
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
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
                    className="bg-muted/50 border-border focus:border-primary"
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
                    className="bg-muted/50 border-border focus:border-primary"
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
                    rows={5}
                    placeholder="Ask question or inquiry"
                    {...field}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
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
            className="w-full bg-primary hover:bg-primary/90 gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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

/* -------------------- Contact Info -------------------- */
function ContactInfo({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="space-y-6 mb-10">
        <ContactItem icon={Mail} label="Email" value={personalInfo.email} />
        <ContactItem icon={Phone} label="Phone" value={personalInfo.phone} />
        <ContactItem
          icon={MapPin}
          label="Location"
          value={personalInfo.location}
        />
      </div>

      <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
      <div className="flex flex-wrap gap-3">
        <SocialButton href={socialLinks.github} icon={Github} label="GitHub" />
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
    </motion.div>
  );
}

/* -------------------- Helpers -------------------- */
function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
