import React, { useEffect, useState } from 'react';
import './Login.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faGear, faHouse, faHotel, faUserDoctor, faCalendarCheck, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const sampleData = [
  { name: 'Mon', calls: 10 },
  { name: 'Tue', calls: 15 },
  { name: 'Wed', calls: 5 },
  { name: 'Thu', calls: 20 },
  { name: 'Fri', calls: 8 }
];

const intentsData = [
  { name: 'Support', count: 0 },
  { name: 'Sales', count: 0 },
  { name: 'Billing', count: 0 },
  { name: 'Feedback', count: 0 }
];

const businessTypes = [
  { name: 'Hotels', desc: 'Boutique Hotels, Business Hotels, 4 star + Hotels', icon: faHotel },
  { name: 'Clinics', desc: 'Medical Clinics, Dental Clinics, Specialty Clinics', icon: faUserDoctor },
  { name: 'Event Organizers', desc: 'Wedding Planners, Corporate Event Managers, Concert Organizers', icon: faCalendarCheck },
  { name: 'Others', desc: 'For individuals, micro-businesses, or other industries like BFSI, IT, BPOs, etc.', icon: faBagShopping }

];

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedBusiness, setSelectedBusiness] = useState('Hotels');
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

  const [activeSettingsTab, setActiveSettingsTab] = useState('Agent');
  useEffect(() => {
    const interval = setInterval(() => {
      setData(sampleData);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">A</div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <button onClick={() => setActiveTab('Overview')} className="icon-butto">
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('Calls')} className="icon-butto">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('Settings')} className="icon-butto">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>{activeTab}</h1>
          <div className="user-info">
            <span className="time-left">60 mins left</span>
            <button className="add-button">+</button>
            <div className="user-initial">{initials}</div>
          </div>
        </header>

        {activeTab !== 'Calls' && activeTab !== 'Settings' && (
          <section className="usage-box">
            <p>Additional Minutes Used</p>
            <h2>0</h2>
          </section>
        )}

        {activeTab !== 'Calls' && activeTab !== 'Settings' && (
          <div className="tabs">
            {['Overview', 'Performance', 'Intents'].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {activeTab === 'Overview' && (
          <section className="data-cards">
            <div className="data-card">
              <h3>Call Volume Over Time</h3>
              {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calls" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p>No data available</p>
              )}
            </div>
            <div className="data-card">
              <h3>Call Status</h3>
              {data.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calls" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p>No data available</p>
              )}
            </div>
            <div className="data-card">
              <h3>Call Volume 3D Graph</h3>
              {data.length > 0 ? (
                <Canvas style={{ height: 200 }}>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <OrbitControls />
                  <Box position={[0, 0, 0]} args={[1, data[0].calls / 10, 1]}>
                    <meshStandardMaterial attach="material" color="orange" />
                  </Box>
                </Canvas>
              ) : (
                <p>No data available</p>
              )}
            </div>
          </section>
        )}

        {activeTab === 'Intents' && (
          <section className="data-cards">
            <div className="data-card">
              <h3>Call Intents</h3>
              <p>No data available</p>
            </div>
            <div className="data-card">
              <h3>Top Intents by Volume</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={intentsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#4c84ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        {activeTab === 'Calls' && (
          <section className="calls-layout">
            <div className="calls-panel">
              <h3>Calls</h3>
              <div className="call-main">
                <div>
                  <div className="filters">
                    <button>Completed</button>
                    <button>Cancelled</button>
                    <button>In Progress</button>
                    <button>All</button>
                  </div>
                  <p>No calls found</p>
                </div>
                <div className="call-details">
                  <h3>Unknown</h3>
                  <p>No call selected</p>
                  <small>Select a call from the list to view details.</small>
                </div>
                <div className="call-analytics">
                  <h3>Call Analytics</h3>
                  <p>No call selected</p>
                  <small>Select a call from the list to view analytics and details.</small>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeTab === 'Settings' && (
          <section className="settings-page">
            <div className="tab-navigation">
              <button
                className={`tab ${activeSettingsTab === 'Agent' ? 'active' : ''}`}
                onClick={() => setActiveSettingsTab('Agent')}
              >
                Agent Settings
              </button>
              <button
                className={`tab ${activeSettingsTab === 'Business' ? 'active' : ''}`}
                onClick={() => setActiveSettingsTab('Business')}
              >
                Business Settings
              </button>
              <button
                className={`tab ${activeSettingsTab === 'Analytics' ? 'active' : ''}`}
                onClick={() => setActiveSettingsTab('Analytics')}
              >
                Analytics Settings
              </button>
            </div>

            {activeSettingsTab === 'Agent' && (
              <div className="settings-content">
                <h3>Agent Configuration</h3>
                <p>Customize how your AI agent communicates with callers.</p>

                <div className="setting-newG">
                  <label className='newclass'>Agent Status</label>
                  <div className='new-di'>
                  <p>Your agent is currently active and responding to calls</p>
                  </div>
                  <input type="checkbox"  />
                </div>

                <div className="setting-group">
                  <label className='newclass'>Prompt Text</label>
                  <textarea placeholder="Enter additional prompt instructions for your agent..." />
                </div>

                <div className="setting-group">
                  <label className='newclass'>Greeting Message</label>
                  <textarea placeholder='Enter Message' />
                </div>

                <details className="advanced-settings">
                  <summary>Advanced Configuration</summary>
                </details>

                <button className="save-button">Save Changes</button>
              </div>
            )}

            {activeSettingsTab === 'Business' && (
              <div className="settings-content">
                <h3>Business Type</h3>
                <p>Select your business type to customize the configuration.</p>

                <div className="business-type-grid">
                  {businessTypes.map(({ name, desc, icon }) => (
                    <div
                      key={name}
                      className={`business-card ${selectedBusiness === name ? 'selected' : ''}`}
                      onClick={() => setSelectedBusiness(name)}
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          icon={icon}
                          size="2x"
                          color={selectedBusiness === name ? '#a445f7' : '#555'}
                        />
                      </div>
                      <h4>{name}</h4>
                      <p>{desc}</p>
                      {selectedBusiness === name && <span className="selected-tag">Selected</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSettingsTab === 'Analytics' && (
              <div className="settings-content">
                <h3>Analytics Configuration</h3>
                <p>Setup how you want to track your call analytics.</p>
                <p>(Placeholder for future analytics settings)</p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;