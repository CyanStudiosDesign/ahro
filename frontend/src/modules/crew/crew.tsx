import React from "react";
import { Globe, Link, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  socials?: {
    twitter?: string;
    github?: string;
    slack?: string;
  };
  isHiringTile?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "David Forren",
    role: "Founder / CEO",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "2",
    name: "Amil Evara",
    role: "UI/UX Designer",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "3",
    name: "Ebele Egbuna",
    role: "Support Consultant",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "4",
    name: "Maria Powers",
    role: "Director of Sales",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "5",
    name: "Delia Pawelke",
    role: "Front-end Developer",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "6",
    name: "Tom Lowry",
    role: "UI/UX Designer",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "7",
    name: "Louise Donadieu",
    role: "Support Consultant",
    avatar: "/content/A4.webp",
    socials: { twitter: "#", github: "#", slack: "#" },
  },
  {
    id: "9",
    name: "We are hiring!",
    role: "Check out / Careers",
    avatar: "/content/A4.webp",
    isHiringTile: true,
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="bg-canvas py-16 px-6 md:py-24 md:px-12 lg:px-24 text-ink font-sans">
      <div className="max-w-wide mx-auto">
        
        {/* Title */}
        <header className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <p className="inline-flex rounded-full border border-line bg-tint px-4 py-1.5 text-xs font-semibold leading-none uppercase tracking-wider text-brand">
            Our Crew
          </p>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            Meet The Minds Behind <br />
            Our Global <span className="text-brand">Health Impact.</span>
          </h2>
          <p className="mt-4 text-muted leading-relaxed text-base">
            A diverse collective of researchers, technologists, and health innovators dedicated to solving Africa&apos;s most pressing challenges.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => {
            const delayClass = `animation-delay-${((index % 4) + 1) * 100}`;

            if (member.isHiringTile) {
              return (
                <div
                  key={member.id}
                  className={`relative flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-brand/30 bg-tint rounded-3xl shadow-sm hover:shadow-md hover:border-brand transition-all duration-300 group min-h-[300px] animate-fade-in-up ${delayClass}`}
                >
                  <div className="w-16 h-16 rounded-full bg-white border border-brand/10 flex items-center justify-center text-brand mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted mb-6">
                    Join our mission and make a difference.
                  </p>
                  <a
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:text-brand-deep transition-colors"
                    href="/careers"
                  >
                    {member.role}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            }

            return (
              <div
                key={member.id}
                className={`relative flex flex-col items-center text-center p-6 bg-surface border border-line rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in-up ${delayClass}`}
              >
                {/* Avatar wrapper */}
                <div className="relative size-28 rounded-full overflow-hidden mb-5 border-4 border-tint group-hover:border-brand/20 transition-all duration-500 shadow-inner">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="112px"
                  />
                </div>

                {/* Member Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-ink group-hover:text-brand transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand bg-tint px-2.5 py-1 rounded-full inline-block mt-2">
                    {member.role}
                  </p>
                </div>

                {/* Social Links */}
                {member.socials && (
                  <div className="flex items-center justify-center gap-3 mt-auto">
                    {member.socials.twitter && (
                      <a
                        className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-muted hover:text-brand hover:bg-tint transition-all"
                        href={member.socials.twitter}
                        aria-label="Personal Website"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-muted hover:text-brand hover:bg-tint transition-all"
                        href={member.socials.github}
                        aria-label="Code Profile"
                      >
                        <Link className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.slack && (
                      <a
                        className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-muted hover:text-brand hover:bg-tint transition-all"
                        href={member.socials.slack}
                        aria-label="Email Contact"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;