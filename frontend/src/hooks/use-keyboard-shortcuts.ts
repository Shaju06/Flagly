'use client';

type Shortcuts = {
  onNew?: () => void;
  onEscape?: () => void;
};

export function useKeyboardShortcuts({
  onNew,
  onEscape,
}: Shortcuts) {
  return null;
  //   useEffect(() => {
  //     const handler = (e: KeyboardEvent) => {
  //       const target = e.target as HTMLElement;
  //       if (['INPUT', 'TEXTAREA'].includes(target.tagName))
  //         return;

  //       if (e.key === 'n' && onNew) {
  //         e.preventDefault();
  //         onNew();
  //       }

  //       if (e.key === 'Escape' && onEscape) {
  //         onEscape();
  //       }
  //     };

  //     window.addEventListener('keydown', handler);
  //     return () =>
  //       window.removeEventListener('keydown', handler);
  //   }, [onNew, onEscape]);
}
