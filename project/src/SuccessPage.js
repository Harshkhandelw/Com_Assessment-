import React, { useEffect, useState } from 'react';
import './Login.css';

const SuccessPage = () => {
  const [userName, setUserName] = useState("");

  const initials = userName
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  return (
    <div className="setup-complete-container">
      <h1 className="ai-heading">Hello, I'm AgukenAI.</h1>
      <p className="ai-description">
        I'm an AI Agent helping you handle reception and support calls using GenAI-based phone call automation.
      </p>

      <div className="user-card">
        <div className="avatar">{initials}</div>
        <div className="user-text">
          <p className="user-subtitle">Nice to meet you, I'm</p>
          <strong className="user-name">{userName}</strong>
        </div>
      </div>

      <h2 className="setup-title">Setup Complete!</h2>
      <div className="info-box">
        Your hotel is now configured for AI voice receptionist and support. I’ll use this data to assist your guests with bookings, inquiries, and more.
      </div>
      <div className="info-box">
        You can always update your information or settings from your dashboard.
      </div>

      <button className="go-dashboard-btn" onClick={() => window.location.href = '/Dashboard '}>
        Go to dashboard
      </button>
    </div>
  );
};

export default SuccessPage;
