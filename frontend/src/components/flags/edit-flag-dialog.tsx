'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Flag = {
  key: string;
  type: 'boolean' | 'string' | 'number';
  rollout: number;
  enabled: boolean;
};

export function EditFlagDialog({
  flag,
  open,
  onClose,
}: {
  flag: Flag;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Feature Flag</DialogTitle>
        </DialogHeader>

        {/* REUSE Create Flag UI here */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Flag Key
            </p>
            <p className="font-medium">{flag.key}</p>
          </div>

          <div className="text-sm text-muted-foreground">
            Type: {flag.type}
          </div>

          <div className="text-sm text-muted-foreground">
            Rollout: {flag.rollout}%
          </div>

          {/* later: reuse full form */}
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button>Save changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
