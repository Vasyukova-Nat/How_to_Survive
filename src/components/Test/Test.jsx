import { useState } from "react";
import "./Test.css";

const Test = ({ questions }) => {
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
              <button
                className="bt-answ-option"
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {showAnswer && <p>Верный ответ: {questions[currentQuestion].correctAnswer}</p>}
          <button className="bt-next" onClick={handleNextQuestion}>
            Следующий вопрос
          </button>
        </div>
      ) : (
        <div>
          <h2>Опрос завершён!</h2>
          <p>
            Ваш результат: {score} из {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Test;
