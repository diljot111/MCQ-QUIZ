import React, { useState, useEffect } from "react";

function AiQuiz(){
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  // Mock 20 AI questions
  const allQuestions = [
    { id: 1, question: "What is Artificial Intelligence?", options: ["A", "B", "C", "D"], answer: "A" },
    { id: 2, question: "What is Machine Learning?", options: ["A", "B", "C", "D"], answer: "B" },
    { id: 3, question: "What is Deep Learning?", options: ["A", "B", "C", "D"], answer: "C" },
    // Add more questions here (up to 20)
  ];

  useEffect(() => {
    // Shuffle and pick 15 random questions
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 15));

    // Timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          alert("Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4">AI Quiz</h1>
      <div className="text-red-500 text-xl font-bold mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        {questions.map((q, index) => (
          <div key={q.id} className="mb-6">
            <p className="text-lg font-medium">
              {index + 1}. {q.question}
            </p>
            <ul className="list-disc pl-6">
              {q.options.map((option, optIndex) => (
                <li key={optIndex} className="text-gray-700">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={() => alert("Quiz Submitted!")}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default AiQuiz;
