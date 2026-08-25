const CAREERS_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-10957/VCHPMNCWPBOHL1QPUU";

export default function Careers() {
  return (
    <section id="careers" className="border-b border-navy-100 bg-navy-50/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand-600">
          05 — Careers
        </p>
        <h2 className="mt-4 text-[32px] font-semibold tracking-tight text-navy-900 sm:text-[36px]">
          Join our team
        </h2>
        <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-navy-500">
          We&rsquo;re always looking for Direct Support Professionals,
          Resident Supervisors, and Resident Managers who take real
          ownership of the people they serve.
        </p>

        <div className="mt-10 overflow-hidden border border-navy-200 bg-white">
          <iframe
            src={CAREERS_URL}
            title="MR Residential Care Candidate Intake Form"
            className="h-[1100px] w-full"
            loading="lazy"
          />
        </div>

        <a
          href={CAREERS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[14px] font-medium text-navy-500 underline underline-offset-4 hover:text-navy-900"
        >
          Form not loading? Open it in a new tab →
        </a>
      </div>
    </section>
  );
}
