import { useEffect, useRef, useState } from 'react';
import './App.css';
import Pong from './Views/Pong';

function App() {
  const [showPong, setShowPong] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [difficulty, setDifficulty] = useState('1');
  const [isVsAi, setIsVsAi] = useState(false);
  const mainWindowRef = useRef();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowPong(true);
    }
  };
  useEffect(() => {
    mainWindowRef.current.focus();
  }, []);
  if (showPong) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 600 }}>
        <Pong isVsAi={isVsAi} difficulty={difficulty} onShowPong={(e) => setShowPong(e)} />;
      </div>
    );
  }
  if (gameMode) {
    return (
      <div
        style={{
          color: '#fff',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: 600,
          textAlign: 'center',
        }}>
        <p onClick={() => setDifficulty('1')}>level 1</p>
        <p onClick={() => setDifficulty('1.75')}>level 2</p>
        <p onClick={() => setDifficulty('2.5')}>level 3</p>
        <p onClick={() => setGameMode(false)}>Back</p>
      </div>
    );
  }
  return (
    <div
      ref={mainWindowRef}
      onKeyPress={handleKeyDown}
      tabIndex='0'
      style={{
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,
        textAlign: 'center',
      }}>
      <h1>PONG GAME</h1>
      <p
        onClick={() => {
          setIsVsAi(false);
          setShowPong(true);
        }}>
        Player vs Player
      </p>
      <p
        onClick={() => {
          setIsVsAi(true);
          setShowPong(true);
        }}>
        Player vs CPU
      </p>
      <p onClick={() => setGameMode(true)}>Game Mode</p>
    </div>
  );
}

export default App;
