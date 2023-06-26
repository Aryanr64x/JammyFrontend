import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';

import JamPage from './pages/JamPage';
import LiveJamPage from './pages/LiveJamPage';
import PublishedJam from './pages/PublishedJamPage';
function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/live' element={<LiveJamPage />} />
          <Route path='/jam/:id' element={<JamPage />} />
          <Route path="/published" element={<PublishedJam />} />
        </Routes>
    </div>
  );
}

export default App;
