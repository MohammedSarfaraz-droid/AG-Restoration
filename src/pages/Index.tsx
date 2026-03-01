import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, CheckCircle, Lock, Home, Building2, Droplets, Paintbrush, Wrench, Zap, Sun, Layers, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import crewImage from "@/assets/crew-working.jpg";
import residentialImage from "@/assets/residential-roofing.jpg";
import commercialImage from "@/assets/commercial-roofing.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const certifications = [
  { icon: Shield, label: "Certified" },
  { icon: Award, label: "Licensed" },
  { icon: Lock, label: "Bonded" },
  { icon: CheckCircle, label: "Insured" },
];

const roofingServices = [
  { icon: Home, name: "Roofing", desc: "Complete residential roofing solutions" },
  { icon: Layers, name: "Roof Insulation", desc: "Energy-efficient insulation systems" },
  { icon: Droplets, name: "Clean Roof", desc: "Professional roof cleaning services" },
  { icon: Wrench, name: "Metal Roof Repair", desc: "Expert metal roof restoration" },
  { icon: Home, name: "Residential Metal Roofs", desc: "Premium standing seam installations" },
  { icon: Building2, name: "Commercial Roofs", desc: "Large-scale commercial solutions" },
  { icon: Layers, name: "Single Ply Repair", desc: "TPO & EPDM membrane repair" },
  { icon: Droplets, name: "Roof Sealant", desc: "Protective sealant application" },
  { icon: Paintbrush, name: "Metal Roof Paint", desc: "Industrial-grade roof coating" },
  { icon: Building2, name: "Commercial Flat Roofs", desc: "Flat roof systems & repair" },
];

const additionalServices = [
  { icon: Wrench, name: "General Remodeling", desc: "Complete home transformations" },
  { icon: Paintbrush, name: "Interior & Exterior Painting", desc: "Professional paint services" },
  { icon: Layers, name: "Flat Foam", desc: "Spray foam roofing systems" },
  { icon: Home, name: "Shingles Installation", desc: "Premium shingle systems" },
  { icon: Zap, name: "Torch Down", desc: "Modified bitumen torchdown" },
  { icon: Layers, name: "Tar & Gravel", desc: "Built-up roofing systems" },
  { icon: Layers, name: "Modified Bitumen", desc: "Multi-layer roofing membranes" },
  { icon: Sun, name: "Sun Tunnels", desc: "Natural light solutions" },
  { icon: Home, name: "Composition Shingle", desc: "Residential shingle roofing" },
  { icon: Droplets, name: "Power Washing", desc: "High-pressure exterior cleaning" },
];

