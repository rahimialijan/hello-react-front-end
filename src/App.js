// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomGreeting } from './redux/actions';
import Greeting from './components/Greeting';

function App() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.randomGreeting);

  useEffect(() => {
    // Fetch random greeting from your API endpoint using the environment variable
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    fetch(`${apiUrl}/random_greeting`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setRandomGreeting(data.greeting));
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting message={randomGreeting} />} />
      </Routes>
    </Router>
  );
}

export default App;
