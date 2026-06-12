import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Wordmark from "./Wordmark";
import { company, footerNav } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-forest text-warm/80 bg-diagonal-lines">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + positioning */}
          <div>
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-warm/65">
              {company.shortPositioning}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-start gap-3 text-warm/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-copper" />
                <span>
                  {company.address.line1}, {company.address.city},<br />
                  {company.address.region} {company.address.postcode}
                </span>
              </p>
              <p className="flex items-center gap-3 text-warm/70">
                <Mail size={16} className="shrink-0 text-copper" />
                <a href={`mailto:${company.emails.general}`} className="transition-colors hover:text-sand">
                  {company.emails.general}
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-warm/70 transition-colors hover:text-sand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance notice */}
        <div className="mt-14 rounded-lg border border-warm/10 bg-warm/[0.03] p-5 text-xs leading-relaxed text-warm/55">
          Halifax Defence Consulting Limited does not manufacture, stock, sell or supply defence
          equipment through this website. Any matter involving controlled goods, controlled
          technology, export controls, trade controls, sanctions, end-use requirements, classified
          information or formal approvals must be reviewed through the appropriate process before
          activity progresses. Please do not submit classified or sensitive material through this
          website.
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-warm/10 pt-6 text-xs text-warm/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. Registered in {company.registered}. Company no.{" "}
            {company.companyNumber}.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-sand">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-sand">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
