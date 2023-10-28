```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWaitlist } from '../redux/actions';

const WaitlistSignup = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToWaitlist(email));
    setEmail('');
  };

  return (
    <div className="waitlist-signup">
      <h2>Join the Waitlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default WaitlistSignup;
```