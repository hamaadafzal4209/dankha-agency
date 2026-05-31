import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/about/TeamCard";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section className="mx-auto mt-32 max-w-7xl">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Dankha team"
        description="Learn more about the people behind Dankha and their expertise."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}
