// src/App.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import StudentDetailPage from './pages/StudentDetailPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StudentDetails" element={<HomePage />} />
        <Route path="/StudentDetails/student/:id" element={<StudentDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
