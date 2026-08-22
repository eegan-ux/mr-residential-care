import Image from "next/image";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/mr-logo.png"
                alt="MR Residential Care logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-[15px] font-semibold text-navy-900">
                MR Residential Care
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-navy-500">
              Supported Living & Habilitative Support in Clackamas County,
              Oregon.
            </p>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy-400">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-navy-600 hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy-400">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-navy-600">
              <li>
                <a href="tel:+19718014958" className="hover:text-navy-900">
                  (971) 801-4958
                </a>
              </li>
              <li>
                <a
                  href="mailto:eegna@mrresidentialcare.com"
                  className="hover:text-navy-900"
                >
                  eegna@mrresidentialcare.com
                </a>
              </li>
              <li>Clackamas County, Oregon</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-100 pt-8 text-[13px] text-navy-400 sm:flex-row">
          <span>© {year} MR Residential Care. All rights reserved.</span>
          <span>Clackamas County, Oregon</span>
        </div>
      </div>
    </footer>
  );
}
