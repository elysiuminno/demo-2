import React from 'react';
import { useDispatch } from 'react-redux';
import { skipFeature } from '../redux/actions';

const SkipFeature = () => {
  const dispatch = useDispatch();

  const handleSkip = () => {
    dispatch(skipFeature());
  };

  return (
    <div className="skip-feature">
      <button onClick={handleSkip} className="skip-button">
        Skip Interactive Elements
      </button>
    </div>
  );
};

export default SkipFeature;