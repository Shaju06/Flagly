import { CreateFlagDialog } from './create-flag-dialog';

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <span className="text-sm text-muted-foreground">
        My Project
      </span>
      <CreateFlagDialog />
    </header>
  );
}
