import { useState } from 'react';

export default function useModal(initialStatus = false) {
  const [isOpen, setIsOpen] = useState(initialStatus);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  return {
    close,
    isOpen,
    open,
  };
}
