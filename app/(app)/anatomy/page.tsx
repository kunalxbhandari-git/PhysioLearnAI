import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { AnatomyViewer } from "./anatomy-viewer";

export const metadata: Metadata = { title: "3D Anatomy" };

export default function AnatomyPage() {
  return (
    <div>
      <PageHeader
        title="3D Anatomy Explorer"
        subtitle="Rotate the skeleton, click any body region, and jump straight into the related study topics."
      />
      <AnatomyViewer />
      <p className="mt-6 text-center text-[11px] text-muted">
        Stylized educational model — simplified for learning, not anatomically exhaustive.
      </p>
    </div>
  );
}
