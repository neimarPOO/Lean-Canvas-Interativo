import React, { useState } from 'react'
import LeanCanvas from './components/LeanCanvas'
import LandingPage from './components/LandingPage'

function App() {
  const [started, setStarted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      setStarted(true);
    }, 800); // Matches CSS animation duration
  };

  return (
    <div className="min-h-screen bg-slate-900 selection:bg-brutal-indigo selection:text-white">
      {!started ? (
        <LandingPage onStart={handleStart} isExiting={isExiting} />
      ) : (
        <LeanCanvas />
      )}
    </div>
  )
}

export default App
