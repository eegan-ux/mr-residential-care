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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-[32px] font-semibold tracking-tight text-navy-900 sm:text-[40px]">
          Our story
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-navy-500">
          MR Residential Care was built to close a gap we saw across the
          industry: too many providers treat compliance as the ceiling
          instead of the floor. We started in Clackamas County, Oregon with
          a simple premise — the people we serve deserve homes that are
          safe, structured, and run by people who take real ownership of the
          outcome. That premise still drives every decision we make today.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-navy-100 bg-white p-8 shadow-soft transition-shadow hover:shadow-card"
          >
            <div className="mb-5 h-2 w-10 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue" />
            <h3 className="text-[17px] font-semibold text-navy-900">
              {value.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-500">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
