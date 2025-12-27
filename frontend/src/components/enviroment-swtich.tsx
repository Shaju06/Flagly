import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

export function EnvironmentSwitcher({
  value,
  onChange,
}: {
  value: 'dev' | 'staging' | 'prod';
  onChange: (value: 'dev' | 'staging' | 'prod') => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-32">
        {value}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dev">Dev</SelectItem>
        <SelectItem value="staging">Staging</SelectItem>
        <SelectItem value="prod">Prod</SelectItem>
      </SelectContent>
    </Select>
  );
}
