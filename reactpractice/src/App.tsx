import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import UserProfile from './assets/UserProfile'


function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
        <option value={4}>User 4</option>
        <option value={5}>User 5</option>
      </select>
      <UserProfile userId={userId} />

    </div>
  );
}

export default App
