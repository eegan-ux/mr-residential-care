const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14037";

const contact = [
  { label: "Phone", value: "(971) 801-4958", href: "tel:+19718014958" },
  {
    label: "Email",
    value: "eegan@mrresidentialcare.com",
    href: "mailto:eegan@mrresidentialcare.com",
  },
  { label: "Location", value: "Clackamas County, Oregon", href: null },
];

export default function ReferralCTA() {
  return (
    <section id="contact" className="border-b border-navy-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-600">
          04 — Referral
        </p>
        <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-navy-900 sm:text-[36px]">
          Make a referral
        </h2>
        <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-navy-500">
          Submit a referral directly below, or reach out and we&rsquo;ll walk
          you through it.
        </p>

        <div className="mt-10 overflow-hidden border border-navy-200">
          <iframe
            src={REFERRAL_URL}
            title="MR Residential Care Referral Form"
            className="h-[900px] w-full"
            loading="lazy"
          />
        </div>

        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[14px] font-medium text-navy-500 underline underline-offset-4 hover:text-navy-900"
        >
          Form not loading? Open it in a new tab →
        </a>

        <div className="mt-16 grid divide-y divide-navy-200 border-y border-navy-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {contact.map((item) => (
            <div key={item.label} className="py-6 sm:px-8 sm:py-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-navy-400">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block text-[16px] font-medium text-navy-900 hover:text-brand-600"
                >
                  {item.value}
                </a>
              ) : (
                <div className="mt-2 text-[16px] font-medium text-navy-900">
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
