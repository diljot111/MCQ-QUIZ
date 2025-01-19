import React, { useState, useEffect } from "react";
import Theme from "../Theme/Theme";

function DSQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Mock 20 AI questions
  const allQuestions = [
    {
      id: 1,
      question: "What is the primary goal of data science?",
      options: [
        "A. To create databases",
        "B. To extract insights from data",
        "C. To design websites",
        "D. To implement network protocols",
      ],
      answer: "B",
    },
    {
      id: 2,
      question: "Which library in Python is commonly used for data analysis?",
      options: [
        "A. TensorFlow",
        "B. Pandas",
        "C. Matplotlib",
        "D. OpenCV",
      ],
      answer: "B",
    },
    {
      id: 3,
      question: "What does EDA stand for in data science?",
      options: [
        "A. Extensive Data Analysis",
        "B. Exploratory Data Analysis",
        "C. Extracted Data Application",
        "D. Enhanced Data Analytics",
      ],
      answer: "B",
    },
    {
      id: 4,
      question: "Which Python library is used for data visualization?",
      options: [
        "A. NumPy",
        "B. Matplotlib",
        "C. Flask",
        "D. SciPy",
      ],
      answer: "B",
    },
    {
      id: 5,
      question: "What does 'Big Data' refer to?",
      options: [
        "A. Extremely large datasets that require specialized tools to analyze",
        "B. Data stored in large databases",
        "C. Data collected over a long time",
        "D. Data that includes only numerical values",
      ],
      answer: "A",
    },
    {
      id: 6,
      question: "Which machine learning model is suitable for classification tasks?",
      options: [
        "A. Linear Regression",
        "B. Logistic Regression",
        "C. K-Means Clustering",
        "D. Principal Component Analysis",
      ],
      answer: "B",
    },
    {
      id: 7,
      question: "What is the purpose of a confusion matrix?",
      options: [
        "A. To visualize linear relationships",
        "B. To evaluate the performance of a classification model",
        "C. To cluster similar data points",
        "D. To normalize data",
      ],
      answer: "B",
    },
    {
      id: 8,
      question: "Which term describes cleaning and organizing raw data?",
      options: [
        "A. Data Visualization",
        "B. Data Preprocessing",
        "C. Data Mining",
        "D. Data Integration",
      ],
      answer: "B",
    },
    {
      id: 9,
      question: "What is overfitting in machine learning?",
      options: [
        "A. When a model performs well on training data but poorly on test data",
        "B. When a model is too simple",
        "C. When a model ignores data patterns",
        "D. When a model is trained on incomplete data",
      ],
      answer: "A",
    },
    {
      id: 10,
      question: "What does the term 'feature' mean in data science?",
      options: [
        "A. A column in a dataset",
        "B. A type of data visualization",
        "C. A step in data cleaning",
        "D. A function in programming",
      ],
      answer: "A",
    },
    {
      id: 11,
      question: "What is the purpose of normalization in data preprocessing?",
      options: [
        "A. To handle missing data",
        "B. To scale data to a specific range",
        "C. To increase dataset size",
        "D. To reduce dimensionality",
      ],
      answer: "B",
    },
    {
      id: 12,
      question: "What does PCA stand for in data science?",
      options: [
        "A. Principal Component Analysis",
        "B. Predictive Classification Algorithm",
        "C. Process Control Application",
        "D. Parameter Control Analysis",
      ],
      answer: "A",
    },
    {
      id: 13,
      question: "Which algorithm is commonly used for clustering?",
      options: [
        "A. K-Means",
        "B. Decision Trees",
        "C. Naive Bayes",
        "D. Linear Regression",
      ],
      answer: "A",
    },
    {
      id: 14,
      question: "What is the purpose of a histogram in data analysis?",
      options: [
        "A. To show relationships between two variables",
        "B. To display the frequency distribution of a variable",
        "C. To represent time-series data",
        "D. To compare different categories",
      ],
      answer: "B",
    },
    {
      id: 15,
      question: "Which of the following is NOT a type of machine learning?",
      options: [
        "A. Supervised Learning",
        "B. Unsupervised Learning",
        "C. Reinforcement Learning",
        "D. Structured Learning",
      ],
      answer: "D",
    },
    {
      id: 16,
      question: "Which metric is used to evaluate regression models?",
      options: [
        "A. Accuracy",
        "B. Mean Squared Error",
        "C. Precision",
        "D. Recall",
      ],
      answer: "B",
    },
    {
      id: 17,
      question: "Which of the following is a popular tool for big data processing?",
      options: [
        "A. Hadoop",
        "B. TensorFlow",
        "C. Flask",
        "D. OpenCV",
      ],
      answer: "A",
    },
    {
      id: 18,
      question: "What does the term 'data wrangling' mean?",
      options: [
        "A. Collecting data",
        "B. Cleaning and transforming data",
        "C. Visualizing data",
        "D. Storing data in databases",
      ],
      answer: "B",
    },
    {
      id: 19,
      question: "What does a box plot represent?",
      options: [
        "A. The frequency distribution of a variable",
        "B. The spread and summary of a dataset",
        "C. The correlation between variables",
        "D. The distribution of time-series data",
      ],
      answer: "B",
    },
    {
      id: 20,
      question: "Which Python library is best suited for numerical computations?",
      options: [
        "A. NumPy",
        "B. Matplotlib",
        "C. Scikit-learn",
        "D. Pandas",
      ],
      answer: "A",
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
    <div className="min-h-screen flex flex-col items-center py-8 bg-white dark:bg-gray-900">
      <div className="flex justify-between w-full max-w-4xl px-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">DS Quiz</h1>
        {/* <Theme />  */}
      </div>
      <div className="text-red-500 text-xl font-bold mb-4">
        Time Left: {formatTime(timeLeft)}
      </div>
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        {questions.map((q, index) => (
          <div key={q.id} className="mb-6">
            <p className="text-lg font-medium text-gray-800 dark:text-white">
              {index + 1}. {q.question}
            </p>
            <div className="pl-6">
              {q.options.map((option) => (
                <label key={option} className="block text-gray-700 dark:text-gray-300">
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

export default DSQuiz;
