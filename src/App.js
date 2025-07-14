import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Add/>}/>
      <Route path="/search" element={<Search/>}/>
       <Route path="/delete" element={<Delete/>}/>
        <Route path="/view" element={<View/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
