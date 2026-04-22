import { Reveal } from "@/components/Reveal";
import { stats } from "./data";

export function StatsBar() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto mb-3 text-secondary" size={20} />
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text-bright">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
