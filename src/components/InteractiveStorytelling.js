```javascript
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '../redux/actions';
import NarrativeJourney from './NarrativeJourney';

const InteractiveStorytelling = () => {
  const { progress, setProgress } = useProgress();

  useEffect(() => {
    setProgress(0);
  }, [setProgress]);

  return (
    <div className="interactive-storytelling">
      <Canvas>
        <NarrativeJourney progress={progress} />
      </Canvas>
    </div>
  );
};

export default InteractiveStorytelling;
```