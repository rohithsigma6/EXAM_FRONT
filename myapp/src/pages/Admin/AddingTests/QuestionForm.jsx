import React from 'react';

const QuestionForm = ({ question, index, onChangeQuestion, onDeleteQuestion }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeQuestion(index, { ...question, [name]: value });
  };

  const handleDeleteQuestion = () => {
    onDeleteQuestion(index);
  };

  return (
    <div className="mb-6">
      <div className="mb-4">
        <label className="block font-bold text-gray-700">Question {index + 1}:</label>
        <input
          type="text"
          name="question"
          value={question.question}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <div className="space-y-2">
        <div>
          <label className="block font-bold text-gray-700">Option 1:</label>
          <input
            type="text"
            name="option1"
            value={question.option1}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Option 2:</label>
          <input
            type="text"
            name="option2"
            value={question.option2}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Option 3:</label>
          <input
            type="text"
            name="option3"
            value={question.option3}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-bold text-gray-700">Option 4:</label>
          <input
            type="text"
            name="option4"
            value={question.option4}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
      </div>
      <div className="mt-2">
        <label className="block font-bold text-gray-700">Correct Answer:</label>
        <select
          name="correctAnswer"
          value={question.correctAnswer}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border rounded-lg"
          required
        >
          <option value="">Select Correct Answer</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <button
        type="button"
        className="block mt-4 px-4 py-2 text-white bg-red-600 rounded-lg"
        onClick={handleDeleteQuestion}
      >
        Delete Question
      </button>
    </div>
  );
};

export default QuestionForm;
