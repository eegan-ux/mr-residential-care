const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14037";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white"
    >
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center sm:pt-32">
        <p className="mb-5 inline-flex items-center rounded-full border border-navy-100 bg-white px-4 py-1.5 text-[13px] font-medium text-navy-600 shadow-soft">
          Serving Clackamas County, Oregon
        </p>

        <h1 className="mx-auto max-w-4xl text-[40px] font-semibold leading-[1.1] tracking-tight text-navy-900 sm:text-[58px]">
          Care built on ownership,
          <br className="hidden sm:block" /> not excuses.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-navy-500 sm:text-[19px]">
          MR Residential Care delivers Supported Living and Habilitative
          Support for individuals with intellectual and developmental
          disabilities — with the clinical rigor and structure their lives
          deserve.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-navy-900 px-7 py-3.5 text-[15px] font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-navy-800 sm:w-auto"
          >
            Make a Referral
          </a>
          <a
            href="#services"
            className="w-full rounded-full border border-navy-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50 sm:w-auto"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 rounded-3xl border border-navy-100 bg-white/70 p-8 text-center shadow-soft backdrop-blur">
          <div>
            <div className="text-2xl font-semibold text-navy-900 sm:text-3xl">
              Extreme
            </div>
            <div className="mt-1 text-[13px] text-navy-500">Ownership</div>
          </div>
          <div className="border-x border-navy-100">
            <div className="text-2xl font-semibold text-navy-900 sm:text-3xl">
              Professional
            </div>
            <div className="mt-1 text-[13px] text-navy-500">Advocacy</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-navy-900 sm:text-3xl">
              Unwavering
            </div>
            <div className="mt-1 text-[13px] text-navy-500">Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
