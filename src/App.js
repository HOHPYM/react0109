import React, { useState } from 'react';
import Item from './components/item'; 
import AddQuestionForm from './components/AddQuestionForm';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
  };

  const clearQuestions = () => {
    setQuestions([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Item questions={questions} />
        <AddQuestionForm onAddQuestion={addQuestion} />
        <button onClick={clearQuestions}>Clear Questions</button>
      </header>
    </div>
  );
}

export default App;
