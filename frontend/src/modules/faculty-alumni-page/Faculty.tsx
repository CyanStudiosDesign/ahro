import React from "react";
import { Mail, Globe, Users, ArrowRight } from "lucide-react";
import { facultyMembers } from "./index";

// Custom SVG Linkedin Icon to match Lucide style and avoid dependency version issues
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    height="800px"
    width="800px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 382 382"
    xmlSpace="preserve"
  >
    {/* SVG paths go here */}
    <path
      fill="#0077B7"
      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
    />
  </svg>
);

export const FacultySection: React.FC = () => {
  return (
    <section className="bg-slate-50/30 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="w-full text-center mb-12 flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-ink tracking-tight">
            Meet the Faculty
          </h2>
          <h4 className="mt-4 text-xl font-bold text-forest">
            Expert educators. Research leaders. Mentors.
          </h4>
          <p className="mt-4 text-base text-slate-2 leading-relaxed max-w-2xl mx-auto">
            Our faculty members bring global experience, academic excellence,
            and a passion for advancing health and education.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Faculty Cards */}
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-line shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-5 justify-between hover:shadow-md transition-shadow duration-300 "
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div>
                <div className="flex items-start gap-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-[19px] font-bold text-ink leading-snug truncate">
                      {member.name}
                    </h3>
                    <h5 className="text-sm font-bold text-forest mt-1 leading-snug line-clamp-2 min-h-5">
                      {member.title}
                    </h5>
                    <p className="text-sm text-slate-1 mt-1 truncate">
                      {member.department}
                    </p>
                    <p className="text-sm text-slate-3 truncate">
                      {member.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social / Contact Links */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${member.email || "#"}`}
                  aria-label="Email"
                  className="p-2.5 text-slate-1 bg-slate-50 border border-line hover:bg-forest/5 hover:text-forest hover:border-forest/20 rounded-md transition-all duration-200"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>
                <a
                  href={member.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 text-slate-1 bg-slate-50 border border-line hover:bg-forest/5 hover:text-forest hover:border-forest/20 rounded-md transition-all duration-200"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <LinkedinIcon className="w-[18px] h-[18px]" />
                </a>
                <a
                  href={member.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="p-2.5 text-slate-1 bg-slate-50 border border-line hover:bg-forest/5 hover:text-forest hover:border-forest/20 rounded-md transition-all duration-200"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <Globe className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          ))}

          {/* "We are hiring!" Card */}
          <div
            className="bg-paper/40 rounded-lg p-8 border border-line flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-[240px]"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink">We are hiring!</h3>
            <p className="text-sm text-slate-1 mt-2 max-w-[240px]">
              Join our team of dedicated educators and researchers.
            </p>
            <a
              href="#open-positions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-meadow transition-colors"
            >
              View open positions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-slate-2 mt-12 leading-relaxed max-w-2xl mx-auto">
          Learn more about our faculty and their contributions to research,
          education, and global health innovation.
        </p>
      </div>
    </section>
  );
};

export default FacultySection;
