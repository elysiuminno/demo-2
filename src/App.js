import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Overview from './components/Overview';
import Objective from './components/Objective';
import TargetAudience from './components/TargetAudience';
import Technologies from './components/Technologies';
import Features from './components/Features';
import UserInterface from './components/UserInterface';
import PerformanceOptimization from './components/PerformanceOptimization';
import Security from './components/Security';
import Testing from './components/Testing';
import Timeline from './components/Timeline';
import Documentation from './components/Documentation';
import Analytics from './components/Analytics';
import FutureEnhancements from './components/FutureEnhancements';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Overview />
        <Objective />
        <TargetAudience />
        <Technologies />
        <Features />
        <UserInterface />
        <PerformanceOptimization />
        <Security />
        <Testing />
        <Timeline />
        <Documentation />
        <Analytics />
        <FutureEnhancements />
      </div>
    </Provider>
  );
}

export default App;