import React, { useState, useEffect } from "react";

function CyberQuiz() {
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Mock 20 AI questions
  const allQuestions = [
        {
          id: 1,
          question: "What is cybersecurity?",
          options: [
            "A. Protecting computer systems and networks from theft or damage",
            "B. Writing software for security agencies",
            "C. Creating antivirus programs",
            "D. Encrypting emails only",
          ],
          answer: "A",
        },
        {
          id: 2,
          question: "Which of the following is an example of a strong password?",
          options: [
            "A. password123",
            "B. 123456",
            "C. My$ecureP@ssw0rd!",
            "D. admin",
          ],
          answer: "C",
        },
        {
          id: 3,
          question: "What does the term 'phishing' refer to?",
          options: [
            "A. Searching for vulnerabilities in a system",
            "B. Fraudulently obtaining sensitive information via email",
            "C. Encrypting sensitive data",
            "D. Protecting networks with firewalls",
          ],
          answer: "B",
        },
        {
          id: 4,
          question: "What is the primary purpose of a firewall?",
          options: [
            "A. To protect against phishing attacks",
            "B. To filter incoming and outgoing network traffic",
            "C. To monitor hardware performance",
            "D. To detect and remove malware",
          ],
          answer: "B",
        },
        {
          id: 5,
          question: "What is a zero-day vulnerability?",
          options: [
            "A. A vulnerability with no known fix",
            "B. A vulnerability discovered on the first day of the month",
            "C. A vulnerability fixed by a patch",
            "D. A vulnerability in hardware only",
          ],
          answer: "A",
        },
        {
          id: 6,
          question: "Which type of malware restricts access to a system until a ransom is paid?",
          options: [
            "A. Worm",
            "B. Ransomware",
            "C. Trojan",
            "D. Spyware",
          ],
          answer: "B",
        },
        {
          id: 7,
          question: "What is two-factor authentication (2FA)?",
          options: [
            "A. Using two passwords for security",
            "B. Verifying identity with two different methods",
            "C. A backup authentication system",
            "D. Using encryption and passwords together",
          ],
          answer: "B",
        },
        {
          id: 8,
          question: "What is the purpose of encryption?",
          options: [
            "A. To prevent unauthorized access to data",
            "B. To compress files for storage",
            "C. To delete sensitive data securely",
            "D. To improve system performance",
          ],
          answer: "A",
        },
        {
          id: 9,
          question: "Which of the following is an example of social engineering?",
          options: [
            "A. Brute force attack",
            "B. Sending a malicious email attachment",
            "C. Manipulating a person into sharing confidential information",
            "D. Exploiting a software vulnerability",
          ],
          answer: "C",
        },
        {
          id: 10,
          question: "What is the primary goal of ethical hacking?",
          options: [
            "A. To create viruses for testing",
            "B. To identify and fix security vulnerabilities",
            "C. To hack into competitor networks",
            "D. To steal data ethically",
          ],
          answer: "B",
        },
        {
          id: 11,
          question: "What does VPN stand for?",
          options: [
            "A. Virtual Processing Network",
            "B. Virtual Private Network",
            "C. Verified Protocol Network",
            "D. Virtual Public Network",
          ],
          answer: "B",
        },
        {
          id: 12,
          question: "What is a brute force attack?",
          options: [
            "A. Using hardware to break into systems",
            "B. Guessing passwords by trying many combinations",
            "C. Injecting malicious code into software",
            "D. Intercepting data over a network",
          ],
          answer: "B",
        },
        {
          id: 13,
          question: "What is the purpose of penetration testing?",
          options: [
            "A. To disrupt network operations",
            "B. To evaluate a system's security by simulating an attack",
            "C. To encrypt sensitive data",
            "D. To recover lost data",
          ],
          answer: "B",
        },
        {
          id: 14,
          question: "Which of the following is NOT a type of malware?",
          options: [
            "A. Virus",
            "B. Spyware",
            "C. Phishing",
            "D. Ransomware",
          ],
          answer: "C",
        },
        {
          id: 15,
          question: "What is SQL injection?",
          options: [
            "A. Injecting malware into a database",
            "B. Exploiting vulnerabilities in a database query",
            "C. Encrypting database contents",
            "D. Injecting viruses into a database server",
          ],
          answer: "B",
        },
        {
          id: 16,
          question: "What is the purpose of an Intrusion Detection System (IDS)?",
          options: [
            "A. To prevent intrusions into a network",
            "B. To detect and respond to unauthorized access",
            "C. To encrypt sensitive information",
            "D. To manage user accounts",
          ],
          answer: "B",
        },
        {
          id: 17,
          question: "What is the primary goal of phishing attacks?",
          options: [
            "A. To disrupt system operations",
            "B. To steal sensitive information",
            "C. To spread malware",
            "D. To encrypt files",
          ],
          answer: "B",
        },
        {
          id: 18,
          question: "What is a botnet?",
          options: [
            "A. A network of compromised computers under attacker control",
            "B. A group of firewalls working together",
            "C. A security protocol for networks",
            "D. A software used to detect malware",
          ],
          answer: "A",
        },
        {
          id: 19,
          question: "What is the purpose of a digital signature?",
          options: [
            "A. To encrypt files",
            "B. To authenticate the sender of a message",
            "C. To create secure passwords",
            "D. To block phishing emails",
          ],
          answer: "B",
        },
        {
          id: 20,
          question: "What is a Denial-of-Service (DoS) attack?",
          options: [
            "A. Blocking a user from accessing their account",
            "B. Overloading a system to make it unavailable",
            "C. Stealing confidential data",
            "D. Encrypting files without permission",
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

export default CyberQuiz;
