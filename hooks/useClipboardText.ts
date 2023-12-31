'use client';

import { useContext } from 'react';
import confetti from 'canvas-confetti';

import { ToastContext } from '@/components/toast/ToastContext';

const useClipboardText = (text: string) => {
  const showToast = useContext(ToastContext);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (showToast) {
          showToast('Success, email copied to clipboard!', 'success');
          confetti();
        }
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return { handleCopyClick };
};

export default useClipboardText;
