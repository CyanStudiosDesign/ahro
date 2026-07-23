"use client";

import React from "react";
import { researchImpactData } from "./index";

export default function ResearchImpact() {
  const { title, titleAccent, titleSuffix, description, items } =
    researchImpactData;

  return (
    <div className="w-full max-w-7xl mx-auto mt-20 pt-20 font-sans text-[#1A201C]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 text-left">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#111] mb-6">
            {title} <span className="text-[#2E472A]">{titleAccent}</span>{" "}
            {titleSuffix}
          </h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex gap-6 md:gap-12 py-8 ${
                idx === 0 ? "border-t border-[#E5E9E6]" : ""
              } border-b border-[#E5E9E6]`}
            >
              <div className="shrink-0 text-sm md:text-base font-bold text-[#2E472A] pt-1">
                {item.id}
              </div>

              <div className="flex-1">
                <h4 className="text-lg md:text-xl font-bold text-[#111] mb-2">
                  {item.title}
                </h4>
                
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
