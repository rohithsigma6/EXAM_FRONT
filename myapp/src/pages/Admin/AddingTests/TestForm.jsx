import React, { useState } from 'react';
import QuestionForm from './QuestionForm';

const TestForm = () => {
  const [testDetails, setTestDetails] = useState({
    time: '',
    testName: '',
    testAbout: '',
    testSubject: '',
    numQuestions: '',
  });

  const [questions, setQuestions] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTestDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleChangeQuestion = (index, updatedQuestion) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = updatedQuestion;
      return updatedQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: '',
      },
    ]);
  };

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const handleFormSubmit = () => {
    // Here, you can call the API to store the test data and questions
    const testData = {
      ...testDetails,
      questions,
    };
    console.log(testData);
    // Call the API to store the data
    // Example: fetch('apiUrl', { method: 'POST', body: JSON.stringify(testData) })
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Test</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block font-bold text-gray-700">Time:</label>
          <input
            type="text"
            name="time"
            value={testDetails.time}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Test Name:</label>
          <input
            type="text"
            name="testName"
            value={testDetails.testName}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Test About:</label>
          <input
            type="text"
            name="testAbout"
            value={testDetails.testAbout}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Test Subject:</label>
          <input
            type="text"
            name="testSubject"
            value={testDetails.testSubject}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Number of Questions:</label>
          <input
            type="number"
            name="numQuestions"
            value={testDetails.numQuestions}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleAddQuestion}
          className="block px-4 py-2 text-white bg-blue-600 rounded-lg"
        >
          Add Questions
        </button>

        {questions.map((question, index) => (
          <QuestionForm
            key={index}
            question={question}
            index={index}
            onChangeQuestion={handleChangeQuestion}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}

        <button
          type="submit"
          className="block px-4 py-2 text-white bg-green-600 rounded-lg"
        >
          Submit Test
        </button>
      </form>
    </div>
  );
};

export default TestForm;
