'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { createFlagSchema } from '@/validations/newflag-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogClose } from '@radix-ui/react-dialog';
import { Fragment, useEffect, useState } from 'react';
import {
  useFieldArray,
  useForm,
  useWatch,
} from 'react-hook-form';
import EditVariations from './edit-variations';
import { TextWithTooltip } from './text-with-tooltip';

export function CreateFlagDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose?: () => void;
}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, dirtyFields },
    control,
  } = useForm({
    resolver: zodResolver(createFlagSchema),
    defaultValues: {
      name: '',
      key: '',
      description: '',
      type: 'boolean',
      enabled: false,
      variants: undefined,
    },
  });

  const type = useWatch({ control, name: 'type' });
  const name = useWatch({ control, name: 'name' });
  const { fields, append, remove, update, replace } =
    useFieldArray({
      control,
      name: 'variants',
    });

  const onTypeChange = (
    type: 'boolean' | 'string' | 'number',
  ) => {
    setValue('type', type);

    if (type === 'boolean') {
      setValue('variants', undefined);
      return;
    }

    if (type === 'string') {
      replace([
        { name: '', value: 'Variation 1' },
        { name: '', value: 'Variations 2' },
      ]);
    }

    if (type === 'number') {
      replace([
        { name: '', value: 1 },
        { name: '', value: 0 },
      ]);
    }
  };

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');

  useEffect(() => {
    if (!name) return;
    if (dirtyFields.key) return;

    setValue('key', slugify(name), {
      shouldDirty: false,
      shouldTouch: false,
    });
  }, [name, dirtyFields.key, setValue]);

  const onSubmit = (data: any) => {};

  if (!open) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Feature Flag</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="grid gap-3">
            <Label>Name</Label>
            <Input {...register('name')} />
            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            <Label>Flag Key</Label>
            <Input {...register('key')} />
            {errors.key && (
              <p className="text-sm text-destructive">
                {errors.key.message}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            <Label>Description</Label>
            <Textarea {...register('description')} />
          </div>

          <div className="grid gap-3">
            <Label>Type</Label>
            <Select
              value={type}
              onValueChange={(v) =>
                onTypeChange(
                  v as 'boolean' | 'string' | 'number',
                )
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="boolean">
                  Boolean
                </SelectItem>
                <SelectItem value="string">
                  String
                </SelectItem>
                <SelectItem value="number">
                  Number
                </SelectItem>
              </SelectContent>
            </Select>

            {errors?.variants && (
              <p className="text-sm text-destructive">
                {typeof errors?.variants === 'string'
                  ? errors.variants
                  : (errors?.variants as any)?.message ??
                    String(errors?.variants)}
              </p>
            )}
          </div>

          {type !== 'boolean' && (
            <div className="space-y-3">
              <div className="flex grow flex-row flex-wrap gap-2">
                {fields.map((field, index) => (
                  <Fragment key={field.id}>
                    {' '}
                    <div
                      onClick={() => {
                        setIndex(index);
                        setIsEditOpen(true);
                      }}
                      key={field.id}
                      className="max-w-3xs truncate gap-2 p-2 border rounded-md flex item-center justify-center cusror-pointer select-none"
                    >
                      <TextWithTooltip
                        text={field?.name || field?.value}
                        className=""
                      />
                    </div>
                  </Fragment>
                ))}
                {isEditOpen && (
                  <EditVariations
                    index={index}
                    isOpen={isEditOpen}
                    data={fields[index]}
                    update={update}
                    remove={remove}
                    type={type}
                    setIsEditOpen={setIsEditOpen}
                    isRemove={index >= 2}
                  />
                )}
              </div>
              {fields?.length <= 9 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (type === 'string') {
                      append({
                        name: '',
                        value: `variations ${
                          fields?.length + 1
                        }`,
                      });
                    }
                    if (type === 'number') {
                      append({
                        name: '',
                        value: fields?.length + 1,
                      });
                    }
                  }}
                >
                  + Add Variant
                </Button>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            <Label>Enabled</Label>
            <Switch
              checked={watch('enabled')}
              onCheckedChange={(v) =>
                setValue('enabled', v)
              }
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create Flag</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
