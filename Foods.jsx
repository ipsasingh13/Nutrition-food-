import {useEffect,useState} from 'react';
import axios from 'axios';

export default function Foods(){
 const [f,setF]=useState([]);

 useEffect(()=>{
 axios.get('http://localhost:5000/api/foods')
 .then(r=>setF(r.data));
 },[]);

 return <div>{f.map(x=><p key={x._id}>{x.name}</p>)}</div>;
}
