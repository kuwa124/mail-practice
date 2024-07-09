import { useState } from 'react';

export const useNewMessage = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [editorType, setEditorType] = useState('テキスト');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // メッセージ送信のロジックをここに実装
    console.log('Message sent:', { to, subject, body, editorType });
  };

  return {
    to,
    setTo,
    subject,
    setSubject,
    body,
    setBody,
    editorType,
    setEditorType,
    handleSubmit,
  };
};
