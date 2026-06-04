import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stats')
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data.map((d, i) => (
        <p key={i}>{d.name} - {d.calories}</p>
      ))}
    </div>
  );
}
