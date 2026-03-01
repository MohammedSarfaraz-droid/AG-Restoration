import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import heroImage from "@/assets/commercial-roofing.jpg";
import flatRoofImage from "@/assets/flat-roof.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const steps = [
  { num: "01", title: "Site Assessment", desc: "Complete evaluation of your commercial property and roofing needs." },
  { num: "02", title: "System Design", desc: "Engineered roofing solution tailored to your building." },
  { num: "03", title: "Material Procurement", desc: "Premium commercial-grade materials sourced from top manufacturers." },
  { num: "04", title: "Professional Install", desc: "Expert crew installation with minimal business disruption." },
  { num: "05", title: "Quality Assurance", desc: "Thorough inspection and warranty documentation." },
];

const CommercialRoofing = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">Commercial <span className="text-primary">Roofing</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Industrial-grade roofing systems for commercial properties throughout New Jersey.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Section>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-navy uppercase tracking-wider mb-6">Commercial-Grade <span className="text-primary">Systems</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-6" />
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">
              From TPO and EPDM single-ply membranes to modified bitumen and built-up roofing, we install commercial systems engineered for longevity, energy efficiency, and weather resistance.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3">
              {["TPO Roofing", "EPDM Systems", "Modified Bitumen", "Built-Up Roofing", "Metal Panels", "Roof Coatings"].map(s => (
                <div key={s} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{s}</div>
              ))}
            </motion.div>
          </Section>
          <Section>
            <motion.img variants={fadeInUp} src={flatRoofImage} alt="Commercial flat roof" className="rounded-sm shadow-xl w-full" />
          </Section>
        </div>
      </section>

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

      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Protect Your <span className="text-primary">Business</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialRoofing;
