import React from "react";
import { Navbar } from "@/modules/layout/navbar";
import { CommunityEngagement } from "@/modules/community-page";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-surface">
      <CommunityEngagement />
    </main>
  );
}
