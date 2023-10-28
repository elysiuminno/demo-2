import React from 'react';

/**
 * FutureEnhancements component
 * This component is responsible for displaying the future enhancements section of the investor deck.
 * It includes a feedback mechanism to collect user insights and suggestions for improving the interactive experience.
 */
const FutureEnhancements = () => {
  return (
    <div className="future-enhancements">
      <h2>Future Enhancements</h2>
      <p>We are always looking to improve and enhance our platform. Your feedback is invaluable to us.</p>
      <form>
        <label htmlFor="feedback">Share your thoughts:</label>
        <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FutureEnhancements;