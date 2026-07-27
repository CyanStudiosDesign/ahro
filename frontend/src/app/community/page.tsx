import React from "react";
import { Navbar } from "@/modules/layout/navbar";
import { CommunityEngagement } from "@/modules/community-page";
import { client } from "@/sanity/client";
import { COMMUNITY_QUERY } from "@/sanity/queries";

export const revalidate = 10;

export default async function CommunityPage() {
  let communityData = null;

  try {
    communityData = await client.fetch(COMMUNITY_QUERY).catch(() => null);
  } catch (error) {
    console.error("Failed to fetch Community Sanity data:", error);
  }

  return (
    <main className="min-h-screen bg-surface">
      <CommunityEngagement programsData={communityData || undefined} />
    </main>
  );
}

