import { defaultApplicationSteps, defaultApplyPageData } from "./index";

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

interface HowToApplyProps {
  data?: {
    pageIntroGroup?: {
      heading?: string;
      subheading?: string;
    };
    steps?: Array<{
      stepNumber: number;
      title: string;
      description: string;
    }>;
  };
}

export function HowToApply({ data }: HowToApplyProps) {
  const pageHeading = data?.pageIntroGroup?.heading || defaultApplyPageData.heading;
  const introText = data?.pageIntroGroup?.subheading || defaultApplyPageData.subheading;
  const steps = data?.steps && data.steps.length > 0
    ? data.steps.map((step) => ({
        title: step.title,
        description: step.description,
      }))
    : defaultApplicationSteps;

  return (
    <section
      className="min-h-svh overflow-hidden bg-surface text-ink sm:px-page"
      aria-labelledby="how-to-apply-title"
    >
      <div className="mx-auto w-full max-w-content pb-0 pt-card-y sm:pb-16 lg:pt-card-x">
        <header className="px-page text-left sm:px-0 sm:text-center">
          <h2
            id="how-to-apply-title"
            className="text-display-mobile font-strong leading-display tracking-display sm:text-display"
          >
            {pageHeading.includes("AHRO Institute") ? (
              <>
                How to apply to
                <span className="block text-brand">AHRO Institute</span>
              </>
            ) : (
              <>
                {pageHeading}
              </>
            )}
          </h2>

          <nav
            className="-mx-page mt-header-gap mb-12 overflow-x-auto px-page text-ink scrollbar-none [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
            aria-label="Application process"
          >
            <ol className="flex w-max min-w-full list-none items-center justify-start lg:justify-center">
              {steps.map((step, index) => (
                <li
                  className="flex items-center whitespace-nowrap text-progress font-semibold leading-progress"
                  key={step.title}
                >
                  {step.title}
                  {index < steps.length - 1 && (
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
            <h2 className={cardHeadingClassName}>{steps.length} Simple Steps</h2>
            <p
              className={`${cardBodyClassName} sm:max-w-copy-intro lg:max-w-copy-intro`}
            >
              {introText}
            </p>
          </div>

          {steps.map((step, index) => (
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