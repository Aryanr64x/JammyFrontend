import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
