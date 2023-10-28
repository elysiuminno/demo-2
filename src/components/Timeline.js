import React from 'react';

const Timeline = () => {
    const milestones = [
        { id: 1, name: 'Design Phase', status: 'Completed' },
        { id: 2, name: 'Development Phase', status: 'In Progress' },
        { id: 3, name: 'Testing Phase', status: 'Upcoming' },
        { id: 4, name: 'Deployment Phase', status: 'Upcoming' },
    ];

    return (
        <div className="timeline">
            <h2>Project Timeline</h2>
            {milestones.map((milestone) => (
                <div key={milestone.id} className="milestone">
                    <h3>{milestone.name}</h3>
                    <p>Status: {milestone.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;