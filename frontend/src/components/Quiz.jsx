import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'Which age is considered as child labor?',
    options: ['Below 18', 'Above 20', 'Above 18'],
    correctAnswer: 'Below 18',
  },
  {
    id: 2,
    text: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin'],
    correctAnswer: 'Paris',
  },
  // Add more questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [totalScore, setTotalScore] = useState(null);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        score += 3; // Each question carries 3 marks
      }
    }
    return score;
  };

  const updateTotalScore = () => {
    const score = calculateScore();
    setTotalScore(score);
  };

  return (
    <>
    <body class ="bg-gray-200">
    <header class="fixed z-40 flex items-center justify-between w-screen px-4 overflow-hidden text-lg bg-white border-b-2 border-black shadow-md h-header border-bsprime">
        <div class="w-1/6">
            <a class="text-lg font-bold text-violet-500" href="/">Sih Quiz</a>
        </div>
        <nav class="flex flex-row items-center justify-center w-4/6 gap-10">
            <a href="#"><span class="font-medium text-accent transition-colors rsease-in-out hover:text-accent active:text-blue-400">How it works</span></a>
            <a href="#"><span class="font-medium text-black transition-colors ease-in-out hover:text-accent active:text-blue-400">Features</span></a>
            <a href="#"><span class="font-medium text-black transition-colors ease-in-out hover:text-accent active:text-blue-400">About us  </span></a>
            <a href="#"><span class="font-medium text-black transition-colors ease-in-out hover:text-accent active:text-blue-400">Team</span></a>
        </nav>
    </header>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-2/3 p-8 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Quiz Title</h1>

        {totalScore === null ? (
          <div className="mb-6">
            <p className="text-xl font-medium">
              {currentQuestion + 1}. {questions[currentQuestion].text}
            </p>
            <div className="mt-6 space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={userAnswers[currentQuestion] === option}
                    onChange={() => handleAnswerSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mb-6">
            <p className="text-xl font-medium">Total Score: {totalScore}</p>
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={previousQuestion}
            className={`${
              currentQuestion === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600'
            } px-4 py-2 text-white rounded transition duration-300`}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          {totalScore === null ? (
            <button
              onClick={() => {
                nextQuestion();
                if (currentQuestion === questions.length - 1) {
                  updateTotalScore();
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded transition duration-300"
            >
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded transition duration-300"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      </div>
    </body>
    </>
  );
};

export default Quiz;
