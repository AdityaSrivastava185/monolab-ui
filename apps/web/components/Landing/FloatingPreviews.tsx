import { FloatingCard } from "./FloatingCard";

export function IconsPreview() {
  return (
    <FloatingCard
      position="left-4 top-24 lg:left-12 lg:top-28"
      hoverRotate="left"
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-card shadow-lg">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
        </div>
      </div>
    </FloatingCard>
  );
}

export function VideoPreview() {
  return (
    <FloatingCard
      position="left-8 top-56 lg:left-44 lg:top-48"
      hoverRotate="right"
    >
      <div className="relative h-36 w-44 overflow-hidden rounded-2xl bg-linear-to-br from-muted to-muted-foreground/30 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-white">
            <svg
              className="ml-0.5 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <span className="absolute bottom-2 left-3 rounded bg-foreground/60 px-2 py-0.5 text-[10px] text-white">
          DEMO
        </span>
        <span className="absolute bottom-2 right-3 text-[10px] text-white/80">
          2:30
        </span>
      </div>
    </FloatingCard>
  );
}

export function CardsPreview() {
  return (
    <FloatingCard
      position="left-4 top-[340px] lg:left-8 lg:top-[380px]"
      hoverRotate="right"
    >
      <div className="relative h-32 w-32 overflow-hidden rounded-2xl bg-card shadow-lg">
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
          <div className="h-8 w-full rounded bg-foreground/10" />
          <div className="h-8 w-full rounded bg-foreground/5" />
          <div className="h-8 w-full rounded bg-foreground/10" />
        </div>
      </div>
    </FloatingCard>
  );
}

interface TogglePreviewProps {
  isOn: boolean;
  onToggle: () => void;
}

export function TogglePreview({ isOn, onToggle }: TogglePreviewProps) {
  return (
    <FloatingCard
      position="bottom-56 left-4 lg:bottom-52 lg:left-12"
      hoverRotate="left"
    >
      <div className="flex h-28 w-48 flex-col items-center justify-center rounded-2xl bg-card p-4 shadow-lg">
        <button
          onClick={onToggle}
          className={`relative h-7 w-12 rounded-full transition-colors ${
            isOn ? "bg-foreground" : "bg-foreground/20"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-card shadow transition-all ${
              isOn ? "left-6" : "left-1"
            }`}
          />
        </button>
        <p className="mt-2 text-[10px] font-medium text-foreground/60">
          {isOn ? "Enabled" : "Disabled"}
        </p>
      </div>
    </FloatingCard>
  );
}

interface SliderPreviewProps {
  value: number;
  onChange: (value: number) => void;
}

export function SliderPreview({ value, onChange }: SliderPreviewProps) {
  return (
    <FloatingCard
      position="bottom-48 left-4 lg:bottom-52 lg:left-44"
      hoverRotate="right"
    >
      <div className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl bg-card p-4 shadow-lg">
        <span className="mb-2 text-lg font-light text-foreground">
          {value}%
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-black"
        />
      </div>
    </FloatingCard>
  );
}

export function MobilePreview() {
  return (
    <FloatingCard position="bottom-8 left-4 lg:bottom-12 lg:left-12">
      <div className="h-40 w-24 overflow-hidden rounded-xl bg-card shadow-lg">
        <div className="h-full w-full bg-linear-to-b from-muted to-muted/80 p-2">
          <div className="h-2 w-8 rounded bg-foreground/20" />
          <div className="mt-3 space-y-1">
            <div className="h-6 w-full rounded bg-foreground/10" />
            <div className="h-6 w-full rounded bg-foreground/5" />
            <div className="h-6 w-full rounded bg-foreground/10" />
          </div>
        </div>
      </div>
    </FloatingCard>
  );
}

export function ButtonsPreview() {
  return (
    <FloatingCard
      position="bottom-48 right-4 lg:bottom-52 lg:right-44"
      hoverRotate="left"
    >
      <div className="flex h-32 w-40 flex-col items-center justify-center gap-2 rounded-2xl bg-card p-4 shadow-lg">
        <button className="w-full rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background">
          Primary
        </button>
        <button className="w-full rounded-full border border-border/20 px-4 py-2 text-xs font-medium text-foreground">
          Secondary
        </button>
      </div>
    </FloatingCard>
  );
}

