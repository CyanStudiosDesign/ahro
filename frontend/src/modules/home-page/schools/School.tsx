import Image from "next/image";
import { urlFor } from "@/sanity/img";
import {
  defaultSchools,
  defaultSpotlightSchool,
  type SchoolIcon as MockSchoolIcon,
} from "./index";
import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import {
  BodyText,
  Chip,
  Eyebrow,
  SectionHeading,
} from "@/components/ui/design-system";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SchoolIcon({
  icon,
  iconUrl,
}: {
  icon?: string | null;
  iconUrl?: string | null;
}) {
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt="School Icon"
        width={20}
        height={20}
        className="object-contain"
      />
    );
  }

  if (icon) {
    // Dynamic lookup of Lucide Icon component
    const IconComponent = (LucideIcons as any)[icon];
    if (IconComponent) {
      return <IconComponent size={20} className="stroke-[1.7]" />;
    }
  }

  // Fallback to GraduationCap
  return <LucideIcons.GraduationCap size={20} className="stroke-[1.7]" />;
}

interface SchoolData {
  _id: string;
  title: string;
  categoryTag: string;
  icon?: unknown;
  description: string;
  image?: unknown;
}

interface CoursesProps {
  spotlightSchool?: SchoolData;
  gridSchools?: SchoolData[];
  intro?: {
    heading?: string;
    description?: string;
  };
  showViewAllButton?: boolean;
}

export function Courses({
  spotlightSchool,
  gridSchools: propGridSchools,
  intro,
  showViewAllButton = true,
}: CoursesProps) {
  // Determine spotlight school (either featured school in list or fallback)
  const spotlightTitle =
    spotlightSchool?.title || defaultSpotlightSchool.title;
  const spotlightCategory =
    spotlightSchool?.categoryTag || defaultSpotlightSchool.categoryTag;
  const spotlightDesc =
    spotlightSchool?.description || defaultSpotlightSchool.description;

  const spotlightImage = spotlightSchool?.image
    ? urlFor(spotlightSchool.image)?.url()
    : defaultSpotlightSchool.imageUrl;

  // Build grid schools list from Sanity or fallback to mockups
  const gridSchools =
    propGridSchools && propGridSchools.length > 0
      ? propGridSchools.map((s) => ({
            name: s.title,
            label: s.categoryTag,
            description: s.description,
            image: s.image ? urlFor(s.image)?.url() : "/content/A1.webp",
            icon: typeof s.icon === "string" ? s.icon : undefined,
            iconUrl: null,
          }))
      : defaultSchools;

  const suppliedHeading = intro?.heading?.trim();
  const headingText =
    suppliedHeading && suppliedHeading.toLowerCase() !== "nothing"
      ? suppliedHeading
      : "Explore Our Schools Of Global Health Research.";

  return (
    <section
      id="programs"
      className="flex min-h-svh items-center bg-white px-5 py-16 text-ink md:px-10 lg:px-20"
      aria-labelledby="courses-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center animate-fade-in-up">
          <Eyebrow>
            Schools &amp; Programmes
          </Eyebrow>
          <SectionHeading
            id="courses-title"
            className="mx-auto mt-6 max-w-3xl"
          >
            {headingText.includes("Global Health Research") ? (
              <>
                Explore Our Schools Of
                <br />
                Global <span className="text-brand">Health Research.</span>
              </>
            ) : (
              headingText
            )}
          </SectionHeading>
        </header>

        {true && (
          <article className="mt-10 grid overflow-hidden rounded-3xl bg-surface shadow-course md:min-h-course-feature md:grid-cols-2 animate-fade-in-up animation-delay-100 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="relative aspect-course-feature-mobile md:aspect-auto">
              {spotlightImage && (
                <Image
                  className="object-cover object-center"
                  src={spotlightImage}
                  alt="Featured academic school spotlight"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2.5rem), 50vw"
                />
              )}
            </div>

            <div className="flex flex-col justify-center px-6 py-9 md:px-10 md:py-8">
              <Eyebrow className="px-3 py-1.5">
                {spotlightCategory}
              </Eyebrow>
              <h3 className="mt-6 font-heading text-h3 font-semibold leading-[1.25]">
                {spotlightTitle}
              </h3>
              <BodyText className="mt-4 max-w-course-feature-copy">
                {spotlightDesc}
              </BodyText>
              <p className="mt-9 flex items-center gap-2 text-course-meta text-muted">
                <span
                  className="size-1.5 rounded-full bg-ink"
                  aria-hidden="true"
                />
                5 min read
              </p>
            </div>
          </article>
        )}

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridSchools.map((school, index) => (
            <article
              className="cursor-pointer group relative isolate aspect-course-card overflow-hidden rounded-3xl bg-copy shadow-course animate-fade-in-up transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${200 + (index + 1) * 100}ms` }}
              key={school.name}
            >
              {school.image && (
                <Image
                  className="-z-20 object-cover"
                  src={school.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1023px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 -z-10 bg-course-overlay" />

              <div className="flex h-full flex-col justify-between p-5 text-surface md:p-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-course-icon shrink-0 place-items-center rounded-full bg-tint text-brand">
                    <span className="size-5 flex items-center justify-center">
                      <SchoolIcon icon={school.icon} iconUrl={school.iconUrl} />
                    </span>
                  </span>
                  <Chip className="border-0 bg-paper px-3 py-1.5 text-eyebrow uppercase tracking-[0.08em]">
                    {school.label}
                  </Chip>
                </div>

                <div>
                  <h3 className="max-w-course-card-title text-course-card-title font-medium leading-card">
                    {school.name}
                  </h3>
                  <p className="mt-4 max-w-course-card-copy font-body text-[14px] leading-[1.6] text-white">
                    {school.description}
                  </p>
                  <button
                    className="mt-7 grid size-course-action place-items-center rounded-full bg-tint text-brand transition-transform group-hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
                    type="button"
                    aria-label={`Explore ${school.name}`}
                  >
                    <span className="size-5">
                      <ArrowIcon />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-12 flex justify-start">
            <Link
              href="/schools"
              className="inline-flex items-center gap-2 rounded-pill border border-forest bg-white px-6 py-3 font-ui text-body font-semibold text-forest transition-colors hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              View All Courses
              <ArrowUpRight size={20} strokeWidth={1.8} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
