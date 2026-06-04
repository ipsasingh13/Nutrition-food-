import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Foods from './pages/Foods';
import AI from './pages/AI';

export default function App(){
 return(
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/dash' element={<Dashboard/>}/>
 <Route path='/foods' element={<Foods/>}/>
 <Route path='/ai' element={<AI/>}/>
 </Routes>
 </BrowserRouter>
 );
}
