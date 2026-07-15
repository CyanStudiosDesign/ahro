export { HowToApply } from "./HowToApply";

export const defaultApplicationSteps = [
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

export const defaultApplyPageData = {
  heading: "How to apply to AHRO Institute",
  subheading: "Follow these simple steps to apply and take the first step toward your future at AHRO Institute.",
};
