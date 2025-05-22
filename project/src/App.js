import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prdetails from './Prdetail';
import Business from './Business';
import Gendetails from './Gendetails';
import Hoteltime from './Hoteltime';
import CallRoutingSetup from './CallRoutingsetup';
import HotelForm from './Hoteldetails';
import CompleteSetup from './CompleteSetup';
import SuccessPage from './SuccessPage';
import Dashboard from './Dashbord';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/prdetails" element={<Prdetails />} />
        <Route path="/" element={<Prdetails />} />
        <Route path="/business" element={<Business />} />
        <Route path="/" element={<Business />} />
        <Route path="/Gendetails" element={<Gendetails />} />
        <Route path="/" element={<Gendetails />} />
        <Route path="/Hoteltime" element={<Hoteltime />} />
        <Route path="/" element={<Hoteltime />} />
        <Route path="/CallRoutingSetup" element={<CallRoutingSetup />} />
        <Route path="/" element={<CallRoutingSetup />} />
        <Route path="/HotelForm" element={<HotelForm />} />
        <Route path="/" element={<HotelForm />} />
        <Route path="/success" element={<CompleteSetup />} />
        <Route path="/" element={<CompleteSetup />} />
        <Route path="/CompleteSetup" element={<SuccessPage />} />
        <Route path='/' element={<SuccessPage/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
