import Image from "next/image";

const REFERRAL_URL = "https://forms.clickup.com/9017869850/f/8cr3hgu-14057/XYM8CDB8IBOSQC68DL";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/images/hero-care.jpg"
          alt="A support worker visiting warmly with the person he supports in their living room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-6 pb-14 sm:pb-20">
            <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.14em] text-brand-300">
              Serving Clackamas County, Oregon
            </p>

            <h1 className="max-w-2xl text-[34px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[50px]">
              A home where you&rsquo;re truly cared for.
            </h1>

            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/80 sm:text-[18px]">
              MR Residential Care provides 24-Hour Residential Care and
              Habilitative Support for adults with intellectual and
              developmental disabilities — delivered with the warmth,
              structure, and real ownership every family deserves.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-6 py-3.5 text-center text-[15px] font-semibold text-navy-900 transition-colors hover:bg-white/90"
              >
                Make a Referral
              </a>
              <a
                href="#services"
                className="rounded-md border border-white/40 px-6 py-3.5 text-center text-[15px] font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
