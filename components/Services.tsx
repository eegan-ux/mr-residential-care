import Image from "next/image";

const components = [
  {
    title: "Round-the-Clock Residential Support",
    image: "/images/service-residential.jpg",
    alt: "A resident relaxing in the shared kitchen of a home while a housemate cooks nearby",
    description:
      "In-home support delivered in a structured residential setting, with staff providing exactly the level of assistance each person's plan calls for — no more, no less.",
    points: [
      "Person-centered service plans",
      "24/7 on-site staffing and supervision",
      "Coordination with case managers and families",
    ],
  },
  {
    title: "Habilitative Support",
    image: "/images/service-habilitative.jpg",
    alt: "Two people cooking together in a home kitchen, smiling",
    description:
      "Structured, skill-building support built into every residential placement — not a separate program — to help individuals grow toward greater independence.",
    points: [
      "Skill acquisition & behavioral support",
      "Individualized habilitation plans",
      "Consistent, clinically-informed staffing",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-navy-950 bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-400">
          02 — Services
        </p>
        <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-white sm:text-[36px]">
          24-Hour Residential Care
        </h2>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-navy-300">
          One service, built to cover everything a person needs to live
          safely and grow — habilitative, skill-building support included as
          part of every placement, not billed as a separate program.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {components.map((component) => (
            <div key={component.title} className="bg-navy-950">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={component.image}
                  alt={component.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-[20px] font-semibold text-white">
                  {component.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-navy-300">
                  {component.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {component.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[14px] text-navy-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-brand-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
