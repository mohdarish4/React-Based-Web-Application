import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserData } from '../../types';

export const RichTextEditor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const userData: UserData = JSON.parse(savedData);
      setContent(`
        <h2>User Profile</h2>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Address:</strong><br>${userData.address.replace(/\n/g, '<br>')}</p>
        <p><strong>Phone:</strong> ${userData.phone}</p>
        <hr>
        <p>Last Updated: ${new Date().toLocaleString()}</p>
      `);
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    
  };

  return (
    <div style={{ margin: '20px', minHeight: '300px' }}>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ]
        }}
      />
    </div>
  );
};