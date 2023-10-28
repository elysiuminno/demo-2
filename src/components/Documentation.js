import React from 'react';

/**
 * Documentation component to provide user guide and code documentation.
 * @component
 */
function Documentation() {
  return (
    <div className="documentation">
      <h1>Documentation</h1>
      <div className="user-guide">
        <h2>User Guide</h2>
        <p>This interactive investor deck is designed to be intuitive and engaging. Navigate through the deck using the forward and back buttons, or use the skip feature for a quicker overview. Engage with the gamified elements like quizzes and progress tracking to enhance your understanding of Elysium Innovations' vision and technology.</p>
      </div>
      <div className="code-documentation">
        <h2>Code Documentation</h2>
        <p>The code for this application is meticulously executed and thoroughly documented. Each component, function, and variable is described using JSDoc comments. For a detailed understanding of the codebase, please refer to the comments within the code.</p>
      </div>
    </div>
  );
}

export default Documentation;