```javascript
// Action Types
export const SET_PROGRESS = 'SET_PROGRESS';
export const SET_QUIZ_ANSWERS = 'SET_QUIZ_ANSWERS';
export const SET_WAITLIST_SIGNUP = 'SET_WAITLIST_SIGNUP';
export const SET_SKIP_FEATURE = 'SET_SKIP_FEATURE';

// Action Creators
export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  payload: progress,
});

export const setQuizAnswers = (answers) => ({
  type: SET_QUIZ_ANSWERS,
  payload: answers,
});

export const setWaitlistSignup = (signupData) => ({
  type: SET_WAITLIST_SIGNUP,
  payload: signupData,
});

export const setSkipFeature = (skip) => ({
  type: SET_SKIP_FEATURE,
  payload: skip,
});
```