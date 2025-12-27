import { FlagCard } from './flag-card';

export function FlagsGrid({ flags }) {
  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      {flags.map((flag) => (
        <FlagCard key={flag.key} flag={flag} />
      ))}
    </div>
  );
}
