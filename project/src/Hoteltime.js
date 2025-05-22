import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const weekdayIndices = [0, 1, 2, 3, 4];
const weekendIndices = [5, 6];

const Hoteltime = () => {
    const navigate = useNavigate();
    const [selectedDays, setSelectedDays] = useState([]);
    const [files, setFiles] = useState([]);
  const [description, setDescription] = useState("");
  const [groupName, setGroupName] = useState("");
  const [fromTime, setFromTime] = useState("09:00");
  const [toTime, setToTime] = useState("21:00");

    const [submissions, setSubmissions] = useState([]);

    const handleAdd = () => {
    if (!groupName || !description || files.length === 0) return;


     const newEntry = {
      id: Date.now(),
      fromTime,
      toTime,
      groupName,
      description,
      files: [...files],
    };
    setSubmissions([...submissions, newEntry]);
    setGroupName("");
    setDescription("");
    setFiles([]);
  };

   const handleRemove = (id) => {
    setSubmissions(submissions.filter((item) => item.id !== id));
  };
    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const toggleDay = (index) => {
        setSelectedDays((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };
  const handleContinue = () => {
    navigate("/CallRoutingsetup"); 
  };
    const selectAll = () => setSelectedDays(dayNames.map((_, i) => i));
    const selectWeekdays = () => setSelectedDays(weekdayIndices);
    const selectWeekend = () => setSelectedDays(weekendIndices);
    const clearSelection = () => setSelectedDays([]);

    return (
        <div className="hoteltime-container">
            <div className="mb-6">
                <h4 className="section-title">Total Number of Room</h4>
                <input type="number" className="input-field" />
            </div>

            <div>
                <h4 className="section-title">Reception Operating Hours</h4>
                <h2 className="section-title">Operating Hours</h2>

                <div className="button-g">
                    <button className="BU" onClick={selectAll}>All Days</button>
                    <button className="BU" onClick={selectWeekdays}>Weekdays</button>
                    <button className="BU" onClick={selectWeekend}>Weekend</button>
                    <button className="BU" onClick={clearSelection}>Clear</button>
                </div>

                <div className="button-g">
                    {dayNames.map((day, index) => (
                        <button
                            key={day}
                            onClick={() => toggleDay(index)}
                            className={`day-button ${selectedDays.includes(index) ? "selected" : ""}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
            <div className="form-container">
      <div className="time-input-group">
        <div className="form-group">
          <label className="labb">From</label>
          <input
            type="time"
            className="inp"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="labb">To</label>
          <input
            type="time"
            className="inp"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Upload Menus (for food ordering or inquiries)</label>
        <input
          type="text"
          className="input"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      <div className="form-group file-upload">
        <label className="file-label">
          <input
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          {files.length > 0
            ? files.map((file, i) => <div key={i}>{file.name}</div>)
            : "Upload files or drag and drop"}
        </label>
        <p className="file-info">PDF, PNG, JPG, JPEG (MAX. 10MB each)</p>
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

      <div className="button-group">
        <button className="btn secondary" onClick={() => navigate(-1)}>Back</button>
        <button className="btn" onClick={handleAdd}>Add</button>
       <button className="btn primary" onClick={handleContinue}>Continue</button>
      </div>

      {submissions.length > 0 && (
        <div className="output-section">
          <h3>Added Items:</h3>
          {submissions.map((item, index) => (
            <div key={item.id} className="card">
              <div className="card-header">
                <strong>Upload Menus (for food ordering or inquiries) #{index + 1}</strong>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>×</button>
              </div>
              <p><strong>Group Name:</strong> {item.groupName}</p>
              <p><strong>Files:</strong> {item.files.length} file(s)</p>
              <p><strong>Description:</strong> {item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
        </div>
    );
};

export default Hoteltime;
