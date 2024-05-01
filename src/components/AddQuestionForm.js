// components/AddQuestionForm.js

import React, { useState } from 'react';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || options.some(option => !option) || correctAnswer === null) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    const newQuestion = {
      id: Date.now(),
      description: question,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      correct: correctAnswer
    };
    onAddQuestion(newQuestion);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Вопрос:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <br />
      {[1, 2, 3, 4].map(index => (
        <label key={index}>
          Вариант {index}:
          <input type="text" value={options[index - 1]} onChange={(e) => handleOptionChange(index - 1, e.target.value)} />
        </label>
      ))}
      <br />
      <label>
        Правильный ответ:
        <select value={correctAnswer === null ? '' : String(correctAnswer)} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}>
          <option value="">Выбрать</option>
          {[1, 2, 3, 4].map(index => (
            <option key={index} value={index}>{'Вариант ' + index}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Добавить вопрос</button>
    </form>
  );
};

export default AddQuestionForm;
