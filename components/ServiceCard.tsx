import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper/40 hover:shadow-xl hover:shadow-forest/5"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-olive/8 text-olive transition-colors group-hover:bg-copper group-hover:text-white">
          <ServiceIcon name={service.icon} />
        </span>
        {index != null && (
          <span className="font-serif text-2xl font-semibold text-line transition-colors group-hover:text-copper/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 font-serif text-xl font-semibold text-forest">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-copper">
        Learn more
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
