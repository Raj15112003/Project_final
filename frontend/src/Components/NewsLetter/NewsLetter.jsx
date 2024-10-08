import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    try {
      // Send the email to the backend for subscription
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
      } else {
        // Handle error response
        console.error('Failed to subscribe:', response.statusText);
      }
    } catch (error) {
      console.error('Error subscribing:', error.message);
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {subscribed && <p>Thank you for subscribing!</p>}
    </div>
  );
};

export default NewsLetter;
