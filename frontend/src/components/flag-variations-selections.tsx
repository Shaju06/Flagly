import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FlagVariationsSelection() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Boolean" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="boolean">
          <div className="flex flex-col">
            <span className="font-medium">Boolean</span>
            <span className="text-xs text-muted-foreground">
              true or false
            </span>
          </div>
        </SelectItem>

        <SelectItem value="string">
          <div className="flex flex-col">
            <span className="font-medium">String</span>
            <span className="text-xs text-muted-foreground">
              text based values
            </span>
          </div>
        </SelectItem>
        <SelectItem value="number">
          <div className="flex flex-col">
            <span className="font-medium">Number</span>
            <span className="text-xs text-muted-foreground">
              numeric values
            </span>
          </div>
        </SelectItem>
        <SelectItem value="json">
          <div className="flex flex-col">
            <span className="font-medium">Json</span>
            <span className="text-xs text-muted-foreground">
              structured object
            </span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
