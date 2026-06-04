import { useState } from 'react';
import axios from 'axios';

export default function AIPlanner() {
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState('');

  const getPlan = async () => {
    const res = await axios.post('http://localhost:5000/api/ai/recommend', { goal });
    setResult(res.data.recommendation);
  };

  return (
    <div>
      <h2>AI Planner</h2>
      <input onChange={(e) => setGoal(e.target.value)} />
      <button onClick={getPlan}>Get Plan</button>
      <p>{result}</p>
    </div>
  );
}
