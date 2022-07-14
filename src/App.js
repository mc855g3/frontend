import './App.css';
import ChatPage from './pages/chatPage.js';
import QueuePage from './pages/queue';
import LoginPage from './pages/loginPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<ChatPage />} />
          <Route exact path={"/back"} element={<QueuePage />} />
          <Route exact path={"/login"} element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
