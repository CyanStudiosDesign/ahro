import React from "react";
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
    <main className="min-h-screen bg-surface pt-20 sm:pt-24">
      <CommunityEngagement programsData={communityData || undefined} />
    </main>
  );
}
