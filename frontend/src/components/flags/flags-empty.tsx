import { Button } from '@/components/ui/button';

export function FlagsEmpty({
  onCreate,
}: {
  onCreate: () => void;
}) {
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-card">
      <p className="text-sm text-muted-foreground">
        No feature flags yet
      </p>
      <Button onClick={onCreate}>
        Create your first flag
      </Button>
    </div>
  );
}
