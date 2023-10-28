import React from 'react';

const Technologies = () => {
    return (
        <div>
            <h2>Technologies</h2>
            <h3>Front-end</h3>
            <ul>
                <li>
                    <h4>React</h4>
                    <ul>
                        <li>Component-based architecture for modular and maintainable code.</li>
                        <li>Hooks for local state management within functional components.</li>
                    </ul>
                </li>
                <li>
                    <h4>Next.js</h4>
                    <ul>
                        <li>Server-side rendering for optimized load times and SEO.</li>
                        <li>Built-in routing system to manage the flow of the interactive journey.</li>
                    </ul>
                </li>
            </ul>
            <h3>Libraries and Plugins</h3>
            <ul>
                <li>
                    <h4>Three.js</h4>
                    <p>For rendering 3D graphics and animations during narrative storytelling and live demonstrations.</p>
                </li>
                <li>
                    <h4>Redux</h4>
                    <p>For managing global state across the application, especially useful for gamified elements and tracking user progress.</p>
                </li>
            </ul>
        </div>
    );
};

export default Technologies;