export function NavigationPreview() {
  return (
    <FloatingCard
      position="right-4 top-24 lg:right-12 lg:top-28"
      hoverRotate="right"
    >
      <div className="flex h-28 w-36 flex-col items-center justify-center gap-2 rounded-2xl bg-card p-4 shadow-lg">
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-foreground/10" />
          <div className="h-8 w-8 rounded-lg bg-foreground/10" />
          <div className="h-8 w-8 rounded-lg bg-foreground/20" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-foreground/5" />
          <div className="h-8 w-8 rounded-lg bg-foreground" />
          <div className="h-8 w-8 rounded-lg bg-foreground/5" />
        </div>
      </div>
    </FloatingCard>
  );
}

export function InputsPreview() {
  return (
    <FloatingCard
      position="right-8 top-56 lg:right-44 lg:top-48"
      hoverRotate="left"
    >
      <div className="flex h-32 w-40 flex-col items-center justify-center gap-2 rounded-2xl bg-card p-4 shadow-lg">
        <input
          type="text"
          placeholder="Email"
          className="w-full rounded-full border border-border/10 bg-muted px-3 py-2 text-xs text-foreground placeholder:text-foreground/50 focus:outline-none"
        />
        <input
          type="text"
          defaultValue="john@email.com"
          className="w-full rounded-full border border-border/20 bg-card px-3 py-2 text-xs text-foreground focus:outline-none"
        />
      </div>
    </FloatingCard>
  );
}

interface CheckboxPreviewProps {
  isChecked: boolean;
  onToggle: () => void;
}

export function CheckboxPreview({ isChecked, onToggle }: CheckboxPreviewProps) {
  return (
    <FloatingCard
      position="bottom-56 right-4 lg:bottom-52 lg:right-60"
      hoverRotate="right"
    >
      <div className="flex h-28 w-40 flex-col items-start justify-center gap-2 rounded-2xl bg-card p-4 shadow-lg">
        <label className="flex items-center gap-2">
          <button
            onClick={onToggle}
            className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${
              isChecked
                ? "border-border bg-foreground"
                : "border-border/30 bg-card"
            }`}
          >
            {isChecked && (
              <svg
                className="h-3 w-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
          <span className="text-xs text-foreground/70">Accept terms</span>
        </label>
        <label className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border-2 border-border/20" />
          <span className="text-xs text-foreground/60">Newsletter</span>
        </label>
      </div>
    </FloatingCard>
  );
}

interface AccordionPreviewProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionPreview({ isOpen, onToggle }: AccordionPreviewProps) {
  return (
    <FloatingCard
      position="bottom-8 right-4 lg:bottom-12 lg:right-12"
      hoverRotate="left"
    >
      <div className="w-48 rounded-2xl bg-card p-4 shadow-lg">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="text-xs font-medium text-foreground">
            How it works?
          </span>
          <span
            className={`text-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all ${isOpen ? "mt-2 max-h-16" : "max-h-0"}`}
        >
          <p className="text-[10px] text-foreground/70">
            Copy the code, paste into your project, customize.
          </p>
        </div>
      </div>
    </FloatingCard>
  );
}

export function ComponentStackPreview() {
  return (
    <FloatingCard position="bottom-4 right-4 lg:bottom-8 lg:right-8">
      <div className="h-48 w-32 overflow-hidden rounded-xl bg-card shadow-lg">
        <div className="h-full w-full p-3">
          <div className="mb-2 h-3 w-12 rounded bg-foreground/20" />
          <div className="space-y-2">
            <div className="h-10 w-full rounded-lg bg-linear-to-r from-black/10 to-black/5" />
            <div className="h-10 w-full rounded-lg bg-linear-to-r from-black/5 to-black/10" />
            <div className="h-10 w-full rounded-lg bg-foreground/10" />
          </div>
        </div>
      </div>
    </FloatingCard>
  );
}
