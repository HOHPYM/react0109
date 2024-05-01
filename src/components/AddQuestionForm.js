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
      alert('Please fill in all fields');
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
        Question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <br />
      {[1, 2, 3, 4].map(index => (
        <label key={index}>
          Option {index}:
          <input type="text" value={options[index - 1]} onChange={(e) => handleOptionChange(index - 1, e.target.value)} />
        </label>
      ))}
      <br />
      <label>
        Correct Answer:
        <select value={correctAnswer === null ? '' : String(correctAnswer)} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}>
          <option value="">Select</option>
          {[1, 2, 3, 4].map(index => (
            <option key={index} value={index}>{'Option ' + index}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestionForm;
