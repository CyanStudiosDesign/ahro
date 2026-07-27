"use client";

import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

export interface Nav1Props {
  activeTab?: string;
}

export const Nav1: React.FC<Nav1Props> = ({ activeTab: initialActive = 'Home' }) => {
  const [activeTab, setActiveTab] = useState(initialActive);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Schools', href: '/schools' },
    // { name: 'Research', href: '#research' },
    { name: 'Faculty & Alumni', href: '/affiliates' },
    { name: 'Community', href: '/community' },
    // { name: 'News', href: '#news' },
    // { name: 'Events', href: '#events' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="relative w-full z-50">
      <div className="sticky w-full flex items-center justify-between px-4 py-4 md:px-8 lg:px-12 max-w-8xl mx-auto">
        
        {/* 1. Brand / Logo Area */}
        <Link href="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative flex items-center justify-center h-12 w-auto shrink-0">
            <img 
              src="/content/Logo.png" 
              alt="AHRO Logo" 
              className="h-20 drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-none font-heading">
              AHRO
            </span>
            <span className="text-[11px] font-normal italic text-slate-200 mt-0.5 tracking-wide font-sans">
              Ocean of Knowledge
            </span>
          </div>
        </Link>

        {/* 2. Floating Center Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 rounded-full bg-white px-6 py-3 shadow-xl border border-white/20 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const isInternalPage = item.href.startsWith('/');
            
            const linkClass = `text-[14px] xl:text-[15px] font-semibold transition-colors duration-150 font-sans whitespace-nowrap ${
              isActive
                ? 'text-[#2D5016]'
                : 'text-[#191C1E] hover:text-[#2D5016]'
            }`;

            if (isInternalPage) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={linkClass}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={linkClass}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* 3. Right Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#programs"
            className="group hidden sm:flex items-center gap-2 rounded-full bg-[#1B5E20] hover:bg-[#144718] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-102"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col space-y-2 animate-fade-in-up z-50 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const isInternalPage = item.href.startsWith('/');
            const itemClass = `text-base font-semibold py-2 px-4 rounded-xl transition-colors ${
              isActive
                ? 'bg-[#F7FFF1] text-[#2D5016]'
                : 'text-slate-800 hover:bg-gray-50 hover:text-[#2D5016]'
            }`;

            if (isInternalPage) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={itemClass}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className={itemClass}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-gray-100">
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-md"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav1;