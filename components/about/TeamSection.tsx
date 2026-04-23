import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const team = [
  { name: "Aria Singh", role: "Founder & CEO", initials: "AS" },
  { name: "Theo Laurent", role: "Head of Engineering", initials: "TL" },
  { name: "Maya Okafor", role: "Design Director", initials: "MO" },
  { name: "Jonas Reyes", role: "Growth Lead", initials: "JR" },
];

export function TeamSection() {
  return (
    <section className="mx-auto mt-32 max-w-6xl">
      <SectionHeading eyebrow="The people" title="Senior, hands-on, opinionated." />
      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.08}>
            <div className="group rounded-3xl glass-strong p-6 text-center transition hover:-translate-y-1 hover:border-secondary/40">
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-50 transition group-hover:opacity-100" />
                <div className="relative flex h-full w-full items-center justify-center rounded-full gradient-primary font-display text-2xl font-bold text-white">
                  {member.initials}
                </div>
              </div>
              <div className="mt-5 font-display font-semibold">{member.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{member.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