const towns = [
  "Elizabeth", "Plainfield", "Rahway", "Westfield", "Fanwood",
  "Garwood", "Kenilworth", "Mountainside", "New Providence", "Roselle",
  "Roselle Park", "Berkeley Heights", "Clark", "Cranford", "Hillside",
  "Linden", "Scotch Plains", "Springfield", "Union", "Winfield",
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider leading-tight mb-6">
              Precision Roofing &<br />
              <span className="text-primary">Restoration</span> Built to Endure
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-line-grow" />
            <p className="text-silver/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Certified. Licensed. Bonded. Insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-8 py-6 hover:bg-primary/90 animate-glow-pulse">
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:9733424134">
                <Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase tracking-wider text-lg px-8 py-6 bg-white/10 hover:border-primary">
                  <Phone className="w-5 h-5 mr-2" /> Call 973-342-4134
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS BAR */}
      <section className="bg-steel py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {certifications.map((cert, i) => (
              <div key={cert.label} className="flex items-center gap-2 text-silver/80">
                <cert.icon className="w-5 h-5 text-primary" />
                <span className="font-heading uppercase tracking-widest text-sm">{cert.label}</span>
                {i < certifications.length - 1 && (
                  <span className="hidden md:block ml-8 w-px h-5 bg-silver/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-concrete">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl text-navy uppercase tracking-wider mb-4">
              Our <span className="text-primary">Services</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto mb-4" />
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive roofing and restoration solutions tailored for New Jersey homes and businesses.
            </motion.p>
          </AnimatedSection>

          {/* Roofing Services */}
          <AnimatedSection className="mb-16">
            <motion.h3 variants={fadeInUp} className="font-heading text-2xl text-navy uppercase tracking-wider mb-8">
              Roofing Services
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {roofingServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  className="group bg-white p-6 rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                >
                  <service.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading text-navy uppercase text-sm tracking-wider mb-1">{service.name}</h4>
                  <p className="text-xs text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Additional Services */}
          <AnimatedSection>
            <motion.h3 variants={fadeInUp} className="font-heading text-2xl text-navy uppercase tracking-wider mb-8">
              Additional Services
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {additionalServices.map((service) => (
                <motion.div
                  key={service.name}
                  variants={fadeInUp}
                  className="group bg-white p-6 rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                >
                  <service.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-heading text-navy uppercase text-sm tracking-wider mb-1">{service.name}</h4>
                  <p className="text-xs text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY AG RESTORATIONS */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-6">
                Why <span className="text-primary">AG Restorations</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mb-8" />
              <motion.p variants={fadeInUp} className="text-silver/80 leading-relaxed mb-6">
                At AG Restorations, we believe roofing is more than a service — it's a commitment to long-term protection. Based in Linden, NJ, our team understands the unique demands of New Jersey's climate: harsh winters, heavy rain, coastal humidity, and summer heat.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-silver/80 leading-relaxed mb-8">
                We use only top-tier materials and advanced installation techniques to deliver solutions that stand the test of time. Our approach is personal — every project gets a dedicated team, honest pricing, and the kind of craftsmanship that speaks for itself.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                {["Climate Expertise", "Top-Tier Materials", "Honest Pricing", "Personal Approach"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-silver/90">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="relative">
                <img src={crewImage} alt="AG Restorations professional crew" className="w-full rounded-sm shadow-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary rounded-sm" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL VS COMMERCIAL */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[400px] group overflow-hidden">
            <img src={residentialImage} alt="Residential roofing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-3xl text-white uppercase tracking-wider mb-3">Residential Roofing</h3>
              <p className="text-silver/80 mb-6 max-w-sm">Premium roofing solutions for New Jersey homeowners. Built to protect your family.</p>
              <Link to="/roofing">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-navy font-heading uppercase tracking-wider">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] group overflow-hidden">
            <img src={commercialImage} alt="Commercial roofing" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-heading text-3xl text-white uppercase tracking-wider mb-3">Commercial Roofing</h3>
              <p className="text-silver/80 mb-6 max-w-sm">Industrial-grade flat roof systems for businesses. TPO, EPDM & more.</p>
              <Link to="/commercial-roofing">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-navy font-heading uppercase tracking-wider">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-steel">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
              Proudly Serving <span className="text-primary">Union County</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto mb-4" />
            <motion.p variants={fadeInUp} className="text-silver/70 max-w-xl mx-auto">
              & Surrounding Areas in New Jersey
            </motion.p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
              {towns.map((town) => (
                <motion.div
                  key={town}
                  variants={fadeInUp}
                  className="bg-navy/50 border border-silver/10 rounded-sm px-4 py-3 text-center hover:border-primary/50 transition-colors"
                >
                  <span className="text-silver/80 text-sm font-medium">{town}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-navy via-steel to-navy relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(170_100%_39%/0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.h2 variants={fadeInUp} className="font-heading text-4xl md:text-6xl text-white uppercase tracking-wider mb-6">
              Let's Strengthen Your<br /><span className="text-primary">Home Today</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-1 bg-primary mx-auto mb-8" />
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-navy font-heading uppercase tracking-wider text-lg px-10 py-6 hover:bg-primary/90 animate-glow-pulse">
                  Request Free Estimate
                </Button>
              </Link>
              <a href="tel:9733424134">
                <Button size="lg" variant="outline" className="border-silver/30 text-white font-heading uppercase tracking-wider text-lg px-10 py-6 bg-white/10">
                  <Phone className="w-5 h-5 mr-2" /> 973-342-4134
                </Button>
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
