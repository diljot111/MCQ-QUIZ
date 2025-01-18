import React, { useState, useEffect } from "react";

function UIQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const allQuestions = [
    {
      id: 1,
      question: "What does UI stand for in UI/UX design?",
      options: [
        "A. User Interaction",
        "B. User Interface",
        "C. Unique Interaction",
        "D. Unified Interface",
      ],
      answer: "B",
    },
    {
      id: 2,
      question: "What is the primary focus of UX design?",
      options: [
        "A. Visual aesthetics",
        "B. User experience and satisfaction",
        "C. Frontend coding",
        "D. Creating animations",
      ],
      answer: "B",
    },
    {
      id: 3,
      question: "Which of the following is NOT a UX design principle?",
      options: [
        "A. Consistency",
        "B. Accessibility",
        "C. Usability",
        "D. Complexity",
      ],
      answer: "D",
    },
    {
      id: 4,
      question: "What is a wireframe in UI/UX design?",
      options: [
        "A. A high-fidelity design of a webpage",
        "B. A low-fidelity blueprint of a design",
        "C. A coding framework for UI development",
        "D. A 3D model of the user interface",
      ],
      answer: "B",
    },
    {
      id: 5,
      question: "Which software is commonly used for creating UI designs?",
      options: [
        "A. Figma",
        "B. Visual Studio Code",
        "C. Blender",
        "D. Eclipse",
      ],
      answer: "A",
    },
    {
      id: 6,
      question: "What is the purpose of usability testing?",
      options: [
        "A. To identify design errors",
        "B. To measure app performance",
        "C. To optimize database queries",
        "D. To create wireframes",
      ],
      answer: "A",
    },
    {
      id: 7,
      question: "Which color scheme is typically used for a 'dark mode' interface?",
      options: [
        "A. Light colors with dark text",
        "B. Dark colors with light text",
        "C. Monochrome shades",
        "D. Bright contrasting colors",
      ],
      answer: "B",
    },
    {
      id: 8,
      question: "What is the 80/20 rule in UX design?",
      options: [
        "A. 80% of the users only use 20% of the features",
        "B. 80% effort creates 20% results",
        "C. 80% of designs are static, 20% are dynamic",
        "D. 80% focus on coding, 20% on design",
      ],
      answer: "A",
    },
    {
      id: 9,
      question: "What does 'responsive design' mean?",
      options: [
        "A. Adjusting the layout for different devices",
        "B. Adding animations to the UI",
        "C. Making the UI interact with the backend",
        "D. Designing only for desktops",
      ],
      answer: "A",
    },
    {
      id: 10,
      question: "Which principle ensures that users do not get overwhelmed by too many options?",
      options: [
        "A. Accessibility",
        "B. Simplicity",
        "C. Visual Hierarchy",
        "D. Usability",
      ],
      answer: "B",
    },
    {
      id: 11,
      question: "What is a prototype in UI/UX?",
      options: [
        "A. The final product",
        "B. A working model to test functionality and design",
        "C. A written specification of the UI",
        "D. A coding library for building the interface",
      ],
      answer: "B",
    },
    {
      id: 12,
      question: "What is the goal of an A/B test in UX?",
      options: [
        "A. To compare two design versions",
        "B. To create alternate layouts",
        "C. To build a dynamic UI",
        "D. To test accessibility features",
      ],
      answer: "A",
    },
    {
      id: 13,
      question: "Which typeface style is generally considered more readable for body text?",
      options: [
        "A. Serif",
        "B. Sans-serif",
        "C. Decorative",
        "D. Script",
      ],
      answer: "B",
    },
    {
      id: 14,
      question: "What does 'affordance' mean in UI design?",
      options: [
        "A. The user's willingness to pay for the design",
        "B. The perceived and actual properties that suggest how an object should be used",
        "C. The visual consistency of the interface",
        "D. The responsiveness of the design",
      ],
      answer: "B",
    },
    {
      id: 15,
      question: "Which of these is an example of a microinteraction?",
      options: [
        "A. Navigating to a new page",
        "B. A button changing color when clicked",
        "C. Adding new content to a page",
        "D. Scrolling through a feed",
      ],
      answer: "B",
    },
    {
      id: 16,
      question: "What is the Z-pattern in UI design?",
      options: [
        "A. A layout that mimics a zigzag structure",
        "B. A visual pattern for how users scan a webpage",
        "C. A design approach for dark themes",
        "D. A coding style for UI elements",
      ],
      answer: "B",
    },
    {
      id: 17,
      question: "What is the primary focus of accessibility in UI/UX?",
      options: [
        "A. Adding animations to the UI",
        "B. Making the design usable for all users, including those with disabilities",
        "C. Optimizing for performance",
        "D. Reducing design complexity",
      ],
      answer: "B",
    },
    {
      id: 18,
      question: "Which of the following is a UX design deliverable?",
      options: [
        "A. Code Repository",
        "B. User Personas",
        "C. Compiler",
        "D. API Documentation",
      ],
      answer: "B",
    },
    {
      id: 19,
      question: "What is a heuristic evaluation in UX?",
      options: [
        "A. A detailed user survey",
        "B. A usability inspection method",
        "C. A coding performance check",
        "D. A prototype design test",
      ],
      answer: "B",
    },
    {
      id: 20,
      question: "What is a key benefit of a design system?",
      options: [
        "A. Reduces the need for prototyping",
        "B. Ensures consistency across the product",
        "C. Eliminates the need for wireframes",
        "D. Improves backend performance",
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

export default UIQuiz;
