const applicationSteps = [
  {
    title: "Choose Program",
    description:
      "Explore our academic programs and choose the one that best aligns with your interests and career goals.",
  },
  {
    title: "Register",
    description:
      "Create an account using your email address and basic details to get started with your application.",
  },
  {
    title: "Fill Application",
    description:
      "Complete the online application form with your academic, personal and contact information.",
  },
  {
    title: "Upload Documents",
    description:
      "Upload the required documents including transcripts, ID proof, photograph and other certificates.",
  },
  {
    title: "Review & Selection",
    description:
      "Our admissions team will review your application. Shortlisted candidates may be called for interview or test.",
  },
  {
    title: "Offer & Enrollment",
    description:
      "Receive your offer letter via email. Confirm your admission by completing the enrollment process.",
  },
  {
    title: "Welcome to AHRO",
    description:
      "Congratulations! You are now part of the AHRO community. Get ready for an inspiring academic journey.",
  },
] as const;

const cardClassName = [
  "min-w-0 border-t border-line px-page py-card-y",
  "sm:min-h-card sm:px-card-x sm:even:border-l",
  "lg:[&:nth-child(3n+1)]:border-l-0",
  "lg:[&:not(:nth-child(3n+1))]:border-l",
].join(" ");

const cardHeadingClassName =
  "mb-3 text-card-title font-strong leading-card tracking-card-title text-ink sm:mb-4";

const cardBodyClassName =
  "max-w-copy-mobile text-body leading-body text-muted sm:max-w-copy";

export function HowToApply() {
  return (
    <section
      className="min-h-svh overflow-hidden bg-surface text-ink sm:px-page"
      aria-labelledby="how-to-apply-title"
    >
      <div className="mx-auto w-full max-w-content pb-0 pt-card-y sm:pb-16 lg:pt-card-x">
        <header className="px-page text-left sm:px-0 sm:text-center">
          <h1
            id="how-to-apply-title"
            className="text-display-mobile font-strong leading-display tracking-display sm:text-display"
          >
            How to apply to
            <span className="block text-brand">AHRO Institute</span>
          </h1>

          <nav
            className="-mx-page mt-header-gap mb-12 overflow-x-auto px-page text-ink [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
            aria-label="Application process"
          >
            <ol className="flex w-max min-w-full list-none items-center justify-start lg:justify-center">
              {applicationSteps.map((step, index) => (
                <li
                  className="flex items-center whitespace-nowrap text-progress font-semibold leading-progress"
                  key={step.title}
                >
                  {step.title}
                  {index < applicationSteps.length - 1 && (
                    <span
                      className="mx-3 font-normal text-muted"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:after:min-h-card lg:after:border-t lg:after:border-l lg:after:border-line lg:after:content-['']">
          <div className={cardClassName}>
            <h2 className={cardHeadingClassName}>7 Simple Steps</h2>
            <p
              className={`${cardBodyClassName} sm:max-w-copy-intro lg:max-w-copy-intro`}
            >
              Follow these simple steps to apply and take the first step toward
              your future at AHRO Institute.
            </p>
          </div>

          {applicationSteps.map((step, index) => (
            <article className={cardClassName} key={step.title}>
              <h2 className={cardHeadingClassName}>
                <span aria-hidden="true">{index + 1}.</span> {step.title}
              </h2>
              <p className={cardBodyClassName}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
