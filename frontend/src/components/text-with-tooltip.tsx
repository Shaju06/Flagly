'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import * as React from 'react';

type Props = {
  text: string | number;
  className?: string;
  maxWidth?: number | string;
};

export function TextWithTooltip({
  text,
  className,
  maxWidth = 200,
}: Props) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] =
    React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setIsTruncated(el.scrollWidth > el.clientWidth);
  }, [text]);

  const content = (
    <span
      ref={ref}
      className={cn(
        'block w-full max-w-[300px] truncate overflow-hidden text-ellipsis',
        className,
      )}
      style={{ maxWidth }}
    >
      {text}
    </span>
  );

  if (!isTruncated) return content;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent>{text}</TooltipContent>
    </Tooltip>
  );
}
