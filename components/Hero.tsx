import Image from "next/image";

const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14057/XYM8CDB8IBOSQC68DL";

const values = [
  { label: "Extreme", sub: "Ownership" },
  { label: "Professional", sub: "Advocacy" },
  { label: "Unwavering", sub: "Excellence" },
];

export default function Hero() {
  return (
    <section id="top" className="relative border-b border-navy-100">
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-24 sm:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
        <div>
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-brand-600">
            Serving Clackamas County, Oregon
          </p>

          <h1 className="max-w-xl text-[38px] font-semibold leading-[1.08] tracking-tight text-navy-900 sm:text-[52px]">
            Care built on ownership, not excuses.
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-navy-500">
            MR Residential Care delivers 24-Hour Residential Care and
            Habilitative Support for individuals with intellectual and
            developmental disabilities — with the clinical rigor and
            structure their lives deserve.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-navy-900 px-6 py-3.5 text-center text-[15px] font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Make a Referral
            </a>
            <a
              href="#services"
              className="rounded-md border border-navy-200 px-6 py-3.5 text-center text-[15px] font-semibold text-navy-800 transition-colors hover:border-navy-400"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="border border-navy-200 bg-white/70">
          <div className="border-b border-navy-200 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.1em] text-navy-400">
            Core Values
          </div>
          <dl>
            {values.map((v, i) => (
              <div
                key={v.label}
                className={`flex items-baseline justify-between gap-6 px-6 py-5 ${
                  i !== values.length - 1 ? "border-b border-navy-100" : ""
                }`}
              >
                <dt className="font-mono text-[12px] text-navy-300">
                  0{i + 1}
                </dt>
                <dd className="text-right">
                  <div className="text-[18px] font-semibold text-navy-900">
                    {v.label}
                  </div>
                  <div className="text-[13px] text-navy-500">{v.sub}</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-navy-200">
          <Image
            src="/images/hero-care.jpg"
            alt="A support worker visiting with the person he supports in their living room"
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
