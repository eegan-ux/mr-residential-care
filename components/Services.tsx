const services = [
  {
    title: "Supported Living",
    description:
      "In-home support that helps individuals live as independently as possible in their own community, with staff providing exactly the level of assistance each person's plan calls for — no more, no less.",
    points: [
      "Person-centered service plans",
      "Daily living & community integration support",
      "Coordination with case managers and families",
    ],
  },
  {
    title: "Habilitative Support",
    description:
      "Structured, skill-building support designed to help individuals develop and maintain the abilities they need for greater independence, safety, and quality of life.",
    points: [
      "Skill acquisition & behavioral support",
      "Individualized habilitation plans",
      "Consistent, clinically-informed staffing",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] font-semibold tracking-tight text-white sm:text-[40px]">
            Services
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-navy-200">
            Two service lines, one standard of care.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-9 backdrop-blur"
            >
              <h3 className="text-[22px] font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-200">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] text-navy-100"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-brand-teal to-brand-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
