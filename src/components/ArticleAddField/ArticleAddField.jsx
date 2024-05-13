// import "./ArticleAddField.css";

import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    fetch('http://example.com/saveText', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Text saved successfully');
      } else {
        console.error('Error saving text');
      }
    });

    setText('');
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Save Text</button>
    </div>
  );
};

export default TextInput;