import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/about/TeamCard";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <SectionHeading
          id="team-heading"
          eyebrow="Team"
          title="The people you'll talk to."
          description="The leads behind our ecommerce, technology and marketing work."
        />

        <Reveal className="mt-12">
          <ul className="border-t border-border">
            {teamMembers.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
