import { CreateFlagDialog } from './create-flag-dialog';
import { SidebarTrigger } from './ui/sidebar';

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <SidebarTrigger />
      <span className="text-sm text-muted-foreground">
        My Project
      </span>
      <CreateFlagDialog />
    </header>
  );
}
