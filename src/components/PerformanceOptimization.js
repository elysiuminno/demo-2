import React, { lazy, Suspense } from 'react';

// Lazy load components for performance optimization
const NarrativeJourney = lazy(() => import('./InteractiveStorytelling'));
const AICollaborationDemo = lazy(() => import('./LiveDemonstrations'));
const LifeOrchestrationDemo = lazy(() => import('./LiveDemonstrations'));
const SupportChatSimulation = lazy(() => import('./DedicatedSupportInteraction'));
const KnowledgeQuizzes = lazy(() => import('./GamifiedElements'));
const ProgressTracking = lazy(() => import('./GamifiedElements'));
const InteractiveSignup = lazy(() => import('./WaitlistSignup'));
const QuickOverviewOption = lazy(() => import('./SkipFeature'));

const PerformanceOptimization = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NarrativeJourney />
        <AICollaborationDemo />
        <LifeOrchestrationDemo />
        <SupportChatSimulation />
        <KnowledgeQuizzes />
        <ProgressTracking />
        <InteractiveSignup />
        <QuickOverviewOption />
      </Suspense>
    </div>
  );
};

export default PerformanceOptimization;