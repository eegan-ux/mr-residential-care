import Image from "next/image";

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
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-600">
            03 — Why Us
          </p>
          <h2 className="mt-4 max-w-lg text-[32px] font-semibold leading-tight tracking-tight text-navy-900 sm:text-[36px]">
            Four things you can count on, every time.
          </h2>
        </div>

        <div className="relative aspect-[4/3] w-full border border-navy-200 lg:w-72">
          <Image
            src="/images/why-us-team.jpg"
            alt="A genuine, relaxed smile from a member of our care team"
            fill
            sizes="(min-width: 1024px) 288px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 grid divide-y divide-navy-200 border-y border-navy-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {differentiators.map((item, i) => (
          <div key={item.title} className="px-1 py-8 sm:px-8">
            <div className="flex h-9 w-9 items-center justify-center border border-navy-200 font-mono text-[13px] text-navy-500">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-5 text-[16px] font-semibold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-2.5 max-w-xs text-[14px] leading-relaxed text-navy-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
