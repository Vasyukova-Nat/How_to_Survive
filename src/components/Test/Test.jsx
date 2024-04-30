import { useState } from 'react';
import './Test.css';

const questions = [
  {
    question: 'Что делать при кровотечении?',
    options: ['Наложить жгут выше места кровотечения', 
        'Наложить бинт на рану и прижать', 
        'Поднести рану к источнику тепла', 
        'Не трогать рану'],
    correctAnswer: 'Наложить бинт на рану и прижать'
  },
  {
    question: 'Как оказать помощь при ожоге?',
    options: ['Нанести лед на поврежденную область', 
        'Нанести масло на ожог', 
        'Промыть ожог холодной водой', 
        'Покрыть ожог маской'],
    correctAnswer: 'Промыть ожог холодной водой'
  }
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="Test">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button className="bt-answ-option" key={index} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
          </div>
          {showAnswer && <p>{questions[currentQuestion].correctAnswer}</p>}
          <button className="bt-next" onClick={handleNextQuestion}>Следующий вопрос</button>
        </div>
      ) : (
        <div>
          <h2>Опрос завершён!</h2>
          <p>Ваш результат: {score} из {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Test;