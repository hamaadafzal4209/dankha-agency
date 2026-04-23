import { SectionHeading } from "@/components/SectionHeading";

export function AboutIntro() {
  return (
    <section className="mx-auto max-w-5xl pt-10 text-center">
      <SectionHeading
        eyebrow="About us"
        title="A studio built for ambitious teams."
        description="We're DANKHA — a small senior team obsessed with shipping work that performs in the real world. We sit between engineering, design and growth, and we move fast without ever cutting corners."
      />
    </section>
  );
}
