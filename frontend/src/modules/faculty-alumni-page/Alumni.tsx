import React from 'react';
import { Mail, Globe, GraduationCap, ArrowRight } from 'lucide-react';
import { alumniMembers } from './index';

// Filled square LinkedIn icon matching the image design
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "w-[18px] h-[18px] text-slate-1 hover:text-forest transition-colors"}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z" />
  </svg>
);

export const AlumniSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ink tracking-tight">
            Our Alumni Network
          </h2>
          <h3 className="mt-3 text-lg font-bold text-slate-2">
            Achievers. Innovators. Change-makers.
          </h3>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-start">
          {/* Alumni Items */}
          {alumniMembers.map((member, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-5">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover flex-shrink-0"
                style={{ borderRadius: 'var(--radius-lg)' }}
              />
              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                <div>
                  <h3 className="text-base sm:text-[19px] font-bold text-ink leading-snug truncate">
                    {member.name}
                  </h3>
                  <h5 className="text-sm font-bold text-forest mt-0.5 truncate">
                    {member.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-1 mt-1.5 truncate">
                    {member.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-1 truncate">
                    {member.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-3 mt-1.5 truncate">
                    {member.degree}
                  </p>
                </div>

                {/* Social / Contact Links */}
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={member.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-[18px] h-[18px] text-slate-2 hover:text-forest transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email || '#'}`}
                    aria-label="Email"
                    className="text-slate-2 hover:text-forest transition-colors"
                  >
                    <Mail className="w-[18px] h-[18px]" />
                  </a>
                  <a
                    href={member.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="text-slate-2 hover:text-forest transition-colors"
                  >
                    <Globe className="w-[18px] h-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* "Stay Connected" Card */}
          <div 
            className="bg-paper/80 p-6 flex items-start gap-4"
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            <div 
              className="w-16 h-16 bg-forest/10 flex items-center justify-center text-forest flex-shrink-0"
              style={{ borderRadius: 'var(--radius-md)' }}
            >
              <GraduationCap className="w-9 h-9" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-ink">
                Stay Connected
              </h3>
              <p className="text-xs sm:text-sm text-slate-1 mt-1 leading-snug">
                Join our global community of alumni and continue making a difference.
              </p>
              <a
                href="#connect"
                className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest hover:text-meadow transition-colors"
              >
                Update your profile or connect with us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;