import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FlagVariationsSelection } from './flag-variations-selections';

export function CreateFlagDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Create new flag</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create flag</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-3">
              <Label htmlFor="name">
                Name{''}
                <span className="text-red-400 text-xl">
                  *
                </span>
              </Label>
              <Input id="name" name="name" />
              <Label htmlFor="key">
                Key{' '}
                <span className="text-red-400 text-xl">
                  *
                </span>
              </Label>
              <Input id="key" name="key" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                defaultValue="@peduarte"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="variations">Variations</Label>
              <FlagVariationsSelection />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
