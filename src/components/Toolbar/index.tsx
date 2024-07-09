// Toolbar.tsx
'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { useToolbar } from '@/components/Toolbar/useToolbar';

interface ToolbarProps {
  onNewMessage: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onNewMessage }) => {
  const { hoveredButton, setHoveredButton, buttons } = useToolbar(onNewMessage);

  return (
    <div className='bg-gray-100 p-4 flex items-center'>
      {buttons.map((button) => (
        <div key={button.message} className='relative mr-4'>
          <button
            className='p-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2'
            onMouseEnter={() => setHoveredButton(button.message)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={button.onClick}
            aria-label={button.ariaLabel}
          >
            <FontAwesomeIcon
              icon={button.icon}
              className={`text-2xl ${
                hoveredButton === button.message
                  ? 'text-blue-500'
                  : 'text-gray-600'
              }`}
            />
          </button>
          {hoveredButton === button.message && (
            <div className='absolute z-10 bg-black text-white text-sm rounded py-2 px-3 left-full top-full ml-1 mt-1 whitespace-nowrap'>
              {button.message}
            </div>
          )}
        </div>
      ))}
      <div className='ml-auto flex items-center'>
        <div className='relative'>
          <input
            type='text'
            placeholder='すべて'
            className='border rounded-l px-3 py-2 text-lg'
            aria-label='フィルター選択'
          />
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3'
            aria-label='フィルターオプションを開く'
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className='text-gray-400 text-xl'
            />
          </button>
        </div>
        <div className='relative ml-2'>
          <input
            type='text'
            placeholder='検索'
            className='border-t border-b border-r rounded-r px-3 py-2 pl-10 text-lg'
            aria-label='検索'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
          />
          <button
            className='absolute right-3 top-1/2 transform -translate-y-1/2'
            aria-label='検索をクリア'
          >
            <FontAwesomeIcon icon={faTimes} className='text-gray-400 text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
