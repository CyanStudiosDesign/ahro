import React from 'react';
import { 
  Megaphone, 
  Smile, 
  Microscope, 
  Globe, 
  Wrench, 
  PlusCircle 
} from 'lucide-react';
import {
  communityApproachData,
  communityInitiativesHeader,
  communityInitiativesData,
  InitiativeCard,
} from './index';

const iconMap = {
  'plus-circle': PlusCircle,
  megaphone: Megaphone,
  smile: Smile,
  microscope: Microscope,
  globe: Globe,
  wrench: Wrench,
};

import { urlFor } from '@/sanity/img';

interface CommunityProgramData {
  _id: string;
  title: string;
  category?: string;
  description: string;
  image?: any;
  impactStats?: string;
}

interface CommunityEngagementProps {
  programsData?: CommunityProgramData[];
}

export default function CommunityEngagement({ programsData }: CommunityEngagementProps) {
  const displayInitiatives = programsData && programsData.length > 0
    ? programsData.map((item) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        image: item.image ? urlFor(item.image)?.url() : undefined,
        icon: 'globe' as const,
      }))
    : communityInitiativesData;
  return (
    <div className="w-full bg-surface text-ink font-sans px-4 py-12 md:px-12 lg:px-24 max-w-8xl mx-auto space-y-16">
      
      {/* SECTION 1: HEADER & OUR APPROACH */}
      <section className="space-y-6">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink font-heading">
          Community <span className="text-forest">Engagement</span>
        </h1>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left: Outdoor Classroom Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-line/60">
            <img 
              src={communityApproachData.heroImage} 
              alt={communityApproachData.heroImageAlt} 
              className="w-full h-[360px] md:h-[400px] object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-4 pt-1">
            <span className="inline-block bg-[#1B432C] text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider font-ui">
              {communityApproachData.badge}
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight font-heading">
              {communityApproachData.title} <br /> {communityApproachData.titleHighlight}
            </h2>

            {/* Accent Bar */}
            <div className="w-12 h-[3.5px] bg-meadow rounded-full my-3"></div>

            <p className="text-slate-1 leading-relaxed text-sm md:text-base font-body">
              Community engagement is central to the AHRO Institute&apos;s mission. We do not just conduct research{' '}
              <span className="italic font-medium">for</span> communities; we work with them. 
              By building strong partnerships with local leaders, governments, and civil society organizations, we ensure 
              our work addresses real-world challenges and respects cultural contexts.
            </p>
          </div>
        </div>

        {/* Sub-quote / Subtext */}
        <div className="max-w-2xl mx-auto text-center pt-6">
          <p className="text-slate-2 text-xs md:text-sm mx-auto leading-relaxed font-body">
            {communityApproachData.quoteText}
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR PROGRAMS */}
      <section className="space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-meadow text-xs font-bold uppercase tracking-wider font-ui">
            {communityInitiativesHeader.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink font-heading">
            {communityInitiativesHeader.title}
          </h2>
          <p className="text-slate-2 text-xs md:text-sm max-w-2xl font-body">
            {communityInitiativesHeader.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayInitiatives.map((card: any) => {
            if (card.isWide) {
              return (
                <div 
                  key={card.id}
                  className="lg:col-span-2 bg-[#F8FAF8] rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-6 border border-line/60 hover:shadow-sm transition-all"
                >
                  {card.image && (
                    <img 
                      src={card.image} 
                      alt={card.imageAlt || card.title} 
                      className="w-full sm:w-1/2 h-44 object-cover rounded-xl shrink-0"
                    />
                  )}
                  <div className="space-y-2 sm:w-1/2 pr-2">
                    <h3 className="font-bold text-ink text-base font-heading">{card.title}</h3>
                    <p className="text-slate-2 text-xs leading-relaxed font-body">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            }

            if (card.isDark) {
              return (
                <div 
                  key={card.id}
                  className="bg-[#031B13] text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-sm min-h-[170px]"
                >
                  <h3 className="font-semibold text-lg text-white font-heading">
                    {card.title}
                  </h3>
                  
                  <div className="flex gap-3 pt-6 z-10">
                    {card.buttons?.map((btn: any, index: number) => (
                      <button
                        key={index}
                        className={
                          btn.variant === 'primary'
                            ? 'bg-meadow hover:bg-forest text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer'
                            : 'bg-transparent border border-white/30 hover:border-white text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer'
                        }
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Decorative background shape */}
                  <div className="absolute -bottom-4 -right-4 flex items-center justify-center opacity-15 pointer-events-none">
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                    <div className="w-10 h-10 bg-white rounded-full -ml-4 -mt-4"></div>
                  </div>
                </div>
              );
            }

            const IconComponent = card.icon && (card.icon in iconMap) ? iconMap[card.icon as keyof typeof iconMap] : null;

            return (
              <div 
                key={card.id}
                className="bg-[#F8FAF8] rounded-2xl p-6 flex gap-4 items-start border border-line/60 hover:shadow-sm transition-all"
              >
                {IconComponent && (
                  <div className="p-2.5 bg-[#E8F3EB] rounded-xl text-forest shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <div className="space-y-1">
                  <h3 className="font-bold text-ink text-base font-heading">{card.title}</h3>
                  <p className="text-slate-2 text-xs leading-relaxed font-body">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
    </div>
  );
}