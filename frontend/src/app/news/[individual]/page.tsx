import React from "react";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/img";

interface PageProps {
  params: Promise<{
    individual: string;
  }>;
}

export default async function NewsArticleDetailPage({ params }: PageProps) {
  const { individual } = await params;

  // Fetch news document from Sanity matching the slug
  const newsQuery = groq`
    *[_type == "news" && slug.current == $slug][0] {
      title,
      category,
      location,
      publishedAt,
      image,
      excerpt
    }
  `;

  const article = await client.withConfig({ useCdn: false }).fetch(newsQuery, { slug: individual });

  if (!article) {
    notFound();
  }

  const imageUrl = article.image ? urlFor(article.image)?.url() : null;
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Aug 2026";

  return (
    <div className="w-full pt-10 bg-white text-[#14170F] antialiased pb-20">
      {/* 1. ARTICLE HEAD */}
      <header className="px-6 md:px-12 pt-10 pb-8 max-w-[800px] mx-auto text-left">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#14170F] text-white font-sans text-[11px] font-semibold tracking-wider uppercase mb-5">
          {article.category || "Research"}
        </span>
        
        <h1 className="text-3xl md:text-[42px] font-bold font-heading leading-[1.15] text-[#14170F] mb-6">
          {article.title}
        </h1>

        <div className="flex items-center flex-wrap gap-2 text-xs text-[#5B5F55] font-sans">
          <span>By AHRO Communications</span>
          <span className="w-1 h-1 rounded-full bg-[#5B5F55] mx-1"></span>
          <span>{formattedDate}</span>
          <span className="w-1 h-1 rounded-full bg-[#5B5F55] mx-1"></span>
          <span>{article.location || "Glasgow"}</span>
          <span className="w-1 h-1 rounded-full bg-[#5B5F55] mx-1"></span>
          <span>4 min read</span>
        </div>
      </header>

      {/* 2. HERO IMAGE BANNER */}
      <div className="px-6 md:px-12 max-w-[1000px] mx-auto mb-12">
        <div
          className="h-[300px] md:h-[480px] rounded-[20px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: imageUrl
              ? `url(${imageUrl})`
              : "linear-gradient(135deg, #1c2b1a, #8fae63 60%, #a6c96a)",
          }}
        />
      </div>

      {/* 3. ARTICLE BODY */}
      <div className="px-6 md:px-12 max-w-[800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-8">
          {/* Share Column (Left) */}
          <aside className="flex md:flex-col gap-3 justify-start items-center md:pt-2">
            <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#E3E4DC] hover:bg-[#F2F3EC] text-xs font-semibold text-[#14170F]">
              in
            </button>
            <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#E3E4DC] hover:bg-[#F2F3EC] text-xs font-semibold text-[#14170F]">
              𝕏
            </button>
            <button className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#E3E4DC] hover:bg-[#F2F3EC] text-xs font-semibold text-[#14170F]">
              ↗
            </button>
          </aside>

          {/* Article Content (Right) */}
          <article className="prose max-w-none text-[#5B5F55] text-base md:text-lg leading-[1.8] space-y-6">
            <p className="font-medium text-[#14170F]">
              {article.excerpt ||
                "A state-of-the-art research facility has been inaugurated to foster innovation in biomedical sciences, translational medicine, and collaborative healthcare research. The hub brings together faculty, postgraduate researchers, and industry partners under one roof for the first time."}
            </p>
            
            <p>
              The facility houses modern sequencing labs, a dedicated data testing unit, and shared infrastructure previously spread across several institutional sites — a structural upgrade that leaders claim will cut the time between target identification and clinical trial launches.
            </p>
            
            <blockquote className="border-l-4 border-[#358840] pl-5 my-6 italic text-[#14170F] font-heading text-lg md:text-xl font-medium">
              "This milestone integration represents our commitment to scientific research, translating lab bench findings into public healthcare improvements."
            </blockquote>

            <p>
              Collaborations are already underway for initial study runs starting this autumn term. Institutional grants and sponsorships are open to support researchers and joint academic faculty projects.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
