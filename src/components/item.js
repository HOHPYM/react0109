import React, { useState } from 'react';
import './item.css';

const Item = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const riddles = [
    {
      id: 1,
      description: "Сколько ног у улитки?",
      option1: "2",
      option2: "4",
      option3: "0",
      option4: "1",
      correct: 3
    },
    
    {
      id: 2,
      description: "Что можно сломать, называя его?",
      option1: "Тишину",
      option2: "Яйцо",
      option3: "Стекло",
      option4: "Сердце",
      correct: 4
    },
    {
      id: 3,
      description: "Что всегда уходит вместе с вами, но никогда не возвращается?",
      option1: "Мысли",
      option2: "Деньги",
      option3: "Время",
      option4: "Сон",
      correct: 3
    },
  ];

  const handleAnswerClick = (id, option) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [id]: option
    }));
  };

  return (
    <div className="item-container">
      {riddles.map(riddle => (
        <div key={riddle.id} className="riddle">
          <p>{riddle.description}</p>
          <ul>
            <li onClick={() => handleAnswerClick(riddle.id, 1)} className={selectedAnswers[riddle.id] === 1 ? "selected" : ""}>{riddle.option1}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 2)} className={selectedAnswers[riddle.id] === 2 ? "selected" : ""}>{riddle.option2}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 3)} className={selectedAnswers[riddle.id] === 3 ? "selected" : ""}>{riddle.option3}</li>
            <li onClick={() => handleAnswerClick(riddle.id, 4)} className={selectedAnswers[riddle.id] === 4 ? "selected" : ""}>{riddle.option4}</li>
          </ul>
          {selectedAnswers[riddle.id] && (selectedAnswers[riddle.id] === riddle.correct ? <p className="correct-answer">Правильно!</p> : <p className="incorrect-answer">Неправильно!</p>)}
        </div>
      ))}
    </div>
  );
}

export default Item;
