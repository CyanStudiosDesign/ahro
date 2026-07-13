import Image from "next/image";

const therapeuticAreas = [
  "Drug Discovery",
  "Vaccines",
  "Infectious Disease",
  "Mental Health",
  "Oncology",
  "Obesity",
  "Pain",
  "Cardiovascular",
  "Metabolic",
] as const;

function PlayIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M7 4.5v15L19 12 7 4.5Z" fill="currentColor" />
    </svg>
  );
}

export function TherapeuticAreas() {
  return (
    <section
      id="research"
      className="border-t border-ink bg-surface px-section py-12 text-ink md:pt-14 md:pb-10"
      aria-labelledby="therapeutic-areas-title"
    >
      <div className="mx-auto max-w-wide">
        <header className="grid items-start gap-6 md:grid-cols-therapeutic-header md:gap-16">
          <h2
            id="therapeutic-areas-title"
            className="max-w-therapeutic-title text-section-title font-strong leading-section-title tracking-section-title"
          >
            Driving High-Impact <span className="text-brand">Health</span>
            <br />
            <span className="text-brand">Research</span> Across The Globe
          </h2>

          <p className="max-w-therapeutic-intro text-feature-copy leading-feature-copy text-copy md:pt-1">
            At African Health Research Organisation, we are dedicated to
            driving high-impact clinical research that addresses critical
            global health challenges.
          </p>
        </header>

        <div className="mt-5 grid grid-cols-1 items-start gap-8 md:mt-7 md:grid-cols-2 md:gap-6 xl:mt-5 xl:grid-cols-therapeutic xl:gap-8">
          <div className="order-2 md:order-2 xl:order-1 xl:pt-8">
            <p className="max-w-therapeutic-copy text-feature-copy leading-feature-copy text-copy">
              Our Centre is a resource for researchers, academic professionals,
              students, and organizations working in the field of global
              health.
            </p>

            <h3 className="mt-8 text-feature-title font-strong leading-card tracking-card-title md:mt-9">
              Therapeutic Areas
            </h3>

            <ul className="mt-7 flex max-w-therapeutic-tags flex-wrap gap-x-4 gap-y-3">
              {therapeuticAreas.map((area) => (
                <li
                  className="rounded-full border border-outline bg-tint px-3.5 py-1 text-tag leading-none"
                  key={area}
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 aspect-therapeutic overflow-hidden rounded-3xl md:order-1 md:col-span-2 xl:order-2 xl:col-span-1">
            <Image
              className="object-cover"
              src="/content/A4.webp"
              alt="A healthcare professional caring for children and families"
              fill
              sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) calc(100vw - 5rem), 43vw"
              priority
            />
          </div>

          <article
            id="video-highlights"
            className="order-3 md:order-3 xl:order-3"
          >
            <button
              className="group relative block aspect-video-card w-full overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              type="button"
              aria-label="Play video highlight"
            >
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                src="/content/A1.webp"
                alt="A clinician examining a young child"
                fill
                sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) 50vw, 25vw"
              />
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-video-play place-items-center rounded-full bg-surface text-ink shadow-media transition-transform duration-300 group-hover:scale-105">
                  <PlayIcon className="size-7 translate-x-px" />
                </span>
              </span>
            </button>

            <h3 className="mt-5 text-feature-title font-strong leading-card tracking-card-title">
              Video Highlights
            </h3>
            <p className="mt-3 max-w-video-copy text-feature-copy leading-feature-copy text-copy">
              At African Health Research Organization, we are dedicated to
              driving high-impact clinical research that addresses critical
              global health challenges.
            </p>

            <div className="mt-7 flex w-full max-w-video-action items-stretch">
              <button
                className="min-h-video-action-height flex-1 rounded-full border-2 border-ink bg-tint px-6 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                type="button"
              >
                Watch Documentation
              </button>
              <button
                className="-ml-px grid aspect-square min-h-video-action-height place-items-center rounded-full border-2 border-ink bg-tint transition-colors hover:bg-surface focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                type="button"
                aria-label="Play documentation"
              >
                <PlayIcon className="size-6 translate-x-px" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
