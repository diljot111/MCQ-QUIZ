import React, { useState, useEffect } from "react";

function WebQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Mock 20 AI questions
    const allQuestions = [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "A. Hyperlinks and Text Markup Language",
            "B. Home Tool Markup Language",
            "C. Hyper Text Markup Language",
            "D. Hyper Transfer Markup Language",
          ],
          answer: "C",
        },
        {
          id: 2,
          question: "Which HTML tag is used to define an unordered list?",
          options: [
            "A. <ul>",
            "B. <ol>",
            "C. <li>",
            "D. <list>",
          ],
          answer: "A",
        },
        {
          id: 3,
          question: "What does CSS stand for?",
          options: [
            "A. Creative Style Sheets",
            "B. Cascading Style Sheets",
            "C. Computer Style Sheets",
            "D. Colorful Style Sheets",
          ],
          answer: "B",
        },
        {
          id: 4,
          question: "Which property is used to change the background color in CSS?",
          options: [
            "A. color",
            "B. background-color",
            "C. bg-color",
            "D. bgcolor",
          ],
          answer: "B",
        },
        {
          id: 5,
          question: "Which tag is used to create a hyperlink in HTML?",
          options: [
            "A. <a>",
            "B. <link>",
            "C. <href>",
            "D. <hyper>",
          ],
          answer: "A",
        },
        {
          id: 6,
          question: "What is the correct way to link an external CSS file in HTML?",
          options: [
            'A. <link rel="stylesheet" href="styles.css">',
            'B. <style src="styles.css">',
            'C. <css href="styles.css">',
            'D. <stylesheet="styles.css">',
          ],
          answer: "A",
        },
        {
          id: 7,
          question: "What is the purpose of JavaScript in web development?",
          options: [
            "A. To define the structure of web pages",
            "B. To style web pages",
            "C. To add interactivity and dynamic behavior",
            "D. To store data in the browser",
          ],
          answer: "C",
        },
        {
          id: 8,
          question: "Which JavaScript method is used to select an element by its ID?",
          options: [
            "A. getElementById()",
            "B. querySelector()",
            "C. getElementByClass()",
            "D. querySelectorAll()",
          ],
          answer: "A",
        },
        {
          id: 9,
          question: "Which of the following is a JavaScript framework?",
          options: [
            "A. Laravel",
            "B. Django",
            "C. React",
            "D. Flask",
          ],
          answer: "C",
        },
        {
          id: 10,
          question: "What is the purpose of the <head> tag in HTML?",
          options: [
            "A. To display the main content of the page",
            "B. To define the title, metadata, and links to resources",
            "C. To create navigation menus",
            "D. To include images",
          ],
          answer: "B",
        },
        {
          id: 11,
          question: "What is the default method for sending form data in HTML?",
          options: [
            "A. GET",
            "B. POST",
            "C. PUT",
            "D. DELETE",
          ],
          answer: "A",
        },
        {
          id: 12,
          question: "What is the purpose of the <div> tag in HTML?",
          options: [
            "A. To create a division or container for content",
            "B. To add styles to the page",
            "C. To define headings",
            "D. To embed multimedia content",
          ],
          answer: "A",
        },
        {
          id: 13,
          question: "Which CSS property is used to align text to the center?",
          options: [
            "A. align-center",
            "B. text-align",
            "C. center-align",
            "D. justify",
          ],
          answer: "B",
        },
        {
          id: 14,
          question: "What does DOM stand for?",
          options: [
            "A. Document Object Model",
            "B. Data Object Management",
            "C. Digital Object Model",
            "D. Document Orientation Model",
          ],
          answer: "A",
        },
        {
          id: 15,
          question: "What is the correct way to declare a variable in JavaScript?",
          options: [
            "A. var x = 5;",
            "B. variable x = 5;",
            "C. v x = 5;",
            "D. declare x = 5;",
          ],
          answer: "A",
        },
        {
          id: 16,
          question: "Which CSS framework is known for its grid system?",
          options: [
            "A. Bootstrap",
            "B. Tailwind",
            "C. Foundation",
            "D. All of the above",
          ],
          answer: "D",
        },
        {
          id: 17,
          question: "What is the use of the <canvas> tag in HTML?",
          options: [
            "A. To display tables",
            "B. To embed videos",
            "C. To draw graphics on a web page",
            "D. To create forms",
          ],
          answer: "C",
        },
        {
          id: 18,
          question: "Which HTTP status code indicates a 'Not Found' error?",
          options: [
            "A. 400",
            "B. 404",
            "C. 500",
            "D. 301",
          ],
          answer: "B",
        },
        {
          id: 19,
          question: "What does the 'position: absolute' property do in CSS?",
          options: [
            "A. Positions an element relative to its closest positioned ancestor",
            "B. Fixes an element to the viewport",
            "C. Hides the element",
            "D. Places the element in the normal document flow",
          ],
          answer: "A",
        },
        {
          id: 20,
          question: "Which HTML attribute is used to specify a unique identifier for an element?",
          options: [
            "A. class",
            "B. id",
            "C. name",
            "D. key",
          ],
          answer: "B",
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">WEB Quiz</h1>
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

export default WebQuiz;
