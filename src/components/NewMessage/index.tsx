import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNewMessage } from './useNewMessage';
import { EDITOR_TYPES, MAX_ATTACHMENT_SIZE } from './constants';

const NewMessage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    to,
    setTo,
    subject,
    setSubject,
    body,
    setBody,
    editorType,
    setEditorType,
    handleSubmit,
  } = useNewMessage();

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 shadow-lg'>
      <div className='flex justify-between mb-4'>
        <div className='flex space-x-2'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            送信
          </button>
          <button
            type='button'
            className='border border-gray-300 px-4 py-2 rounded'
          >
            <FontAwesomeIcon icon={faPaperclip} />
          </button>
        </div>
        <button type='button' onClick={onClose} className='text-gray-500'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='to'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          宛先:
        </label>
        <input
          id='to'
          type='text'
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='subject'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          件名:
        </label>
        <input
          id='subject'
          type='text'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='editor-type'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          エディターの種類:
        </label>
        <select
          id='editor-type'
          value={editorType}
          onChange={(e) => setEditorType(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        >
          {EDITOR_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64'
        placeholder='メッセージを入力してください...'
      />

      <div className='mt-4'>
        <p className='text-sm text-gray-600'>
          ファイルをドラッグ＆ドロップするか、クリップボードから画像を貼り付けてください。
        </p>
        <button
          type='button'
          className='mt-2 bg-gray-200 text-gray-700 px-4 py-2 rounded'
        >
          添付ファイル
        </button>
        <p className='mt-2 text-sm text-gray-500'>
          添付可能なファイルは最大で{MAX_ATTACHMENT_SIZE} MBです。
        </p>
      </div>
    </form>
  );
};

export default NewMessage;
