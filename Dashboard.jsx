import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Dashboard(){
 const [d,setD]=useState([]);

 useEffect(()=>{
 axios.get('http://localhost:5000/api/stats')
 .then(r=>setD(r.data));
 },[]);

 return <div>{d.map((i,k)=><p key={k}>{i.name}-{i.calories}</p>)}</div>;
}
