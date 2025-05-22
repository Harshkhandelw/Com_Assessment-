import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Business = () => {
  const [userName, setUserName] = useState("");
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

  const handleHotelClick = () => {
    navigate("/gendetails");
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

      <h2 className="welcome-heading">Lovely to meet you {userName}.</h2>
      <p className="sub-instruction">
        Please select the type of business you want to use receptionAI for:
      </p>

      <div className="business-options">
        <div className="card clickable" onClick={handleHotelClick}>
          <FontAwesomeIcon icon={faMobileScreen} className="icon" />
          <h3>Hotels</h3>
          <p>Boutique Hotels, Business Hotels, 4 star + Hotels</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faMobileScreen} className="icon" />
          <h3>Clinics</h3>
          <p>Medical Clinics, Dental Clinics, Specialty Clinics</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faMobileScreen} className="icon" />
          <h3>Event Organizers</h3>
          <p>Wedding Planners, Corporate Event Managers, Concert Organizers</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faMobileScreen} className="icon" />
          <h3>Others</h3>
          <p>
            For individuals, micro-businesses, or other industries like BFSI, IT,
            BPOs, etc.
          </p>
        </div>
      </div>

      <div className="button-group">
        <button className="btn-outline" onClick={() => navigate(-1)}>Back</button>
        <button className="btn-primary" disabled>Continue</button>
      </div>
    </div>
  );
};

export default Business;
