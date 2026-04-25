import { SectionHeading } from "@/components/SectionHeading";
import { TeamDrawer } from "@/components/about/TeamDrawer";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section className="mx-auto mt-32 max-w-7xl">
      <SectionHeading
        eyebrow="The people"
        title="Senior, hands-on, and built for execution."
        description="Meet the team behind strategy, design, engineering, and growth. Tap any member to view full profile details."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamDrawer key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
