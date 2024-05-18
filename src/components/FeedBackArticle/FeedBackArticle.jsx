import './FeedBackArticle.css';
import { useState } from 'react';
import axios from 'axios';

const BOT_TOKEN = '6535764752:AAHkLl0nzYaUKhMP8LmZ2jLI6J9rOfyjP2M';
const CHAT_ID = '1696854409';

const FeedBackArticle = () => {
  const [formData, setFormData] = useState({
    title: '',
    nickname: '',
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
        text: `Название: ${formData.title}\nИмя: ${formData.nickname}\nТема: ${formData.tag}\nДата: ${formData.date}\nТекст: ${formData.text}`
      });
      setMessage('Данные успешно отправлены!');
      setFormData({
        title: '',
        nickname: '',
        tag: '',
        date: '',
        text: ''
      });
      setTimeout(() => {
        setMessage('');
      }, 10000);
    } catch (error) {
      setMessage('Ошибка при отправке данных!');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-article-container">

        <svg xmlns="http://www.w3.org/2000/svg" className='edit' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"/> </g> </svg>
        Название статьи
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Коты"/>
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" className='edit-name' height="20" class="bi bi-person-square" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/> </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" className='edit-name' viewBox="0 0 16 16"> <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/> <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
        Ваше имя
        <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="Шлёпа"/>
        
        <svg xmlns="http://www.w3.org/2000/svg" className='mark' viewBox="0 0 16 16"> <path d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/> </svg>
        Тема
        <input type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder="Как защититься от нападения котов?" />
        
        <svg xmlns="http://www.w3.org/2000/svg" className="calendar" viewBox="0 0 24 24"><path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"/></svg>
        Дата 
        <input type="date" name="date" value={formData.date} onChange={handleChange} style={{color: '#808080'}} />
        
        <svg xmlns="http://www.w3.org/2000/svg" className='txt' viewBox="0 0 16 16"> <path d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/> </svg>
        Текст
        <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Коты бывают разные..." id='' cols='30' rows='8'/>
        
        <button type="submit" className='bt-send'>Отправить <img className="tick" src="/tick.svg" alt="F" /></button>
      
        {message && <p style={{color: '#10c000'}}>{message}</p>}
        
      </form>
      
    </div>
  );
};

export default FeedBackArticle;