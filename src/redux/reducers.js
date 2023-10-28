```javascript
import { combineReducers } from 'redux';

// Action types
const SET_PROGRESS = 'SET_PROGRESS';
const SET_QUIZ_ANSWERS = 'SET_QUIZ_ANSWERS';
const SET_WAITLIST_SIGNUP = 'SET_WAITLIST_SIGNUP';
const SET_SKIP_FEATURE = 'SET_SKIP_FEATURE';

// Initial state
const initialState = {
  progress: 0,
  quizAnswers: {},
  waitlistSignup: {},
  skipFeature: false,
};

// Reducers
const progressReducer = (state = initialState.progress, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return action.payload;
    default:
      return state;
  }
};

const quizAnswersReducer = (state = initialState.quizAnswers, action) => {
  switch (action.type) {
    case SET_QUIZ_ANSWERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const waitlistSignupReducer = (state = initialState.waitlistSignup, action) => {
  switch (action.type) {
    case SET_WAITLIST_SIGNUP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const skipFeatureReducer = (state = initialState.skipFeature, action) => {
  switch (action.type) {
    case SET_SKIP_FEATURE:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  progress: progressReducer,
  quizAnswers: quizAnswersReducer,
  waitlistSignup: waitlistSignupReducer,
  skipFeature: skipFeatureReducer,
});

export default rootReducer;
```