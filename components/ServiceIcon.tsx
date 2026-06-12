import {
  Compass,
  Radar,
  ShieldAlert,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  GraduationCap,
  Scale,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Compass,
  Radar,
  ShieldAlert,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  GraduationCap,
  Scale,
  Cpu,
};

export default function ServiceIcon({
  name,
  className = "",
  size = 24,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Icon = map[name] ?? Compass;
  return <Icon size={size} className={className} strokeWidth={1.6} />;
}
