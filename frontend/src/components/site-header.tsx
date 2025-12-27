'use client';
import { useState } from 'react';
import { CreateFlagDialog } from './create-flag-dialog';
import { Button } from './ui/button';
import { SidebarTrigger } from './ui/sidebar';

export function SiteHeader() {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <header className="flex h-14 items-center justify-between border-b px-6">
      <SidebarTrigger />
      <span className="text-sm text-muted-foreground">
        My Project
      </span>

      <Button onClick={() => setCreateOpen(true)}>
        Create Flag
      </Button>
      <CreateFlagDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
      />
    </header>
  );
}
