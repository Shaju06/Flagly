import { Button } from '@/components/ui/button';
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';

export function FlagsEmpty({
  onCreate,
}: {
  onCreate: () => void;
}) {
  useKeyboardShortcuts({
      onNew: () => onCreate(),
    });
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-lg border border-dashed bg-card">
      <p className="text-sm text-muted-foreground">
        No feature flags yet
      </p>
      <Button onClick={onCreate}>
        Create your first flag
      </Button>
      <p className="text-xs text-muted-foreground">
        Tip: Press <kbd>N</kbd> to create a flag
      </p>
    </div>
  );
}
