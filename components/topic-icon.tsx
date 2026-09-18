import {
  Activity,
  AlignVerticalJustifyCenter,
  Bone,
  Brain,
  BrainCircuit,
  CircleDot,
  Dumbbell,
  Footprints,
  Hand,
  HeartPulse,
  Stethoscope,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  activity: Activity,
  "align-vertical-justify-center": AlignVerticalJustifyCenter,
  bone: Bone,
  brain: Brain,
  "brain-circuit": BrainCircuit,
  "circle-dot": CircleDot,
  dumbbell: Dumbbell,
  footprints: Footprints,
  hand: Hand,
  "heart-pulse": HeartPulse,
  stethoscope: Stethoscope,
  wind: Wind,
  zap: Zap,
};

export function TopicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Activity;
  return <Icon className={className} aria-hidden="true" />;
}
