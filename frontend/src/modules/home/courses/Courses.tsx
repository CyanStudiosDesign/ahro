import Image from "next/image";
import { urlFor } from "@/sanity/img";
import { defaultSchools, defaultSpotlightSchool, type SchoolIcon } from "./index";

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

function SchoolIcon({ icon, iconUrl }: { icon: SchoolIcon; iconUrl?: string | null }) {
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

  if (icon === "heart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.8 8.2c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.6 4.6 0 0 1 12 5.4a4.6 4.6 0 0 1 8.8 2.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "leaf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19.5 4.5C11.8 4.7 6.8 8 6.8 13a5.2 5.2 0 0 0 9.8 2.5c2-3.5 2.9-11 2.9-11Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19c2.5-4.6 5.6-7.3 9.5-9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "flask") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 3h6m-1 0v5.2l4.8 8.4A2.3 2.3 0 0 1 16.8 20H7.2a2.3 2.3 0 0 1-2-3.4L10 8.2V3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.5 15h9" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  return null;
}

interface CoursesProps {
  schools?: Array<{
    _id: string;
    title: string;
    categoryTag: string;
    icon?: any;
    description: string;
    isFeatured?: boolean;
    image?: any;
  }>;
}

export function Courses({ schools }: CoursesProps) {
  // Determine spotlight school (either featured school in list or fallback)
  const featuredSchoolFromProps = schools?.find((s) => s.isFeatured);
  const spotlightTitle = featuredSchoolFromProps?.title || defaultSpotlightSchool.title;
  const spotlightCategory = featuredSchoolFromProps?.categoryTag || defaultSpotlightSchool.categoryTag;
  const spotlightDesc = featuredSchoolFromProps?.description || defaultSpotlightSchool.description;
  
  const spotlightImage = featuredSchoolFromProps?.image 
    ? urlFor(featuredSchoolFromProps.image)?.url() 
    : defaultSpotlightSchool.imageUrl;

  // Build grid schools list from Sanity or fallback to mockups
  const gridSchools = schools && schools.length > 0
    ? schools.filter((s) => !s.isFeatured).map((s) => ({
        name: s.title,
        label: s.categoryTag,
        description: s.description,
        image: s.image ? urlFor(s.image)?.url() : "/content/A1.webp",
        icon: "sanity" as SchoolIcon,
        iconUrl: s.icon ? urlFor(s.icon)?.url() : null,
      }))
    : gridSchoolsFallback();

  function gridSchoolsFallback() {
    return defaultSchools;
  }

  return (
    <section
      id="programs"
      className="bg-canvas px-section pt-5 pb-12 text-ink md:pb-16"
      aria-labelledby="courses-title"
    >
      <div className="mx-auto max-w-courses">
        <header className="text-center">
          <p className="inline-flex rounded-full border border-line bg-tint px-3.5 py-1 text-course-label font-semibold leading-none">
            Research &amp; Programmes
          </p>
          <h2
            id="courses-title"
            className="mx-auto mt-9 max-w-courses-title text-courses-title font-medium leading-courses-title tracking-courses-title"
          >
            Explore Our Schools Of
            <br />
            Global <span className="text-brand">Health Research.</span>
          </h2>
        </header>

        <article className="mt-10 grid overflow-hidden rounded-3xl bg-surface shadow-course md:min-h-course-feature md:grid-cols-2">
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
            <p className="w-fit rounded-full bg-tint px-3 py-1.5 text-course-eyebrow font-semibold uppercase leading-none tracking-course-label">
              {spotlightCategory}
            </p>
            <h3 className="mt-6 text-course-feature-title font-strong leading-card tracking-card-title">
              {spotlightTitle}
            </h3>
            <p className="mt-4 max-w-course-feature-copy text-course-copy leading-course-copy text-muted">
              {spotlightDesc}
            </p>
            <p className="mt-9 flex items-center gap-2 text-course-meta text-muted">
              <span className="size-1.5 rounded-full bg-ink" aria-hidden="true" />
              5 min read
            </p>
          </div>
        </article>

        <div className="mt-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridSchools.map((school) => (
            <article
              className="group relative isolate aspect-course-card overflow-hidden rounded-3xl bg-copy shadow-course"
              key={school.name}
            >
              {school.image && (
                <Image
                  className="-z-20 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
                  <span className="rounded-full bg-tint px-3 py-1.5 text-course-eyebrow font-medium uppercase leading-none tracking-course-label text-copy">
                    {school.label}
                  </span>
                </div>

                <div>
                  <h3 className="max-w-course-card-title text-course-card-title font-medium leading-card">
                    {school.name}
                  </h3>
                  <p className="mt-4 max-w-course-card-copy text-course-copy leading-course-copy text-surface/75">
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
      </div>
    </section>
  );
}


