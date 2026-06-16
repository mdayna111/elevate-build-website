'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Shield, Hammer, Building2, MapPin, Phone, Mail } from 'lucide-react';

export default function ElevateBuildCinematicWebsite() {
  const logoSrc = '/images/elevate-build-logo.png';
  const ccbNumber = 'CCB #261968';
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.28], [1, 1.18]);
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const logoY = useTransform(scrollYProgress, [0, 0.18], [0, -85]);
  const logoScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.72]);

  const ease = [0.22, 1, 0.36, 1];

  const brandFont = {
    fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif',
    letterSpacing: '0.24em',
  };

  const bodyFont = {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 70, filter: 'blur(14px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.15, ease },
    },
  };

  const sweepIn = {
    hidden: { opacity: 0, x: 120, scale: 0.92, filter: 'blur(18px)' },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.3, ease },
    },
  };

  const services = [
    {
      title: 'Residential Construction',
      description: 'Thoughtfully built homes shaped around structure, longevity, and refined craftsmanship.',
      icon: Building2,
    },
    {
      title: 'Renovations',
      description: 'Existing spaces elevated with clean execution, quality materials, and careful planning.',
      icon: Hammer,
    },
    {
      title: 'Specialized Services',
      description: 'Trusted trade coordination for tailored construction and improvement solutions.',
      icon: Shield,
    },
  ];

  const projects = [
    {
      image: '/images/project-01.jpg',
      label: 'Project Vision 01',
      title: 'Refined construction for lasting quality.',
    },
    {
      image: '/images/project-02.jpg',
      label: 'Project Vision 02',
      title: 'Designed with precision and modern craftsmanship.',
    },
    {
      image: '/images/project-03.jpg',
      label: 'Project Vision 03',
      title: 'Luxury spaces elevated through thoughtful execution.',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#061827] text-white" style={bodyFont}>
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(216,182,106,0.16),transparent_32%),linear-gradient(180deg,#061827_0%,#071421_50%,#02070D_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#D8B66A]/15 bg-[#061827]/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -80, filter: 'blur(12px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, ease }}
          >
            <img
              src={logoSrc}
              alt="Elevate Build LLC Logo"
              className="h-14 w-auto object-contain drop-shadow-[0_0_22px_rgba(216,182,106,0.25)] md:h-16"
            />
          </motion.div>

          <div className="hidden items-center gap-6 md:flex">
            <p className="rounded-full border border-[#D8B66A]/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#D8B66A]">
              {ccbNumber}
            </p>

            <nav className="flex items-center gap-8 text-sm text-blue-100/70">
            <a href="#craft" className="transition hover:text-[#D8B66A]">Craft</a>
            <a href="#services" className="transition hover:text-[#D8B66A]">Services</a>
            <a href="#portfolio" className="transition hover:text-[#D8B66A]">Work</a>
            <a href="#contact" className="transition hover:text-[#D8B66A]">Contact</a>
          </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              scale: heroScale,
              y: heroY,
              opacity: heroOpacity,
              backgroundImage: "url('/images/hero-construction.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061827]/70 via-[#061827]/55 to-[#061827]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,182,106,0.22),transparent_28%)]" />

          <motion.div
            className="relative mx-auto max-w-5xl"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } } }}
          >
            <motion.img
              src={logoSrc}
              alt="Elevate Build LLC Logo"
              className="mx-auto mb-8 h-36 w-auto object-contain drop-shadow-[0_0_42px_rgba(216,182,106,0.35)] md:h-48"
              style={{ y: logoY, scale: logoScale }}
              initial={{ opacity: 0, x: -180, rotate: -8, scale: 0.72, filter: 'blur(20px)' }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.6, ease }}
            />

            <motion.p variants={fadeUp} className="mb-5 text-xs uppercase text-[#D8B66A] md:text-sm" style={{ letterSpacing: '0.38em' }}>
              Portland Metropolitan Construction
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[0.96] text-white md:text-8xl"
              style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}
            >
              Elevate Your Vision.
              <br />
              Build With Confidence.
            </motion.h1>

            <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100/75 md:text-xl">
              Thoughtfully crafted construction solutions designed with precision, professionalism, and lasting quality.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-[#D8B66A] px-7 py-4 font-semibold text-[#061827] shadow-[0_0_34px_rgba(216,182,106,0.22)] transition hover:scale-105">
                Start a Project <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#D8B66A]/60 hover:bg-white/10">
                Explore the Work
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="craft" className="relative py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} variants={{ show: { transition: { staggerChildren: 0.16 } } }}>
              <motion.p variants={fadeUp} className="mb-4 text-xs uppercase text-[#D8B66A]" style={{ letterSpacing: '0.36em' }}>
                The Elevate Standard
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-semibold leading-tight md:text-6xl" style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}>
                Every detail has a purpose.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-lg leading-8 text-blue-100/70">
                From planning to final walkthrough, Elevate Build LLC focuses on clear communication, careful coordination, and work that feels intentional from every angle.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-2">
                {['Transparent Process', 'Quality Craftsmanship', 'Trusted Partners', 'Professional Execution'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#D8B66A]/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                    <Check className="h-5 w-5 text-[#D8B66A]" />
                    <span className="text-blue-100/85">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={sweepIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-[#D8B66A]/10 blur-3xl" />
              <img
                src="/images/craft-blueprint.jpg"
                alt="Luxury residential interior"
                className="relative h-[680px] w-full rounded-[2.5rem] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        <section id="services" className="relative py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <p className="mb-4 text-xs uppercase text-[#D8B66A]" style={{ letterSpacing: '0.36em' }}>Services</p>
              <h2 className="text-4xl font-semibold leading-tight md:text-6xl" style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}>
                Built to feel seamless.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 90, scale: 0.92, filter: 'blur(14px)' }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.05, ease, delay: index * 0.12 }}
                    className="group rounded-[2rem] border border-[#D8B66A]/10 bg-[#0B2138]/70 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-3 hover:border-[#D8B66A]/40"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D8B66A]/10 text-[#D8B66A] transition group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                    <p className="leading-7 text-blue-100/65">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="relative py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs uppercase text-[#D8B66A]" style={{ letterSpacing: '0.36em' }}>Visual Direction</p>
                <h2 className="text-4xl font-semibold leading-tight md:text-6xl" style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}>
                  Spaces with presence.
                </h2>
              </div>
              
            </div>

            <div className="space-y-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -160 : 160, scale: 0.94, filter: 'blur(18px)' }}
                  whileInView={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 1.25, ease }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-[#D8B66A]/10 bg-[#0B2138] shadow-2xl"
                >
                  <img src={project.image} alt="Elevate Build project visual" className="h-[520px] w-full object-cover transition duration-[1400ms] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061827]/85 via-[#061827]/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 max-w-xl p-8 md:p-12">
                    <p className="mb-3 text-xs uppercase text-[#D8B66A]" style={{ letterSpacing: '0.28em' }}>{project.label}</p>
                    <h3 className="text-3xl font-semibold md:text-5xl" style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80, filter: 'blur(18px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.2, ease }}
            className="mx-auto max-w-5xl rounded-[3rem] border border-[#D8B66A]/15 bg-[#0B2138]/80 px-8 py-20 shadow-[0_0_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <p className="mb-5 text-xs uppercase text-[#D8B66A]" style={{ letterSpacing: '0.36em' }}>Let’s Build Together</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl" style={{ fontFamily: 'Cinzel, Trajan Pro, Times New Roman, serif' }}>
              Bring your vision into focus.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-blue-100/70">
              Schedule a consultation and start your project with clarity, confidence, and a team built around professional standards.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="tel:9717275782" className="inline-flex items-center gap-3 rounded-full bg-[#D8B66A] px-7 py-4 font-semibold text-[#061827] transition hover:scale-105">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href="mailto:hello@elevatebuildllc.com" className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#D8B66A]/60 hover:bg-white/10">
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer id="contact" className="relative z-10 border-t border-[#D8B66A]/10 bg-[#02070D] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <img src={logoSrc} alt="Elevate Build LLC Logo" className="mb-5 h-20 w-auto object-contain" />
            <p className="max-w-sm leading-7 text-blue-100/60">Professional construction solutions throughout the Portland metropolitan area.</p>
            <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-[#D8B66A]">{ccbNumber}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#D8B66A]">Contact</h4>
            <div className="space-y-3 text-blue-100/65">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> (971) 727-5782</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@elevatebuildllc.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Portland Metropolitan Area</p>
              <p className="flex items-center gap-3"><Shield className="h-4 w-4" /> Licensed Contractor • {ccbNumber}</p>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-[#D8B66A]">Company Values</h4>
            <p className="leading-7 text-blue-100/65">Transparency, trust, accountability, professionalism, and quality craftsmanship.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
