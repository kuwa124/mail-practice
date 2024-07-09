// useToolbar.ts
import { TOOLBAR_BUTTONS } from '@/components/Toolbar/constants';
import { useState } from 'react';

export const useToolbar = (onNewMessage: () => void) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleButtonClick = (action?: string) => {
    if (action === 'newMessage') {
      onNewMessage();
    }
    // 他のアクションがあれば、ここに追加
  };

  const buttons = TOOLBAR_BUTTONS.map((button) => ({
    ...button,
    onClick: () => handleButtonClick(button.action),
  }));

  return {
    hoveredButton,
    setHoveredButton,
    buttons,
  };
};
