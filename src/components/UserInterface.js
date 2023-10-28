```javascript
import React from 'react';
import '../styles/components.css';

const UserInterface = () => {
    return (
        <div className="user-interface">
            <div className="ui-header">
                <h1>Elysium Envisioned: An Interactive Gamified Investor Deck</h1>
            </div>
            <div className="ui-body">
                <p>Welcome to Elysium Innovations' interactive investor deck. Here, you will embark on a narrative journey that showcases our core competencies, vision, and the collaborative essence of our AI technology.</p>
                <p>Experience live demonstrations of our AI collaboration and life orchestration capabilities. Engage with our dedicated support interaction and gamified elements. And if you're interested, sign up to join our waitlist.</p>
                <p>For a quicker overview, feel free to use the skip feature at any time.</p>
            </div>
            <div className="ui-footer">
                <p>Thank you for your interest in Elysium Innovations. We look forward to revolutionizing the future with you.</p>
            </div>
        </div>
    );
}

export default UserInterface;
```