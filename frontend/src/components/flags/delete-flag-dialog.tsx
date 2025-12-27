import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function DeleteFlagDialog({
  flagKey,
  open,
  onClose,
  onConfirm,
}: {
  flagKey: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [value, setValue] = useState('');

  const canDelete = value === flagKey;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <h2 className="text-lg font-semibold">
          Delete flag
        </h2>

        <p className="text-sm text-muted-foreground">
          Type <strong>{flagKey}</strong> to confirm
          deletion.
        </p>

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={!canDelete}
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
