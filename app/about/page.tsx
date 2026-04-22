import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Compass, Eye, Heart, Sparkles } from "lucide-react";

const team = [
  { name: "Aria Singh", role: "Founder & CEO", initials: "AS" },
  { name: "Theo Laurent", role: "Head of Engineering", initials: "TL" },
  { name: "Maya Okafor", role: "Design Director", initials: "MO" },
  { name: "Jonas Reyes", role: "Growth Lead", initials: "JR" },
];

const timeline = [
  { year: "2019", title: "Founded in a garage", desc: "Three friends, one laptop, big ambitions." },
  { year: "2020", title: "First million in revenue", desc: "Shipped 18 products across 4 industries." },
  { year: "2022", title: "Global team", desc: "Opened studios in Lisbon, Singapore and Toronto." },
  { year: "2024", title: "AI practice launched", desc: "Helping clients ship intelligent products responsibly." },
  { year: "2025", title: "120+ projects shipped", desc: "And we're just getting started." },
];

function AboutPage() {
  return (
    <div className="px-6 pb-32">
      <section className="mx-auto max-w-5xl pt-10 text-center">
        <SectionHeading
          eyebrow="About us"
          title="A studio built for ambitious teams."
          description="We're DANKHA — a small senior team obsessed with shipping work that performs in the real world. We sit between engineering, design and growth, and we move fast without ever cutting corners."
        />
      </section>

      <section className="mx-auto max-w-6xl mt-24 grid md:grid-cols-3 gap-6">
        {[
          { icon: Compass, title: "Mission", text: "Help ambitious companies turn complex ideas into elegant, scalable products." },
          { icon: Eye, title: "Vision", text: "A web that is faster, more useful, and more delightful for everyone." },
          { icon: Heart, title: "Values", text: "Craft, candor, curiosity. We say what we mean and ship what we promise." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className="h-full rounded-3xl glass-strong p-8">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-white">
                <c.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl mt-32">
        <SectionHeading eyebrow="The people" title="Senior, hands-on, opinionated." />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group rounded-3xl glass-strong p-6 text-center transition hover:-translate-y-1 hover:border-secondary/40">
                <div className="relative mx-auto h-24 w-24">
                  <div className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-50 group-hover:opacity-100 transition" />
                  <div className="relative h-full w-full rounded-full gradient-primary flex items-center justify-center font-display text-2xl font-bold text-white">
                    {m.initials}
                  </div>
                </div>
                <div className="mt-5 font-display font-semibold">{m.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl mt-32">
        <SectionHeading eyebrow="Our journey" title="Six years, one obsession." />
        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 [direction:ltr]"}`}>
                    <div className="rounded-2xl glass-strong p-6 inline-block text-left">
                      <div className="text-xs font-mono text-secondary tracking-wider">{item.year}</div>
                      <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                    <div className="relative h-4 w-4">
                      <div className="absolute inset-0 rounded-full gradient-primary blur-md animate-glow-pulse" />
                      <div className="relative h-4 w-4 rounded-full gradient-primary border-2 border-background" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl mt-32 text-center">
        <Reveal>
          <Sparkles className="mx-auto text-secondary" size={28} />
          <p className="mt-6 font-display text-2xl md:text-3xl font-medium leading-relaxed text-balance">
            "We don't chase trends. We build things that age well."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— The DANKHA team</p>
        </Reveal>
      </section>
    </div>
  );
}

export default AboutPage;
