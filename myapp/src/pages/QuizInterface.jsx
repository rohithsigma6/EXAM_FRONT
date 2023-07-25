import React, { useState, useEffect } from 'react';
import './Question.css'; // Import custom styles for the component
import Timer from './Timer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const QuizInterface = () => {
    const navigate = useNavigate()
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [timer, setTimer] = useState(30 * 60); // 30 minutes in seconds
useEffect(() => {
    // Fetch questions data from the API
    const examID = localStorage.getItem("examId")
    axios.post('http://localhost:1234/v1/gettest',{
        _id:examID
    })
      .then((response) => response.data.testQuestions)
      .then((data) => setQuestionsData(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionChange = (e) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestionIndex]: e.target.value });
  };

  const handleRemoveOption = () => {
    const updatedSelectedOptions = { ...selectedOptions };
    delete updatedSelectedOptions[currentQuestionIndex];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleQuestionNavigation = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  const handleTestSubmission = async() => {
      let score = 0;
      for (const index in selectedOptions) {
        if (selectedOptions[index] === questionsData[index].correctAnswer) {
          score++;
      }

      
    }
    alert(`Your score is ${score} out of ${questionsData.length}.`);
  };

  // Implement the rendering and UI logic for the exam portal
  return (
    <div className="exam-portal">
      {/* Timer */}
      <div className="timer">
        Timer: {Math.floor(timer / 60).toString().padStart(2, '0')}:
        {(timer % 60).toString().padStart(2, '0')}
      </div>

      {/* Questions and Options */}
      {questionsData.length > 0 && (
        <>
          <div className="questions-section">
            <div className="question">
              <h3 className="question-text">{questionsData[currentQuestionIndex].question}</h3>
              <div className="options">
                {questionsData[currentQuestionIndex].options.map((option) => (
                  <div key={option} className="option">
                    <input
                      type="radio"
                      id={option}
                      name="options"
                      value={option}
                      checked={selectedOptions[currentQuestionIndex] === option}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor={option}>{option}</label>
                    {selectedOptions[currentQuestionIndex] === option && (
                      <button className="remove-btn" onClick={handleRemoveOption}>
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="nav-buttons">
              <button className="nav-button" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                Previous Question
              </button>
              <button
                className="nav-button"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questionsData.length - 1}
              >
                Next Question
              </button>
            </div>
            <div className="question-navigation">
              {questionsData.map((question, index) => (
                <div
                  key={question.id}
                  className={`question-number ${
                    selectedOptions[index]
                      ? 'answered'
                      : index === currentQuestionIndex
                      ? 'current'
                      : 'unanswered'
                  }`}
                  onClick={() => handleQuestionNavigation(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
           
              <button className="submit-test" onClick={handleTestSubmission}>
                Submit Test
              </button>
         
          </div>
        </>
      )}
      {questionsData.length === 0 && <div className="loading">Loading questions...</div>}
    </div>
  );
};

export default QuizInterface;
