import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Foods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then(res => setFoods(res.data));
  }, []);

  return (
    <div>
      <h2>Foods</h2>
      {foods.map(f => (
        <div key={f._id}>{f.name} - {f.calories}</div>
      ))}
    </div>
  );
}
