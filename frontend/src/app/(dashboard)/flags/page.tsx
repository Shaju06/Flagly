'use client';

import { CreateFlagDialog } from '@/components/create-flag-dialog';
import { FlagsEmpty } from '@/components/flags/flags-empty';
import { FlagsGrid } from '@/components/flags/flags-grid';
import { useKeyboardShortcuts } from '@/hooks/use-keyboard-shortcuts';
import { useState } from 'react';

const flags = [
  {
    name: 'New Checkout',
    key: 'new_checkout',
    type: 'boolean',
    enabled: true,
    rollout: 30,
    env: 'prod',
  },
  {
    name: 'Dark Mode',
    key: 'dark_mode',
    type: 'string',
    enabled: false,
    rollout: 0,
    env: 'dev',
  },
  {
    name: 'Price Calculation',
    key: 'price_calc',
    type: 'number',
    enabled: true,
    rollout: 100,
    env: 'prod',
  },
  {
    name: 'New Checkout',
    key: 'new_checkoutt',
    type: 'boolean',
    enabled: true,
    rollout: 30,
    env: 'prod',
  },
  {
    name: 'Dark Mode',
    key: 'dark_modee',
    type: 'string',
    enabled: false,
    rollout: 0,
    env: 'dev',
  },
  {
    name: 'Price Calculation',
    key: 'price_calct',
    type: 'number',
    enabled: true,
    rollout: 100,
    env: 'prod',
  },
  {
    name: 'New Checkout',
    key: 'new_checkout',
    type: 'boolean',
    enabled: true,
    rollout: 30,
    env: 'prod',
  },
  {
    name: 'Dark Mode',
    key: 'dark_mode',
    type: 'string',
    enabled: false,
    rollout: 0,
    env: 'dev',
  },
  {
    name: 'Price Calculation',
    key: 'price_calc',
    type: 'number',
    enabled: true,
    rollout: 100,
    env: 'prod',
  },
  {
    name: 'New Checkout',
    key: 'new_checkoutt',
    type: 'boolean',
    enabled: true,
    rollout: 30,
    env: 'prod',
  },
  {
    name: 'Dark Mode',
    key: 'dark_modee',
    type: 'string',
    enabled: false,
    rollout: 0,
    env: 'dev',
  },
  {
    name: 'Price Calculation',
    key: 'price_calct',
    type: 'number',
    enabled: true,
    rollout: 100,
    env: 'prod',
  },
];

export default function FlagsPage() {
  const [createOpen, setCreateOpen] = useState(false);

  useKeyboardShortcuts({
    onNew: () => setCreateOpen(true),
    onEscape: () => setCreateOpen(false),
  });

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col gap-6 p-8">
      <h1 className="text-2xl font-semibold">
        Feature Flags
      </h1>
      {flags.length === 0 ? (
        <FlagsEmpty onCreate={() => setCreateOpen(true)} />
      ) : (
        <div className="flex-1 overflow-auto pr-4  scrollbar-track-transparent">
          <FlagsGrid flags={flags} />
        </div>
      )}
      {createOpen && (
        <CreateFlagDialog
          open={createOpen}
          onClose={() => setCreateOpen(false)}
        />
      )}
    </div>
  );
}
