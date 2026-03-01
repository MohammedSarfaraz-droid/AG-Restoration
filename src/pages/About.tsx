import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Award, Heart, Users } from "lucide-react";
import crewImage from "@/assets/crew-working.jpg";

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.div>;
}

const values = [
  { icon: Shield, title: "Quality First", desc: "We never cut corners. Every project uses premium materials and expert techniques." },
  { icon: Award, title: "Certified Excellence", desc: "Licensed, bonded, insured — meeting the highest industry standards." },
  { icon: Heart, title: "Customer Focus", desc: "Your satisfaction drives every decision we make." },
  { icon: Users, title: "Local Expertise", desc: "Deep knowledge of NJ weather patterns and building codes." },
];

const About = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${crewImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-wider mb-4">About <span className="text-primary">AG Restorations</span></h1>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-silver/80 text-lg max-w-xl">Precision craftsmanship rooted in Linden, New Jersey.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Section className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-navy uppercase tracking-wider mb-6">Our <span className="text-primary">Mission</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto mb-8" />
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-lg">
              At AG Restorations, we believe roofing and restoration is more than a trade — it's a commitment to protecting families and businesses. Operating from 63 Elmwood Terrace in Linden, NJ, our team combines old-school craftsmanship with modern engineering to deliver results that stand the test of time.
            </motion.p>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <Section className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl text-white uppercase tracking-wider mb-4">Core <span className="text-primary">Values</span></motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto" />
          </Section>
          <Section>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(v => (
                <motion.div key={v.title} variants={fadeInUp} className="bg-steel/50 border border-silver/10 p-8 rounded-sm text-center">
                  <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-heading text-white uppercase tracking-wider mb-3">{v.title}</h4>
                  <p className="text-silver/70 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-steel to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl text-white uppercase tracking-wider mb-6">Work With <span className="text-primary">Us</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6">Get Free Estimate</Button></Link>
            <a href="tel:9733424134"><Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase text-lg px-8 py-6 hover:bg-white/10"><Phone className="w-5 h-5 mr-2" />973-342-4134</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
