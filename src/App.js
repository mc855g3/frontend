import './App.css';
import ChatPage from './pages/chatPage.js';
import QueuePage from './pages/queue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<ChatPage />} />
        <Route exact path={"/back"} element={<QueuePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
