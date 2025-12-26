import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <h2
      className="flex justify-center items-center h-screen text-4xl font-bold
    "
    >
      Falgly
      <Button>Login</Button>
      <ModeToggle />
    </h2>
  );
}
