const values = [
  {
    title: "Extreme Ownership",
    description:
      "We hold ourselves accountable for every outcome — no blame, no excuses. If something falls short, we own it and fix it.",
  },
  {
    title: "Professional Advocacy",
    description:
      "We advocate for the individuals in our care with the same rigor and professionalism we'd want for our own family.",
  },
  {
    title: "Unwavering Excellence",
    description:
      "Good enough isn't. We hold every home, every shift, and every plan to a standard that doesn't bend under pressure.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-600">
            01 — About
          </p>
          <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-tight text-navy-900 sm:text-[36px]">
            Our story
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-navy-500">
            MR Residential Care was built to close a gap we saw across the
            industry: too many providers treat compliance as the ceiling
            instead of the floor. We started in Clackamas County, Oregon
            with a simple premise — the people we serve deserve homes that
            are safe, structured, and run by people who take real ownership
            of the outcome. That premise still drives every decision we
            make today.
          </p>
        </div>

        <div className="border-t border-navy-200">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="grid grid-cols-[2.5rem_1fr] gap-6 border-b border-navy-200 py-7 sm:grid-cols-[3rem_1fr]"
            >
              <span className="font-mono text-[13px] text-navy-300">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-[17px] font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy-500">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
