import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
const CallRoutingSetup = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [forwardList, setForwardList] = useState([]);

  const handleAdd = () => {
    if (!phoneNumber || !description) return;

    const newEntry = {
      id: Date.now(),
      phoneNumber,
      description,
    };

    setForwardList([...forwardList, newEntry]);
    setPhoneNumber("");
    setDescription("");
  };

  const handleRemove = (id) => {
    setForwardList(forwardList.filter((entry) => entry.id !== id));
  };
  

  return (
    <div className="call-routing-container">
      <h2>Call Routing Setup</h2>

      <div className="form-group">
        <label>Phone Numbers to Forward Calls To<span className="required">*</span></label>
        <div className="phone-input-group">
          <select className="country-code">
            <option value="IN">IN</option>
          </select>
          <span className="plus-code">+91</span>
          <input
            type="tel"
            className="input"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <small className="hint">Format: +91 xxxxx xxxxx</small>
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="input"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="btn" onClick={handleAdd}>Add</button>

      {forwardList.length > 0 && (
        <div className="added-items">
          <h4>Added Items:</h4>
          {forwardList.map((item, index) => (
            <div className="card" key={item.id}>
              <div className="card-header">
                <strong>Phone Numbers to Forward Calls To #{index + 1}</strong>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>×</button>
              </div>
              <p><strong>Phone Number:</strong> {item.phoneNumber}</p>
              <p><strong>Description:</strong> {item.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="button-group">
         <button className="btn secondary" onClick={() => navigate(-1)}>Back</button>
  <button className="btn primary" onClick={() => navigate("/HotelForm")}>Continue</button>
      </div>
    </div>
  );
};

export default CallRoutingSetup;
