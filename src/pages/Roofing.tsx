import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/roofing-detail.jpg";
import crewImage from "@/assets/crew-working.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const steps = [
  { num: "01", title: "Free Inspection", desc: "We assess your roof's condition, identify issues, and provide a detailed report." },
  { num: "02", title: "Custom Proposal", desc: "Receive a transparent estimate with material options and timeline." },
  { num: "03", title: "Material Selection", desc: "Choose from premium brands — standing seam, shingles, metal panels, and more." },
  { num: "04", title: "Expert Installation", desc: "Our certified crew installs with precision, following manufacturer specs." },
  { num: "05", title: "Final Walkthrough", desc: "We inspect every detail and ensure your complete satisfaction." },
];

const faqs = [
  { q: "How long does a typical roof installation take?", a: "Most residential roofs take 2-5 days depending on size and complexity. We work efficiently while maintaining our high quality standards." },
  { q: "What roofing materials do you recommend?", a: "We recommend standing seam metal roofing for longevity, architectural shingles for cost-effectiveness, and TPO/EPDM for flat roofs." },
  { q: "Do you offer warranties?", a: "Yes, we offer manufacturer warranties on all materials plus our own workmanship guarantee for your peace of mind." },
  { q: "Can you work in winter?", a: "Yes, our team is experienced with New Jersey winter conditions and can perform most roofing work year-round." },
];

const Roofing = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">
              Residential <span className="text-primary">Roofing</span>
            </h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Expert roofing solutions built to protect New Jersey homes through every season.</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Section>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-navy uppercase tracking-wider mb-6">
              Complete Roofing <span className="text-primary">Solutions</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-4">
              Your roof is the first line of defense against New Jersey's harsh weather. At AG Restorations, we deliver roofing systems engineered for durability, energy efficiency, and aesthetic appeal.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
              From metal standing seam to architectural shingles, we work with top-tier materials and manufacturer-certified techniques to ensure your investment lasts decades.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              {["Metal Roofing", "Shingle Systems", "Roof Repairs", "Insulation", "Sealant Application", "Roof Cleaning"].map(s => (
                <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{s}</div>
              ))}
            </motion.div>
          </Section>
          <Section>
            <motion.img variants={fadeInUp} src={crewImage} alt="Roofing crew" className="rounded-sm shadow-xl w-full" />
          </Section>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <Section className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-white uppercase tracking-wider mb-4">Our <span className="text-primary">Process</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto" />
          </Section>
          <Section>
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map(step => (
                <motion.div key={step.num} variants={fadeInUp} className="bg-steel/50 border border-silver/10 p-6 rounded-sm text-center">
                  <span className="font-heading text-3xl text-primary">{step.num}</span>
                  <h4 className="font-heading text-white uppercase tracking-wider mt-3 mb-2">{step.title}</h4>
                  <p className="text-silver/70 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Section className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-navy uppercase tracking-wider mb-4">Frequently Asked <span className="text-primary">Questions</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto" />
          </Section>
          <Section>
            {faqs.map(faq => (
              <motion.div key={faq.q} variants={fadeInUp} className="mb-6 bg-white p-6 rounded-sm border border-border">
                <h4 className="font-heading text-navy uppercase tracking-wider text-sm mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Ready to Protect <span className="text-primary">Your Home?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase tracking-wider text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roofing;
