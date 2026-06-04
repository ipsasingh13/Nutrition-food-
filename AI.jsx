import {useState} from 'react';
import axios from 'axios';

export default function AI(){
 const [goal,setGoal]=useState('');
 const [res,setRes]=useState('');

 const send=async()=>{
 const r=await axios.post('http://localhost:5000/api/ai/recommend',{goal});
 setRes(r.data.msg);
 };

 return (
 <div>
 <input onChange={e=>setGoal(e.target.value)} />
 <button onClick={send}>Go</button>
 <p>{res}</p>
 </div>
 );
}
