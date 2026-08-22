const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14037";

export default function ReferralCTA() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-brand-50/60 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[32px] font-semibold tracking-tight text-navy-900 sm:text-[40px]">
            Make a referral
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-navy-500">
            Submit a referral directly below, or reach out and we'll walk
            you through it.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
          <iframe
            src={REFERRAL_URL}
            title="MR Residential Care Referral Form"
            className="h-[900px] w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-navy-500 underline underline-offset-4 hover:text-navy-900"
          >
            Form not loading? Open it in a new tab →
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 rounded-3xl border border-navy-100 bg-white p-10 text-center shadow-soft sm:grid-cols-3">
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy-400">
              Phone
            </div>
            <a
              href="tel:+19718014958"
              className="mt-2 block text-[16px] font-medium text-navy-900 hover:text-brand-600"
            >
              (971) 801-4958
            </a>
          </div>
          <div className="sm:border-x sm:border-navy-100">
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy-400">
              Email
            </div>
            <a
              href="mailto:eegna@mrresidentialcare.com"
              className="mt-2 block text-[16px] font-medium text-navy-900 hover:text-brand-600"
            >
              eegna@mrresidentialcare.com
            </a>
          </div>
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy-400">
              Location
            </div>
            <div className="mt-2 text-[16px] font-medium text-navy-900">
              Clackamas County, Oregon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
