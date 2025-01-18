import React, { useState, useEffect } from "react";

function MERNQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});


        
    const allQuestions = [
  {
    id: 1,
    question: "What does the MERN stack stand for?",
    options: [
      "A. MongoDB, Express.js, React, Node.js",
      "B. MySQL, Express.js, React, Node.js",
      "C. MongoDB, Express.js, Redux, Node.js",
      "D. MongoDB, Express.js, Ruby, Node.js",
    ],
    answer: "A",
  },
  {
    id: 2,
    question: "Which of the following is a NoSQL database in the MERN stack?",
    options: [
      "A. MongoDB",
      "B. MySQL",
      "C. PostgreSQL",
      "D. SQLite",
    ],
    answer: "A",
  },
  {
    id: 3,
    question: "What is the role of Express.js in the MERN stack?",
    options: [
      "A. Frontend framework",
      "B. Backend web application framework",
      "C. Database management system",
      "D. Testing tool",
    ],
    answer: "B",
  },
  {
    id: 4,
    question: "Which library is used in the MERN stack for building user interfaces?",
    options: [
      "A. React",
      "B. Angular",
      "C. Vue",
      "D. Svelte",
    ],
    answer: "A",
  },
  {
    id: 5,
    question: "What is the primary purpose of Node.js in the MERN stack?",
    options: [
      "A. To build APIs and handle server-side logic",
      "B. To store data",
      "C. To create static HTML pages",
      "D. To style web pages",
    ],
    answer: "A",
  },
  {
    id: 6,
    question: "Which command is used to initialize a new Node.js project?",
    options: [
      "A. npm init",
      "B. node start",
      "C. npm install",
      "D. node init",
    ],
    answer: "A",
  },
  {
    id: 7,
    question: "What is the purpose of the `package.json` file in a Node.js project?",
    options: [
      "A. To store database configurations",
      "B. To manage project dependencies and metadata",
      "C. To define React components",
      "D. To build the frontend",
    ],
    answer: "B",
  },
  {
    id: 8,
    question: "Which of the following is used to create RESTful APIs in Express.js?",
    options: [
      "A. Routes",
      "B. Models",
      "C. Controllers",
      "D. Services",
    ],
    answer: "A",
  },
  {
    id: 9,
    question: "What is JSX in React?",
    options: [
      "A. A syntax extension that allows mixing HTML with JavaScript",
      "B. A database query language",
      "C. A testing framework",
      "D. A CSS preprocessor",
    ],
    answer: "A",
  },
  {
    id: 10,
    question: "How do you fetch data from an API in React?",
    options: [
      "A. By using the `fetch` function or libraries like Axios",
      "B. By using SQL queries",
      "C. By directly accessing the database",
      "D. By using the `useState` hook",
    ],
    answer: "A",
  },
  {
    id: 11,
    question: "Which lifecycle method is used to fetch data in class components?",
    options: [
      "A. componentDidMount",
      "B. componentWillUpdate",
      "C. shouldComponentUpdate",
      "D. render",
    ],
    answer: "A",
  },
  {
    id: 12,
    question: "What is the purpose of the `useEffect` hook in React?",
    options: [
      "A. To manage component state",
      "B. To handle side effects like fetching data",
      "C. To define routes",
      "D. To build forms",
    ],
    answer: "B",
  },
  {
    id: 13,
    question: "What is middleware in Express.js?",
    options: [
      "A. A function that handles HTTP requests",
      "B. A function that processes requests between the client and the server",
      "C. A database query tool",
      "D. A React component",
    ],
    answer: "B",
  },
  {
    id: 14,
    question: "What is MongoDB primarily used for in the MERN stack?",
    options: [
      "A. Frontend development",
      "B. Backend server logic",
      "C. Storing and retrieving data",
      "D. Managing APIs",
    ],
    answer: "C",
  },
  {
    id: 15,
    question: "Which command is used to install React in a project?",
    options: [
      "A. npx create-react-app my-app",
      "B. npm install react",
      "C. npm install react-scripts",
      "D. node create-react-app my-app",
    ],
    answer: "A",
  },
  {
    id: 16,
    question: "How do you define a schema in MongoDB?",
    options: [
      "A. Using Mongoose",
      "B. By writing SQL queries",
      "C. By creating a model in React",
      "D. By defining routes in Express.js",
    ],
    answer: "A",
  },
  {
    id: 17,
    question: "What does the `res.send` method do in Express.js?",
    options: [
      "A. Sends an HTTP response to the client",
      "B. Sends a database query",
      "C. Handles client-side routing",
      "D. Compiles JavaScript code",
    ],
    answer: "A",
  },
  {
    id: 18,
    question: "What is the purpose of Redux in a MERN app?",
    options: [
      "A. To handle global state management",
      "B. To define backend APIs",
      "C. To query MongoDB",
      "D. To deploy the app",
    ],
    answer: "A",
  },
  {
    id: 19,
    question: "How do you start the development server in React?",
    options: [
      "A. npm start",
      "B. npm run build",
      "C. node start",
      "D. react start",
    ],
    answer: "A",
  },
  {
    id: 20,
    question: "Which of the following is used to secure Express.js APIs?",
    options: [
      "A. JSON Web Tokens (JWT)",
      "B. SQL Injection",
      "C. React Router",
      "D. Axios",
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

export default MERNQuiz;
