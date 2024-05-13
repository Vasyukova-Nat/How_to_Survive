import './FeedBack.css';
import { useState } from 'react';
import axios from 'axios';

const BOT_TOKEN = '6535764752:AAHkLl0nzYaUKhMP8LmZ2jLI6J9rOfyjP2M';
const CHAT_ID = '1696854409';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    title: '',
    tag: '',
    date: '',
    text: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: `Название: ${formData.title}\nТема: ${formData.tag}\nДата: ${formData.date}\nТекст: ${formData.text}`
      });
      setMessage('Данные успешно отправлены!');
      setFormData({
        title: '',
        tag: '',
        date: '',
        text: ''
      });
      setTimeout(() => {
        setMessage('');
      }, 1000);
    } catch (error) {
      setMessage('Ошибка при отправке данных!');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        Название статьи
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Коты" style={{borderRadius:'4px'}}/>
        
        Тема
        <input type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder="Как защититься от нападения котов?" />
        
        Дата
        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Дата" />
        
        Текст
        <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Коты бывают разные..." id='' cols='30' rows='5'/>
        
        <button type="submit" className='bt-send'>Отправить</button>
      </form>
      {message && <p style={{color: '#10c000'}}>{message}</p>}
    </div>
  );
};

export default FeedBack;