import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const HotelForm = () => {
    const [sopGroupName, setSopGroupName] = useState('');
    const [sopFiles, setSopFiles] = useState([]);
    const [sopDescription, setSopDescription] = useState('');
    const [sopList, setSopList] = useState([]);

    const [roomType, setRoomType] = useState('');
    const [roomPrice, setRoomPrice] = useState('');
    const [roomList, setRoomList] = useState([]);
    const [otherInfo, setOtherInfo] = useState('');

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/CompleteSetup');
    };


    const handleSopAdd = () => {
        if (sopGroupName && sopFiles.length > 0 && sopDescription) {
            const newSop = {
                groupName: sopGroupName,
                files: sopFiles.length,
                description: sopDescription,
            };
            setSopList([...sopList, newSop]);
            setSopGroupName('');
            setSopFiles([]);
            setSopDescription('');
        }
    };

    const handleRoomAdd = () => {
        if (roomType && roomPrice) {
            const newRoom = {
                roomType,
                roomPrice,
            };
            setRoomList([...roomList, newRoom]);
            setRoomType('');
            setRoomPrice('');
        }
    };

    return (
        <div className="hotel-form-container">
            <div className="form-section">
                <h4>Upload SOPs (Standard Operating Procedures)</h4>
                <input
                    type="text"
                    placeholder="Group Name"
                    value={sopGroupName}
                    onChange={(e) => setSopGroupName(e.target.value)}
                />
                <input
                    type="file"
                    multiple
                    onChange={(e) => setSopFiles(Array.from(e.target.files))}
                />
                <textarea
                    placeholder="Description"
                    value={sopDescription}
                    onChange={(e) => setSopDescription(e.target.value)}
                />
                <button onClick={handleSopAdd}>Add</button>

                {sopList.length > 0 && (
                    <div className="added-items">
                        <h4>Added Items:</h4>
                        {sopList.map((item, idx) => (
                            <div className="item-card" key={idx}>
                                <strong>Upload SOPs #{idx + 1}</strong>
                                <p><strong>Group Name:</strong> {item.groupName}</p>
                                <p><strong>Files:</strong> {item.files} file(s)</p>
                                <p><strong>Description:</strong> {item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="form-section">
                <h4>Add Room Types and Pricing</h4>
                <input
                    type="text"
                    placeholder="Room Type"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Room Price"
                    value={roomPrice}
                    onChange={(e) => setRoomPrice(e.target.value)}
                />
                <button onClick={handleRoomAdd}>Add</button>

                {roomList.length > 0 && (
                    <div className="added-items">
                        <h4>Added Items:</h4>
                        {roomList.map((room, idx) => (
                            <div className="item-card" key={idx}>
                                <strong>Room Number #{idx + 1}</strong>
                                <p><strong>Room Type:</strong> {room.roomType}</p>
                                <p><strong>Room Price:</strong> ₹{room.roomPrice}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="form-section">
                <h4>Other Information</h4>
                <textarea
                    placeholder="Enter any additional information..."
                    value={otherInfo}
                    onChange={(e) => setOtherInfo(e.target.value)}
                />
            </div>
            <div className="button-ro">
                <button className="secondary-btn" onClick={() => navigate(-1)}>Back</button>
                    <button onClick={handleContinue} className="primary-btn">Continue</button>
            </div>
        </div>

    
    );
};

export default HotelForm;
