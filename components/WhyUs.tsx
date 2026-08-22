const differentiators = [
  {
    title: "Safety-First Culture",
    description:
      "Every home, every shift, and every plan is built around the physical and emotional safety of the people we serve.",
  },
  {
    title: "Clinically Competent Staff",
    description:
      "Our team is trained and supervised to a clinical standard, not just a compliance minimum.",
  },
  {
    title: "Long-Term Stability",
    description:
      "We build for continuity — consistent staffing and consistent homes so the people we serve aren't starting over.",
  },
  {
    title: "Structured Admin Standards",
    description:
      "Documentation, reporting, and administration run on tight, repeatable systems — nothing is left to memory.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[32px] font-semibold tracking-tight text-navy-900 sm:text-[40px]">
          Why choose us
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-navy-500">
          Four things you can count on, every time.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item, i) => (
          <div
            key={item.title}
            className="rounded-2xl border border-navy-100 bg-white p-7 shadow-soft"
          >
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-brand-blue text-[14px] font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-[16px] font-semibold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-navy-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
