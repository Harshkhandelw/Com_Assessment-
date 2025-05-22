import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Gendetails = () => {
  const [userName, setUserName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [hotelSize, setHotelSize] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const navigate = useNavigate();

  const initials = userName
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  const handleContinue = () => {
    navigate("/hoteltime");
  };

  return (
    <div className="business-page">
      <h1 className="ai-heading">Hello, I'm AgukenAI.</h1>
      <p className="ai-description">
        I'm an AI Agent helping you handle reception and support calls using GenAI-based phone call automation.
      </p>

      <div className="greeting-card">
        <div className="circle-avatar">{initials}</div>
        <div className="greeting-text">
          <p className="greet-subtitle">Nice to meet you, I'm</p>
          <strong className="greet-name">{userName}</strong>
        </div>
      </div>

      <h2 className="form-heading">Let's start with general details about your hotel</h2>

      <div className="form-card">
        <label className="form-label">Hotel Name</label>
        <input
          type="text"
          placeholder="Hotel City Inn"
          className="form-input"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
        />

        <label className="form-label">Hotel Size</label>
        <select
          className="form-input"
          value={hotelSize}
          onChange={(e) => setHotelSize(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-100">51-100 employees</option>
          <option value="100+">100+ employees</option>
        </select>

        <label className="form-label">Hotel Location</label>
        <input
          type="text"
          placeholder="Enter Hotel Location"
          className="form-input"
          value={hotelLocation}
          onChange={(e) => setHotelLocation(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button className="btn-outline" onClick={() => navigate(-1)}>Back</button>
        <button className="btn-primary" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Gendetails;
