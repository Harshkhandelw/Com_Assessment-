import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();  

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignInSubmit = () => {
    console.log('Sign In Data:', signInData);
    localStorage.setItem('user', JSON.stringify(signInData));  // ✅ Store user data
    navigate('/prdetails');  // ✅ Redirect to Prdetails page
  };

  const handleSignUpSubmit = () => {
    console.log('Sign Up Data:', signUpData);
    // You can add signup API logic here
  };

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={signInData.email}
            onChange={handleSignInChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={signInData.password}
            onChange={handleSignInChange}
          />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit" onClick={handleSignInSubmit}>
          Sign In
        </button>
      </div>

      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btn" onClick={toggleForm}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>

        <div className="form sign-up">
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={signUpData.name}
              onChange={handleSignUpChange}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
          </label>
          <button type="button" className="submit" onClick={handleSignUpSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
