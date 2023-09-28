export const SET_RANDOM_GREETING = 'SET_RANDOM_GREETING';

export const setRandomGreeting = (message) => ({
  type: SET_RANDOM_GREETING,
  payload: message,
});
