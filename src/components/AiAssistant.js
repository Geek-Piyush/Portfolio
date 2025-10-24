import React, { useState, useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import "./AiAssistant.css";

// --- SVG Icons for the Chat ---
const CloseIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const SendIcon = () => (
  <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

/**
 * AiAssistant Component
 * A self-contained AI chat assistant for your portfolio.
 * It manages its own open/close state.
 */
export default function AiAssistant() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Piyush's AI assistant. Ask me anything about his skills, projects, or education.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Effect to listen for a global event to open the chat
  // This lets your existing navbar open the chat without passing props
  useEffect(() => {
    const handleOpenChat = () => setIsChatOpen(true);
    window.addEventListener("open-ai-chat", handleOpenChat);

    // Cleanup
    return () => {
      window.removeEventListener("open-ai-chat", handleOpenChat);
    };
  }, []); // Runs only once on mount

  // This is the "knowledge base" for the AI.
  const portfolioData = `
    Name: Piyush Nashikkar
    
    Bio: I'm a passionate Computer Science and Design student who loves building meaningful digital solutions — from Flutter apps to full-stack systems. 
      My focus lies in designing intuitive experiences and scalable backend systems.

    Contact:
    - Email: piyushnas74@gmail.com
    - GitHub: https://github.com/piyushnas74
    - LinkedIn: Coming Soon

    Skills:
    - Programming Languages: C, C++, Python, JavaScript, SQL
    - Database: MySQL, MongoDB
    - Cloud Services: Firebase (Firestore, Authentication, Storage)
    - Web Development: React, Node.js, Express.js, Flask, HTML, CSS
    - App Development: Dart, Flutter
    - UI/UX Design: Wireframing, Prototyping, Visual Design, Accessibility & Color Contrast, User Flow Mapping
    - Tools & Platforms: Postman, Figma, GitHub, VS Code, Canva, Google Colab, Basic Linux & Windows Command Line
    
    Soft Skills:
    - Analytical Thinking
    - Communication
    - Team Leadership
    - Adaptability
    - Time Management

    Projects:
    1. CI/CD Build Failure Detection (July 2025 – Present)
       Description: CI/CD build failure prediction system using Python, Flask, XGBoost, Random Forest, Scikit-learn, Ensemble Learning, ADASYN, SHAP, Optuna, GitHub Actions, RESTful APIs, and Google Cloud Platform (GCP).
       Tech Stack: Python, Flask, XGBoost, Random Forest, Machine Learning, GCP
       Links: GitHub available

    2. FinTrustChain (July – August 2025)
       Description: Microloan and credit trust platform developed using React, Node.js, Express.js, MongoDB Atlas (Mongoose), JWT authentication, Multer, RESTful APIs, and PhonePe UPI payment integration.
       Tech Stack: React, Node.js, Express.js, MongoDB, JWT, PhonePe UPI
       Links: Website and GitHub available

    3. Vistara (June – July 2025)
       Description: Tour booking platform developed using Node.js, Express.js, MongoDB Atlas (Mongoose), Multer for file handling, JWT authentication, RESTful APIs, and Stripe for payment integration.
       Tech Stack: Node.js, Express.js, MongoDB, JWT, Stripe
       Links: Website and GitHub available

    4. Buzzin' – Mobile App (February – May 2025)
       Description: Event management app using Flutter + Firebase (Firestore, Authentication, Storage) with real-time community chat, event registration, and user profile management.
       Tech Stack: Flutter, Firebase, Firestore, Dart
       Links: GitHub and Demo available

    Education:
    - B.Tech in Computer Science and Design
      Institution: K. K. Wagh Institute of Engineering Education and Research, Nashik
      CGPA: 8.43
      Expected Graduation: 2026

    - HSC (12th)
      Institution: N.E.S. High School, Parola, Jalgaon – 425111
      Percentage: 73%
      Year: 2022

    - SSC (10th)
      Institution: Dr. V. M. Jain Madhyamik Vidyalay, Parola, Jalgaon – 425111
      Percentage: 89.20%
      Year: 2020
    
    Co-Curricular Activities:
    - Creative Head at DeSoc Club, KKWIEER - Directed creative strategy and design initiatives
    - Core Member at DeSoc Club, KKWIEER (2nd Year) - Contributed to EPM and designed event posters
    - Organizing Member at Swapnapurti Foundation - Managed community outreach
    - Finance Team at Innovera, KKWIEER - Handled financial operations during national-level hackathon
    - Speaker at Unleash (DeSoc, KKWIEER) - Delivered session on Open Source Software and Contribution

    Extra-Curricular Activities:
    - Poster Making Competition – ISTE, KKWIEER
    - Organizing Member – National Level Hackathon: Innovera, KKWIEER
    - Volunteer – E-yantarn, E-waste Collection Drive (CSI, KKWIEER)

    Certifications:
    - Flutter Development
    - Node.js Backend
    - AWS Fundamentals
    - UI/UX Design Fundamentals
    

    Semester-wise GPA:

        1st Sem: 8.84
        2nd Sem: 8.62
        3rd Sem: 8.52
        4th Sem: 8.1
        5th Sem: 8.0
        6th Sem: 8.59
    Currently in 7th Sem

    Qualified GATE 2024-25.

    Hackathons & Competitions:

      Semi-finalist: Smart India Hackathon (SIH) 2023
      Finalist: SunHacks Hackathon 2024

    Club & Leadership Roles (DeSoc – Design Society, Departmental Club):

      1st Year (Second year of degree): Core Committee Member, founding member, contributed creative work to Annual Tech Fest Equinox in collaboration with four clubs.
      2nd Year (Third year of degree): Design Head, led multiple events, Event Head for Genesis in annual tech fest.
      Speaker at Unleash: Workshop on GitHub and talk on Open Source Software.

      NGO & Volunteer Work:
        Swapnapurti NGO Foundation: Organizing Member (3 months) in 2nd semester
        E-Yantran E-waste Drive: Volunteer (1st semester)

    Final Year Project:

      Project: CI/CD Build Failure Detection using Machine Learning.
      Role: Backend Developer
      Responsibilities: Wrapping ML model, creating REST API, ML development.
      ML Tech: Ensemble XGBoost/Random Forest model for build failure prediction.

    ML / AI Knowledge:

      Basic knowledge of Convolutional Neural Networks (CNNs)
      Demo on CIFAR-10 dataset: 3 convolution blocks (each with pooling), fully connected output layer with dropout 0.5.

    Updated Technical Skills:

      Development: HTML, JavaScript, vanilla CSS, Node.js, Express.js, MySQL, MongoDB (local and Atlas), Flutter, React (basic)
      Proficient in C++ for coding/DSA
      Other Languages: C, Python, Java
      Cloud Services: Firebase (Firestore, Storage, Authentication)

    Projects (Additional Notes / Clarifications):

      Buzzin' – Event Management App (Flutter + Firebase)
      Vistara – Backend-heavy Tour Booking Platform (Node.js, Express.js, MongoDB Atlas, Stripe integration)
      FinTrustChain – Community-based Microloan Platform (Node.js, Express.js, MongoDB Atlas, PDFLib, PhonePe UPI Mock Integration, TrustIndex system for credit scoring)
  `;

  // System prompt to instruct the AI
  const systemPrompt = `You are Piyush Nashikkar's friendly and professional AI portfolio assistant. 
    Your goal is to answer questions from recruiters and visitors based *only* on the portfolio data provided below.
    - Be concise and helpful.
    - If a question is about Piyush's opinions, feelings, or anything not in the data, politely decline and say "I am an AI assistant and only have access to Piyush's portfolio information."
    - Do not make up information. If the data doesn't provide an answer, say "I don't have that specific information in Piyush's portfolio data."
    - You are chatting with a potential employer, so maintain a professional and positive tone.
    - Keep answers to 2-3 sentences if possible.
    - When discussing projects, mention the key technologies used.
    - If asked about contact information, provide the email and GitHub link.
    
    Here is Piyush's portfolio data:
    ---
    ${portfolioData}
    ---
    Now, please answer the user's question.`;

  // Function to call the Gemini API
  const getBotResponse = async (userQuery, retries = 3, delay = 1000) => {
    const apiKey =
      process.env.REACT_APP_GEMINI_API_KEY || process.env.GEMINI_API_KEY || ""; // API key from environment variable

    if (!apiKey) {
      return "⚠️ AI Assistant is not configured. Please add your Gemini API key to the environment variables.";
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Exponential backoff for rate limiting
          await new Promise((res) => setTimeout(res, delay));
          return getBotResponse(userQuery, retries - 1, delay * 2);
        }
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        return text;
      } else {
        throw new Error("Invalid response structure from API.");
      }
    } catch (error) {
      console.error(error);
      if (retries > 0) {
        // Retry for network errors
        await new Promise((res) => setTimeout(res, delay));
        return getBotResponse(userQuery, retries - 1, delay * 2);
      }
      // Return a user-facing error message
      return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again in a moment.";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const query = userInput.trim();
    if (!query || isLoading) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setUserInput("");
    setIsLoading(true);

    // Get bot response
    const botResponse = await getBotResponse(query);

    // Add bot message (or error message)
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: botResponse,
        error:
          botResponse.startsWith("I'm sorry") || botResponse.startsWith("⚠️"),
      },
    ]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        className="chat-toggle-button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        aria-label="Toggle AI Chat"
      >
        <ChatIcon />
      </button>

      <div className={`chat-window ${isChatOpen ? "open" : "closed"}`}>
        <div className="chat-header">
          <h3>
            <Bot size={20} style={{ marginRight: "6px" }} />
            AI Assistant
          </h3>
          <button
            className="chat-close-btn"
            onClick={() => setIsChatOpen(false)}
            aria-label="Close Chat"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${msg.sender} ${
                msg.error ? "error" : ""
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isLoading && (
            <div className="loading-indicator">
              <div className="spinner"></div>
              <span>Thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about my projects, skills, education..."
            aria-label="Chat input"
          />
          <button
            type="submit"
            className="chat-send-btn"
            disabled={isLoading || !userInput.trim()}
            aria-label="Send Message"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </>
  );
}
