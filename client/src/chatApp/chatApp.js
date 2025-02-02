import React, { useRef, useState, useEffect } from "react"; // Ensure React is imported
import { IoSend, IoChatbubblesSharp } from "react-icons/io5";
import socketIOClient from "socket.io-client";
import "./chatApp.css";

const socket = socketIOClient("http://localhost:3000");

const MessageBubble = React.memo(({ message, isSent }) => (
  <div className={`message-bubble ${isSent ? "sent" : "received"}`}>
    <span className="avatar">👤</span>
    <span className="message-text">{message}</span>
  </div>
));

function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.off("chat message");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (message) {
      socket.emit("chat message", message);
      setMessages((prevMessages) => [...prevMessages, message]); // Show message immediately
      setMessage("");
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-container">
        <div className="chat-header">
          <IoChatbubblesSharp className="chat-icon" /> Chat App
        </div>
        <div className="messages">
          {messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} isSent={index % 2 === 0} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="send-btn"
            onClick={handleSendMessage}
            disabled={!message}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
