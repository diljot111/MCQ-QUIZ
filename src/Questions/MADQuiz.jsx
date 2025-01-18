import React, { useState, useEffect } from "react";

function MADQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Mock 20 AI questions
        
    
  const allQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of mobile app development?",
      options: [
        "A. To create applications for mobile devices",
        "B. To develop desktop applications",
        "C. To design operating systems",
        "D. To build websites",
      ],
      answer: "A",
    },
    {
      id: 2,
      question: "Which of the following is a popular framework for cross-platform app development?",
      options: [
        "A. Flutter",
        "B. WordPress",
        "C. React",
        "D. Angular",
      ],
      answer: "A",
    },
    {
      id: 3,
      question: "What language is primarily used for Android app development?",
      options: [
        "A. Swift",
        "B. Kotlin",
        "C. Python",
        "D. Ruby",
      ],
      answer: "B",
    },
    {
      id: 4,
      question: "What is the purpose of an API in mobile app development?",
      options: [
        "A. To connect apps to external services or data sources",
        "B. To design user interfaces",
        "C. To debug the app",
        "D. To compile the app",
      ],
      answer: "A",
    },
    {
      id: 5,
      question: "Which IDE is commonly used for iOS app development?",
      options: [
        "A. Android Studio",
        "B. Visual Studio Code",
        "C. Xcode",
        "D. IntelliJ IDEA",
      ],
      answer: "C",
    },
    {
      id: 6,
      question: "What does the term 'responsive design' mean in mobile apps?",
      options: [
        "A. An app that adjusts its layout based on device size and orientation",
        "B. A feature that allows apps to respond to user feedback",
        "C. A method to debug apps",
        "D. A design that only works on iOS",
      ],
      answer: "A",
    },
    {
      id: 7,
      question: "What is the purpose of a layout in mobile app development?",
      options: [
        "A. To manage how the UI components are arranged on the screen",
        "B. To debug the app",
        "C. To connect the app to a database",
        "D. To compile the app code",
      ],
      answer: "A",
    },
    {
      id: 8,
      question: "What is the primary role of Firebase in mobile app development?",
      options: [
        "A. Hosting websites",
        "B. Building machine learning models",
        "C. Providing backend services for apps",
        "D. Designing UI components",
      ],
      answer: "C",
    },
    {
      id: 9,
      question: "What is the difference between native and hybrid mobile apps?",
      options: [
        "A. Native apps are written in HTML; hybrid apps are written in C++",
        "B. Native apps are platform-specific; hybrid apps run on multiple platforms",
        "C. Native apps run on all platforms; hybrid apps run on Android only",
        "D. There is no difference",
      ],
      answer: "B",
    },
    {
      id: 10,
      question: "What is the primary function of a navigation component in mobile apps?",
      options: [
        "A. To handle user authentication",
        "B. To manage transitions between app screens",
        "C. To create animations",
        "D. To connect to external APIs",
      ],
      answer: "B",
    },
    {
      id: 11,
      question: "Which of the following is a state management tool for Flutter?",
      options: [
        "A. Redux",
        "B. Provider",
        "C. Bloc",
        "D. All of the above",
      ],
      answer: "D",
    },
    {
      id: 12,
      question: "What is the purpose of a ViewModel in MVVM architecture?",
      options: [
        "A. To store user interface-related data",
        "B. To handle business logic",
        "C. To design the app layout",
        "D. To build APIs",
      ],
      answer: "A",
    },
    {
      id: 13,
      question: "Which file format is used to design UI layouts in Android?",
      options: [
        "A. XML",
        "B. HTML",
        "C. JSON",
        "D. YAML",
      ],
      answer: "A",
    },
    {
      id: 14,
      question: "Which language is primarily used for iOS app development?",
      options: [
        "A. Kotlin",
        "B. Swift",
        "C. Java",
        "D. Dart",
      ],
      answer: "B",
    },
    {
      id: 15,
      question: "What is the function of a storyboard in iOS development?",
      options: [
        "A. To debug the app",
        "B. To visually design and connect app screens",
        "C. To write backend code",
        "D. To manage databases",
      ],
      answer: "B",
    },
    {
      id: 16,
      question: "What is a key advantage of using React Native?",
      options: [
        "A. It supports only Android devices",
        "B. It allows building cross-platform apps with a single codebase",
        "C. It is limited to backend functionality",
        "D. It provides in-built database support",
      ],
      answer: "B",
    },
    {
      id: 17,
      question: "What is the purpose of a splash screen in a mobile app?",
      options: [
        "A. To display app features in detail",
        "B. To show a brief, initial screen while the app is loading",
        "C. To navigate between pages",
        "D. To manage user authentication",
      ],
      answer: "B",
    },
    {
      id: 18,
      question: "Which type of testing ensures the app works well on different devices?",
      options: [
        "A. Unit Testing",
        "B. Compatibility Testing",
        "C. Load Testing",
        "D. Integration Testing",
      ],
      answer: "B",
    },
    {
      id: 19,
      question: "What is the purpose of push notifications in mobile apps?",
      options: [
        "A. To store user data locally",
        "B. To send alerts and updates to users",
        "C. To manage app crashes",
        "D. To display app settings",
      ],
      answer: "B",
    },
    {
      id: 20,
      question: "What does SDK stand for in mobile development?",
      options: [
        "A. Software Deployment Kit",
        "B. Software Development Kit",
        "C. Standard Development Knowledge",
        "D. Secure Development Kit",
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

export default MADQuiz;
