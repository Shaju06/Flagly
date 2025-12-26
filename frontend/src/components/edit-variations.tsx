import { FC, useState } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

const EditVariations: FC<{
  data: Record<string, string | number>;
  isOpen: boolean;
  isRemove?: boolean;
  index: number;
  setIsEditOpen?: (open: boolean) => void;
  update: (
    index: number,
    value: { name: string; value: string | number },
  ) => void;
  remove: (index: number) => void;
  type?: string;
}> = ({
  data,
  isOpen,
  isRemove,
  setIsEditOpen,
  type,
  update,
  remove,
  index,
}) => {
  const [editFields, setEditFields] = useState<{
    name: string;
    value: string | number;
  }>({
    name: data?.name as string,
    value: data?.value as string | number,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    setEditFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (editFields.value === '') return;

    update(index, editFields);

    setIsEditOpen?.(false);
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsEditOpen?.(false);
      }}
    >
      <DialogTitle>Edit Variation</DialogTitle>
      <DialogContent className="space-y-4">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Name</Label>

            <Input
              name="name"
              type="text"
              value={editFields.name as string}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="value">Value</Label>
            </div>
            <Input
              name="value"
              type={type === 'number' ? 'number' : 'text'}
              onChange={handleChange}
              value={editFields?.value as string | number}
            />
            {editFields?.value === '' && (
              <p className="text-sm text-destructive">
                Value is required
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          {isRemove ? (
            <Button
              className="left"
              onClick={() => {
                setIsEditOpen?.(false);
                remove(index);
              }}
            >
              Remove
            </Button>
          ) : null}
          <DialogClose asChild>
            <Button
              className="md:ml-auto text-muted-foreground active:bg-muted"
              variant="ghost"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant={'outline'}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditVariations;
