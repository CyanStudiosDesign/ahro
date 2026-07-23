import React from "react";
import { Navbar } from "@/modules/layout/navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-white font-sans text-ink">
        <div className="max-w-4xl mx-auto py-24 sm:py-32 px-6 md:px-12 lg:px-16">
          {/* ======================================= */}
          {/* SECTION 1: ABOUT US */}
          {/* ======================================= */}
          <article className="mb-20 border-b border-line pb-16">
            <header className="mb-10">
              <span className="inline-block text-eyebrow font-semibold tracking-[0.08em] uppercase text-forest font-ui mb-3">
                Institution Overview
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink font-heading mb-6">
                About Us
              </h1>
              <p className="text-slate-1 text-lg sm:text-xl leading-relaxed font-body">
                AHRO Institute is an innovative higher education and research institution dedicated to advancing excellence in health sciences education, scientific research, and global health innovation.
              </p>
            </header>

            <div className="space-y-10">
              {/* Introducing AHRO Institute */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Introducing AHRO Institute
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  Based in Stevenage, Hertfordshire, United Kingdom, the Institute brings together education, research, healthcare, technology, and community engagement to develop solutions for some of the world&apos;s most pressing health challenges.
                </p>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body">
                  Guided by our vision of "One Institute, Four Continents," AHRO Institute is building an international network of academic, healthcare, research, and industry partnerships to develop skilled professionals, researchers, and leaders capable of improving health outcomes worldwide.
                </p>
              </section>

              {/* Our Academic Excellence */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Our Academic Excellence
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  Through its specialised academic schools, the Institute delivers undergraduate, postgraduate, doctoral, fellowship, and professional development programmes across a wide range of disciplines, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-5 list-disc text-slate-1 text-base sm:text-lg font-body">
                  <li>Infectious Diseases</li>
                  <li>Clinical Research</li>
                  <li>Public Health and Clinical Bioinformatics</li>
                  <li>Nursing and Midwifery</li>
                  <li>Pharmaceutical Sciences</li>
                  <li>Healthcare Management</li>
                  <li>Clinical Nutrition</li>
                  <li>Veterinary Sciences</li>
                  <li>Non-Communicable Diseases</li>
                </ul>
              </section>

              {/* Our Research Mission */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Our Research Mission
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  Our research mission focuses on translating scientific discoveries into practical solutions through interdisciplinary collaboration in areas such as:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-5 list-disc text-slate-1 text-base sm:text-lg font-body">
                  <li>Emerging Infectious Diseases</li>
                  <li>Antimicrobial Resistance</li>
                  <li>Precision Medicine</li>
                  <li>Biotechnology</li>
                  <li>Digital Health</li>
                  <li>Clinical Trials</li>
                  <li>One Health</li>
                  <li>Global Health Security</li>
                </ul>
              </section>

              {/* Our Commitment */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Our Commitment
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  AHRO Institute is committed to nurturing a culture of excellence, innovation, integrity, and inclusion.
                </p>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body">
                  We empower students, researchers, healthcare professionals, and communities through high-quality education, impactful research, and meaningful global partnerships that address real-world health needs.
                </p>
                <p className="mt-4 text-slate-1 text-base sm:text-lg leading-relaxed font-body">
                  By connecting knowledge, innovation, and global collaboration, AHRO Institute aims to become a leading international centre for health sciences education and research, contributing to a healthier, more resilient, and sustainable world.
                </p>
              </section>
            </div>
          </article>

          {/* ======================================= */}
          {/* SECTION 2: SUPPORT AHRO INSTITUTE */}
          {/* ======================================= */}
          <article id="support">
            <header className="mb-10">
              <span className="inline-block text-eyebrow font-semibold tracking-[0.08em] uppercase text-forest font-ui mb-3">
                Global Partnerships
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink font-heading mb-6">
                Support AHRO Institute
              </h1>
              <p className="text-slate-1 text-lg sm:text-xl leading-relaxed font-body">
                At AHRO Institute, we believe that meaningful progress in global health is achieved through collaboration. Every partnership and contribution helps expand access to quality education, accelerate scientific research, strengthen healthcare systems, and create lasting impact for communities around the world.
              </p>
            </header>

            <div className="space-y-10">
              {/* Why Your Support Matters */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Why Your Support Matters
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body">
                  Your support enables us to develop innovative academic programmes, advance research, provide scholarships and professional training, strengthen community health initiatives, and build sustainable partnerships that improve health outcomes globally.
                </p>
              </section>

              {/* Ways to Support */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Ways to Support
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  There are many ways to partner with us and contribute to our mission, including:
                </p>
                <ul className="grid grid-cols-1 gap-3 pl-5 list-disc text-slate-1 text-base sm:text-lg font-body">
                  <li>Philanthropic donations and grants</li>
                  <li>Research funding partnerships</li>
                  <li>Scholarship and student support programmes</li>
                  <li>Corporate and institutional partnerships</li>
                  <li>Sponsorship of education, conferences, and community initiatives</li>
                  <li>Support for innovation and healthcare research projects</li>
                </ul>
              </section>

              {/* Together, We Create Impact */}
              <section className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-ink font-heading">
                  Together, We Create Impact
                </h2>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-4">
                  Whether through generous giving, strategic partnerships, or shared expertise, every contribution advances our vision of "One Institute, Four Continents."
                </p>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body">
                  Together, we can empower the next generation of healthcare professionals, researchers, and leaders while transforming knowledge into solutions that improve lives worldwide.
                </p>
              </section>

              {/* Call to Action Footer Box */}
              <section className="bg-paper p-8 rounded-lg border border-mist text-left">
                <p className="font-bold text-forest uppercase tracking-wider text-sm font-ui mb-3">
                  Become a Partner
                </p>
                <p className="text-slate-1 text-base sm:text-lg leading-relaxed font-body mb-6">
                  Support AHRO Institute and become part of a global movement advancing education, research, innovation, and healthier communities.
                </p>
                <div className="space-y-4">
                  <p className="text-slate-1 text-sm sm:text-base font-body">
                    To support us, click the link below.
                  </p>
                  <a
                    href="mailto:partnerships@ahro.org?subject=Supporting%20AHRO%20Institute"
                    className="btn-primary inline-flex items-center justify-center font-ui text-sm font-semibold transition-transform duration-200 hover:scale-102 cursor-pointer no-underline"
                  >
                    Contact Partnerships Office →
                  </a>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
