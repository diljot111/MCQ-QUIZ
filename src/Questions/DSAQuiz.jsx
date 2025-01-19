import React, { useState, useEffect } from "react";
import Theme from "../Theme/Theme";

function DSAQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const allQuestions = [
    {
      id: 1,
      question: "What is the time complexity of searching an element in a balanced binary search tree (BST)?",
      options: [
        "A. O(n)",
        "B. O(log n)",
        "C. O(n log n)",
        "D. O(1)",
      ],
      answer: "B",
    },
    {
      id: 2,
      question: "Which of the following is a linear data structure?",
      options: [
        "A. Tree",
        "B. Graph",
        "C. Stack",
        "D. Hash Table",
      ],
      answer: "C",
    },
    {
      id: 3,
      question: "What is the space complexity of the merge sort algorithm?",
      options: [
        "A. O(1)",
        "B. O(log n)",
        "C. O(n)",
        "D. O(n log n)",
      ],
      answer: "C",
    },
    {
      id: 4,
      question: "Which C++ STL container is used to implement a stack?",
      options: [
        "A. vector",
        "B. deque",
        "C. list",
        "D. set",
      ],
      answer: "B",
    },
    {
      id: 5,
      question: "What is the maximum number of children a binary tree node can have?",
      options: [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. Unlimited",
      ],
      answer: "B",
    },
    {
      id: 6,
      question: "What is the main characteristic of a queue?",
      options: [
        "A. Last In, First Out (LIFO)",
        "B. First In, First Out (FIFO)",
        "C. Random Access",
        "D. Sequential Access",
      ],
      answer: "B",
    },
    {
      id: 7,
      question: "Which C++ STL container is implemented as a self-balancing binary search tree?",
      options: [
        "A. vector",
        "B. map",
        "C. stack",
        "D. queue",
      ],
      answer: "B",
    },
    {
      id: 8,
      question: "What is the worst-case time complexity of quicksort?",
      options: [
        "A. O(n)",
        "B. O(n log n)",
        "C. O(n^2)",
        "D. O(log n)",
      ],
      answer: "C",
    },
    {
      id: 9,
      question: "What is the purpose of a priority queue?",
      options: [
        "A. To store elements in sorted order",
        "B. To access the largest or smallest element efficiently",
        "C. To maintain a FIFO order",
        "D. To allow random access to elements",
      ],
      answer: "B",
    },
    {
      id: 10,
      question: "What is the time complexity of inserting an element at the end of a C++ vector?",
      options: [
        "A. O(1)",
        "B. O(log n)",
        "C. O(n)",
        "D. O(n^2)",
      ],
      answer: "A",
    },
    {
      id: 11,
      question: "What does the C++ function `std::sort()` use internally?",
      options: [
        "A. Merge Sort",
        "B. Quick Sort",
        "C. Heap Sort",
        "D. Hybrid Sorting Algorithm",
      ],
      answer: "D",
    },
    {
      id: 12,
      question: "Which data structure is best suited for implementing a graph?",
      options: [
        "A. Array",
        "B. Linked List",
        "C. Adjacency List",
        "D. Queue",
      ],
      answer: "C",
    },
    {
      id: 13,
      question: "What is the purpose of a hash table?",
      options: [
        "A. To store data sequentially",
        "B. To allow quick data retrieval using keys",
        "C. To sort data efficiently",
        "D. To implement a queue",
      ],
      answer: "B",
    },
    {
      id: 14,
      question: "Which algorithm is used to find the shortest path in a weighted graph?",
      options: [
        "A. Depth-First Search (DFS)",
        "B. Breadth-First Search (BFS)",
        "C. Dijkstra's Algorithm",
        "D. Prim's Algorithm",
      ],
      answer: "C",
    },
    {
      id: 15,
      question: "Which sorting algorithm is stable?",
      options: [
        "A. Quick Sort",
        "B. Merge Sort",
        "C. Heap Sort",
        "D. Selection Sort",
      ],
      answer: "B",
    },
    {
      id: 16,
      question: "What is the best case time complexity of insertion sort?",
      options: [
        "A. O(n)",
        "B. O(n log n)",
        "C. O(n^2)",
        "D. O(1)",
      ],
      answer: "A",
    },
    {
      id: 17,
      question: "What is the height of a complete binary tree with N nodes?",
      options: [
        "A. log2(N + 1)",
        "B. log2(N)",
        "C. N/2",
        "D. N",
      ],
      answer: "A",
    },
    {
      id: 18,
      question: "Which data structure is used for implementing recursion?",
      options: [
        "A. Queue",
        "B. Stack",
        "C. Hash Table",
        "D. Linked List",
      ],
      answer: "B",
    },
    {
      id: 19,
      question: "Which algorithm is used for finding a minimum spanning tree?",
      options: [
        "A. Floyd-Warshall Algorithm",
        "B. Kruskal's Algorithm",
        "C. Bellman-Ford Algorithm",
        "D. Dijkstra's Algorithm",
      ],
      answer: "B",
    },
    {
      id: 20,
      question: "What is the advantage of using a doubly linked list over a singly linked list?",
      options: [
        "A. Requires less memory",
        "B. Allows traversal in both directions",
        "C. Simplifies node insertion at the beginning",
        "D. Eliminates the need for pointers",
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">DSA Quiz</h1>
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

export default DSAQuiz;
