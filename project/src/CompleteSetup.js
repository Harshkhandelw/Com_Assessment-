import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const countries = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
];

const CompleteSetup = () => {
  const [country, setCountry] = useState('+91');
  const [usage, setUsage] = useState('');
  const [callDirection, setCallDirection] = useState('');
  const [voiceLanguages, setVoiceLanguages] = useState(['Hindi']);
  const [voiceGender, setVoiceGender] = useState('Female');

  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('setupData'));
    if (saved) {
      setCountry(saved.country || '+91');
      setUsage(saved.usage || '');
      setCallDirection(saved.callDirection || '');
      setVoiceLanguages(saved.voiceLanguages || []);
      setVoiceGender(saved.voiceGender || 'Female');
    }
  }, []);

  const handleSave = () => {
    const data = {
      country,
      usage,
      callDirection,
      voiceLanguages,
      voiceGender,
    };
    localStorage.setItem('setupData', JSON.stringify(data));
   // navigate('/Success');
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    if (value && !voiceLanguages.includes(value)) {
      setVoiceLanguages([...voiceLanguages, value]);
    }
  };

  const removeLanguage = (lang) => {
    setVoiceLanguages(voiceLanguages.filter(l => l !== lang));
  };

  return (
    <div className="setup-form">
      <h2>Complete Your Setup</h2>
      <p>Please provide a few more details to help us customize your experience.</p>

      <label>Country & Code</label>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map(c => (
          <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
        ))}
      </select>

      <label>How will you use Aguken AI?</label>
      <textarea
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
        rows="4"
        maxLength="500"
      />

      <label>Call Direction</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Inbound"
            checked={callDirection === 'Inbound'}
            onChange={(e) => setCallDirection(e.target.value)}
          />
          Inbound (Receiving calls)
        </label>
        <label>
          <input
            type="radio"
            value="Outbound"
            checked={callDirection === 'Outbound'}
            onChange={(e) => setCallDirection(e.target.value)}
          />
          Outbound (Making calls)
        </label>
      </div>

      <label>Voice Languages (Select Multiple)</label>
      <select onChange={handleLanguageChange}>
        <option value="">Select language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
      </select>

      <div className="selected-languages">
        {voiceLanguages.map(lang => (
          <span key={lang} className="tag">
            {lang}
            <button onClick={() => removeLanguage(lang)}>×</button>
          </span>
        ))}
      </div>

      <label>Voice Gender</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="Male"
            checked={voiceGender === 'Male'}
            onChange={(e) => setVoiceGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={voiceGender === 'Female'}
            onChange={(e) => setVoiceGender(e.target.value)}
          />
          Female
        </label>
      </div>
      <div className='neee'>
        <button onClick={handleSave} className="save-button">Save Information</button>
       <button onClick={() => navigate('/Success')}>Continue</button>
      </div>

    </div>
  );
};

export default CompleteSetup;
