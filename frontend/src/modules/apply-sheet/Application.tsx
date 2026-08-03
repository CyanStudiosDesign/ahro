import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Course Chip Options
const COURSE_OPTIONS = [
  "Computer Science",
  "Data Science & AI",
  "Business Administration",
  "Cybersecurity",
  "Mechanical Engineering",
  "Biotechnology",
  "Design & Creative Media"
];

// Qualification Options
const QUALIFICATION_OPTIONS = [
  "High School (12th Grade)",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Other"
];

interface CollegeApplicationFormProps {
  contactEmail?: string;
  onSubmitSuccess?: (data: any) => void;
}

export default function CollegeApplicationForm({
  contactEmail = "admissions@college.edu",
  onSubmitSuccess
}: CollegeApplicationFormProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    course: "",
    qualification: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Field change handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleCourseSelect = (course: string) => {
    setFormData((prev) => ({ ...prev, course }));
    if (errors.course) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.course;
        return next;
      });
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.qualification) newErrors.qualification = "Qualification is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      if (onSubmitSuccess) {
        onSubmitSuccess(formData);
      }
      alert("Application Submitted Successfully!");
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full overflow-y-auto px-2 py-4"
    >
      <div className="space-y-8 mt-2">
        {/* Headline and Caption */}
        <div>
          <h2 className="text-4xl font-bold font-heading tracking-tight leading-[1.1] text-black">
            Hey! Tell us <br />
            all the things.
          </h2>
          <p className="mt-3 text-neutral-500 text-sm font-body leading-relaxed">
            Share your academic aspirations with us. We will get back to you shortly to guide you through the next steps.
          </p>
        </div>

        {/* Inputs Grid */}
        <div className="space-y-6">
          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-black tracking-wider uppercase">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Jane Doe"
                className={cn(
                  "w-full px-5 py-4 rounded-[20px] bg-neutral-50 border border-neutral-100 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white transition-all",
                  errors.fullName && "border-red-500 ring-2 ring-red-100"
                )}
              />
              {errors.fullName && (
                <span className="text-xs text-red-500 font-medium">{errors.fullName}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-black tracking-wider uppercase">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jane@example.com"
                className={cn(
                  "w-full px-5 py-4 rounded-[20px] bg-neutral-50 border border-neutral-100 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white transition-all",
                  errors.email && "border-red-500 ring-2 ring-red-100"
                )}
              />
              {errors.email && (
                <span className="text-xs text-red-500 font-medium">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Row 2: Mobile Number & Highest Qualification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-black tracking-wider uppercase">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className={cn(
                  "w-full px-5 py-4 rounded-[20px] bg-neutral-50 border border-neutral-100 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white transition-all",
                  errors.mobile && "border-red-500 ring-2 ring-red-100"
                )}
              />
              {errors.mobile && (
                <span className="text-xs text-red-500 font-medium">{errors.mobile}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-black tracking-wider uppercase">
                Highest Qualification *
              </label>
              <div className="relative">
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full px-5 py-4 rounded-[20px] bg-neutral-50 border border-neutral-100 text-black appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white transition-all cursor-pointer",
                    errors.qualification && "border-red-500 ring-2 ring-red-100"
                  )}
                >
                  <option value="" disabled>Select Qualification</option>
                  {QUALIFICATION_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-neutral-500">
                  ▼
                </div>
              </div>
              {errors.qualification && (
                <span className="text-xs text-red-500 font-medium">{errors.qualification}</span>
              )}
            </div>
          </div>

          {/* Course Chip Selector */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-black tracking-wider uppercase">
              Course Interested In *
            </label>
            <div className="flex flex-wrap gap-2">
              {COURSE_OPTIONS.map((course) => {
                const isSelected = formData.course === course;
                return (
                  <button
                    key={course}
                    type="button"
                    onClick={() => handleCourseSelect(course)}
                    className={cn(
                      "px-4 py-2 rounded-full border text-xs transition-all duration-200 cursor-pointer flex items-center gap-1.5",
                      isSelected
                        ? "bg-black text-white border-black shadow-sm"
                        : "bg-[#f4f7f6] text-neutral-700 border-transparent hover:border-neutral-300 hover:bg-neutral-100"
                    )}
                  >
                    {course}
                    {isSelected && <Check size={12} className="text-white" />}
                  </button>
                );
              })}
            </div>
            {errors.course && (
              <span className="text-xs text-red-500 font-medium block">{errors.course}</span>
            )}
          </div>

          {/* Message Area */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-black tracking-wider uppercase">
              Message / Query
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about your learning goals, background, or any query you have..."
              className="w-full px-5 py-4 rounded-[20px] bg-neutral-50 border border-neutral-100 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:bg-white transition-all resize-none"
            />
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <span className="text-xs text-neutral-400 block font-body">Questions? Write to us</span>
          <a
            href={`mailto:${contactEmail}`}
            className="text-xs font-semibold text-black hover:underline hover:opacity-80 transition-opacity"
          >
            {contactEmail}
          </a>
        </div>

        {/* Premium Glowing Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative inline-flex items-center justify-center p-[3px] rounded-full focus:outline-none select-none cursor-pointer disabled:opacity-50"
        >
          {/* External Glowing Metallic Ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 p-[1.5px] transition-all duration-300 group-hover:scale-[1.02]" />
          
          {/* Button Body */}
          <span className="relative flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-black text-white font-semibold text-xs transition-colors group-hover:bg-neutral-900">
            {isSubmitting ? "Submitting..." : "Submit request"}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </form>
  );
}