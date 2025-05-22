import { useState } from "react";
import './Login.css'; 

const Prdetails = () => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Phone:", `${countryCode} ${phone}`);
    
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhone", `${countryCode} ${phone}`);
    window.location.href = "/business";
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Hello, I'm AgukenAI.</h1>
        <p className="subtitle">
          I'm an AI Agent helping you handle reception and support calls using GenAI-based phone call automation.
        </p>

        <div className="form-group">
          <label>Nice to meet you, I'm</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>You can reach out at</label>
          <div className="phone-input">
            <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
              <option value="+91">IN +91</option>
              <option value="+1">US +1</option>
              <option value="+44">UK +44</option>
            </select>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <p className="format-hint">Format: +91 xxxxx xxxxx</p>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Continue
        </button>

        <p className="edit-note">You can always edit this later</p>
      </div>
    </div>
  );
};

export default Prdetails;
