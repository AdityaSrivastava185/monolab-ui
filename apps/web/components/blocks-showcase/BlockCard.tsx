interface BlockCardProps {
  name: string;
  description: string;
  preview: React.ReactNode;
  tags: string[];
}

export function BlockCard({ name, description, preview, tags }: BlockCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/10 bg-card transition-all duration-300 hover:border-border/20 hover:shadow-xl">
      <div className="aspect-[16/9] p-6">
        <div className="h-full w-full rounded-xl border border-border/10 bg-background/50">
          {preview}
        </div>
      </div>
      <div className="p-6 border-t border-border/10 bg-background/30">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}