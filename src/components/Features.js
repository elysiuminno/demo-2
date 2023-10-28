import React from 'react';
import InteractiveStorytelling from './InteractiveStorytelling';
import LiveDemonstrations from './LiveDemonstrations';
import DedicatedSupportInteraction from './DedicatedSupportInteraction';
import GamifiedElements from './GamifiedElements';
import WaitlistSignup from './WaitlistSignup';
import SkipFeature from './SkipFeature';

const Features = () => {
    return (
        <div>
            <h2>Features</h2>
            <InteractiveStorytelling />
            <LiveDemonstrations />
            <DedicatedSupportInteraction />
            <GamifiedElements />
            <WaitlistSignup />
            <SkipFeature />
        </div>
    );
};

export default Features;