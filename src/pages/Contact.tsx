import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "", emergency: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "", emergency: false });
  };

  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center bg-navy">
        <div className="container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Contact <span className="text-primary">Us</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Get in touch for a free estimate or emergency service.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <Section className="space-y-8">
              <motion.div variants={fadeInUp}>
                <h3 className="font-heading text-2xl text-navy uppercase tracking-wider mb-6">Get In <span className="text-primary">Touch</span></h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">AG Restorations</p>
                      <p className="text-muted-foreground text-sm">63 Elmwood Terrace<br />Linden, New Jersey</p>
                    </div>
                  </div>
                  <a href="tel:9733424134" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">973-342-4134</span>
                  </a>
                  <a href="mailto:antoniogutama@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">antoniogutama@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Mon–Sat: 7AM–7PM</span>
                  </div>
                </div>
              </motion.div>
            </Section>

            {/* Form */}
            <div className="lg:col-span-2">
              <Section>
                <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="bg-white p-8 rounded-sm border border-border shadow-sm space-y-6">
                  <h3 className="font-heading text-2xl text-navy uppercase tracking-wider">Request <span className="text-primary">Estimate</span></h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <Input type="email" placeholder="Email *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    <Input type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                    <select
                      value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select Service</option>
                      <option>Roofing</option>
                      <option>Commercial Roofing</option>
                      <option>Metal Roofing</option>
                      <option>Flat Roof Systems</option>
                      <option>General Remodeling</option>
                      <option>Power Washing</option>
                      <option>Painting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Textarea placeholder="Tell us about your project..." rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.emergency}
                      onChange={e => setForm({...form, emergency: e.target.checked})}
                      className="rounded border-border"
                    />
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">This is an emergency / urgent request</span>
                  </label>
                  <Button type="submit" size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider w-full sm:w-auto px-12">
                    Send Message
                  </Button>
                </motion.form>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
