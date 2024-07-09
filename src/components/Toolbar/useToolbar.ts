// useToolbar.ts
import { useState } from 'react';
import { TOOLBAR_BUTTONS } from './constants';

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
