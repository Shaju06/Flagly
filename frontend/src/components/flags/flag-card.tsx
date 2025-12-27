import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Hash, Text, ToggleLeft } from 'lucide-react';
import { useState } from 'react';
import { EditFlagDialog } from './edit-flag-dialog';

const typeIcon = {
  boolean: ToggleLeft,
  string: Text,
  number: Hash,
};

export function FlagCard({ flag }) {
  const Icon = typeIcon[flag.type];
  const [editingFlag, setEditingFlag] = useState(null);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-md bg-muted p-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>

          <div>
            <p className="font-medium">{flag.key}</p>
            <p className="text-sm text-muted-foreground">
              {flag.type} • {flag.env}
            </p>
          </div>
        </div>

        <Switch checked={flag.enabled} />
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        Rollout: {flag.rollout}%
      </CardContent>

      <CardFooter>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setEditingFlag(flag)}
        >
          Edit
        </Button>
      </CardFooter>
      {editingFlag && (
        <EditFlagDialog
          flag={editingFlag}
          open
          onClose={() => setEditingFlag(null)}
        />
      )}
    </Card>
  );
}
