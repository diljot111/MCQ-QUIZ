import React, { useState, useEffect } from "react";

function AiQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Mock 20 AI questions
  const allQuestions = [
      { 
        id: 1, 
        question: "What is Artificial Intelligence?", 
        options: [
          "A. Machines mimicking human behavior", 
          "B. Machines performing complex calculations", 
          "C. A subset of Machine Learning", 
          "D. A programming language for AI"
        ], 
        answer: "A"
      },
      { 
        id: 2, 
        question: "Which of the following is a type of Machine Learning?", 
        options: [
          "A. Supervised Learning", 
          "B. Unsupervised Learning", 
          "C. Reinforcement Learning", 
          "D. All of the above"
        ], 
        answer: "D"
      },
      { 
        id: 3, 
        question: "What is Deep Learning?", 
        options: [
          "A. Learning concepts manually", 
          "B. Machine Learning using Neural Networks", 
          "C. Learning about algorithms in-depth", 
          "D. None of the above"
        ], 
        answer: "B"
      },
      { 
        id: 4, 
        question: "Which library is widely used for Deep Learning?", 
        options: [
          "A. TensorFlow", 
          "B. NumPy", 
          "C. Pandas", 
          "D. Matplotlib"
        ], 
        answer: "A"
      },
      { 
        id: 5, 
        question: "What is the main goal of supervised learning?", 
        options: [
          "A. To find hidden patterns in data", 
          "B. To learn from labeled data", 
          "C. To learn without any human supervision", 
          "D. To maximize rewards"
        ], 
        answer: "B"
      },
      { 
        id: 6, 
        question: "Which of the following is an application of AI?", 
        options: [
          "A. Image Recognition", 
          "B. Language Translation", 
          "C. Chatbots", 
          "D. All of the above"
        ], 
        answer: "D"
      },
      { 
        id: 7, 
        question: "What does NLP stand for in AI?", 
        options: [
          "A. Natural Language Processing", 
          "B. Neural Language Programming", 
          "C. Network Language Parsing", 
          "D. None of the above"
        ], 
        answer: "A"
      },
      { 
        id: 8, 
        question: "Which of the following is NOT a type of Neural Network?", 
        options: [
          "A. Convolutional Neural Network (CNN)", 
          "B. Recurrent Neural Network (RNN)", 
          "C. Decision Trees", 
          "D. Feedforward Neural Network"
        ], 
        answer: "C"
      },
      { 
        id: 9, 
        question: "What is the purpose of backpropagation in Neural Networks?", 
        options: [
          "A. To initialize weights", 
          "B. To propagate the inputs forward", 
          "C. To adjust weights based on errors", 
          "D. To visualize the network"
        ], 
        answer: "C"
      },
      { 
        id: 10, 
        question: "What is overfitting in Machine Learning?", 
        options: [
          "A. When the model performs well on training data but poorly on unseen data", 
          "B. When the model is too simple", 
          "C. When the model ignores patterns", 
          "D. When the model uses outdated data"
        ], 
        answer: "A"
      },
      { 
        id: 11, 
        question: "What is the use of a confusion matrix?", 
        options: [
          "A. To evaluate classification models", 
          "B. To create decision trees", 
          "C. To store training data", 
          "D. To build neural networks"
        ], 
        answer: "A"
      },
      { 
        id: 12, 
        question: "Which activation function outputs values between 0 and 1?", 
        options: [
          "A. ReLU", 
          "B. Sigmoid", 
          "C. Tanh", 
          "D. Softmax"
        ], 
        answer: "B"
      },
      { 
        id: 13, 
        question: "What is the primary goal of reinforcement learning?", 
        options: [
          "A. To learn from labeled data", 
          "B. To learn by trial and error", 
          "C. To classify data", 
          "D. To predict future values"
        ], 
        answer: "B"
      },
      { 
        id: 14, 
        question: "What is a key characteristic of unsupervised learning?", 
        options: [
          "A. Learning from labeled data", 
          "B. Learning from unlabeled data", 
          "C. Using pre-trained models", 
          "D. Using reinforcement signals"
        ], 
        answer: "B"
      },
      { 
        id: 15, 
        question: "Which algorithm is commonly used for clustering?", 
        options: [
          "A. K-Means", 
          "B. SVM", 
          "C. Naive Bayes", 
          "D. Decision Trees"
        ], 
        answer: "A"
      },
      { 
        id: 16, 
        question: "Which evaluation metric is best for imbalanced datasets?", 
        options: [
          "A. Accuracy", 
          "B. Precision", 
          "C. Recall", 
          "D. F1 Score"
        ], 
        answer: "D"
      },
      { 
        id: 17, 
        question: "What is the primary purpose of a loss function?", 
        options: [
          "A. To adjust weights", 
          "B. To measure model error", 
          "C. To train the model", 
          "D. To normalize data"
        ], 
        answer: "B"
      },
      { 
        id: 18, 
        question: "Which type of data is used in Time Series Analysis?", 
        options: [
          "A. Structured Data", 
          "B. Sequential Data", 
          "C. Unstructured Data", 
          "D. Categorical Data"
        ], 
        answer: "B"
      },
      { 
        id: 19, 
        question: "What is the goal of PCA (Principal Component Analysis)?", 
        options: [
          "A. To classify data", 
          "B. To reduce dimensionality", 
          "C. To train the model faster", 
          "D. To increase dataset size"
        ], 
        answer: "B"
      },
      { 
        id: 20, 
        question: "What is transfer learning in AI?", 
        options: [
          "A. Training from scratch", 
          "B. Using pre-trained models for new tasks", 
          "C. Training multiple models simultaneously", 
          "D. Using unsupervised learning in a supervised way"
        ], 
        answer: "B"
      },
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

  // Handle checkbox change
  const handleCheckboxChange = (questionId, option) => {
    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev };
      if (!newAnswers[questionId]) {
        newAnswers[questionId] = [];
      }
      const selectedIndex = newAnswers[questionId].indexOf(option);
      if (selectedIndex === -1) {
        newAnswers[questionId].push(option); // Add option if not selected
      } else {
        newAnswers[questionId].splice(selectedIndex, 1); // Remove option if selected
      }
      return newAnswers;
    });
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
            <div className="pl-6">
              {q.options.map((option) => (
                <label key={option} className="block">
                  <input
                    type="checkbox"
                    checked={selectedAnswers[q.id]?.includes(option) || false}
                    onChange={() => handleCheckboxChange(q.id, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
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
}

export default AiQuiz;
