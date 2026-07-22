import { defaultApplicationSteps, defaultApplyPageData } from "./index";

const cardClassName = [
  "min-w-0 border-t border-line px-page py-card-y",
  "sm:min-h-card sm:px-card-x sm:even:border-l",
  "lg:[&:nth-child(3n+1)]:border-l-0",
  "lg:[&:not(:nth-child(3n+1))]:border-l",
  "text-center flex flex-col items-center justify-center",
].join(" ");

const cardHeadingClassName =
  "mb-3 text-card-title font-strong leading-card tracking-card-title text-ink sm:mb-4 text-center";

const cardBodyClassName =
  "max-w-copy-mobile text-body leading-body text-muted sm:max-w-copy mx-auto text-center";

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

  const isPartnership = pageHeading.toLowerCase().includes("partnership");

  const navItems = isPartnership
    ? ["ACADEMIC", "RESEARCH", "HEALTHCARE", "INDUSTRY", "GLOBAL HEALTH"]
    : steps.map((s) => s.title);

  return (
    <section
      className="min-h-svh overflow-hidden bg-surface text-ink sm:px-page"
      aria-labelledby="how-to-apply-title"
    >
      <div className="mx-auto w-full max-w-wide pb-0 pt-card-y sm:pb-16 lg:pt-card-x">
        <header className="px-page text-left sm:px-0 sm:text-center">
          <h2
            id="how-to-apply-title"
            className="text-display-mobile font-strong leading-display tracking-display sm:text-display"
          >
            {isPartnership ? (
              <>
                Partnership opportunities
                <br />
                with <span className="text-brand">AHRO</span>
              </>
            ) : pageHeading.includes("AHRO Institute") ? (
              <>
                How to apply to
                <span className="block text-brand">AHRO Institute</span>
              </>
            ) : (
              <>{pageHeading}</>
            )}
          </h2>

          {isPartnership && (
            <p className="mx-auto mt-6 max-w-2xl text-[16px] md:text-[18px] leading-[1.6] text-muted text-left sm:text-center">
              {introText}
            </p>
          )}

          <nav
            className="-mx-page mt-header-gap mb-12 overflow-x-auto px-page text-ink scrollbar-none [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0"
            aria-label="Application process"
          >
            <ol className="flex w-max min-w-full list-none items-center justify-start lg:justify-center">
              {navItems.map((item, index) => (
                <li
                  className="flex items-center whitespace-nowrap text-progress font-semibold leading-progress text-muted uppercase tracking-wider"
                  key={item}
                >
                  <span className={isPartnership ? "text-ink text-[11px]" : ""}>{item}</span>
                  {index < navItems.length - 1 && (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className={`${cardClassName} border-t-0 sm:border-t-0 lg:border-t-0`}>
            <h2 className={cardHeadingClassName}>
              {isPartnership ? "Partnership Opportunities" : `${steps.length} Simple Steps`}
            </h2>
            <p
              className={`${cardBodyClassName} sm:max-w-copy-intro lg:max-w-copy-intro`}
            >
              {isPartnership ? defaultApplyPageData.cardDescription : introText}
            </p>
          </div>

          {steps.map((step, index) => {
            const domIndex = index + 1; // title card is index 0
            const isFirstRowLG = domIndex < 3;
            const isFirstRowSM = domIndex < 2;

            const displayTitle = isPartnership && index < 7 
              ? `${index + 1}. ${step.title}` 
              : step.title;

            return (
              <article
                className={`${cardClassName} ${isFirstRowLG ? "lg:border-t-0" : ""} ${isFirstRowSM ? "sm:border-t-0" : ""}`}
                key={step.title}
              >
                <h2 className={cardHeadingClassName}>
                  {!isPartnership && <span aria-hidden="true">{index + 1}. </span>}
                  {displayTitle}
                </h2>
                <p className={cardBodyClassName}>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}