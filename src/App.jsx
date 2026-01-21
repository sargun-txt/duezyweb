import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Onboarding from './components/Onboarding';
import CalendarSync from './components/CalendarSync';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import CourseHub from './components/CourseHub';
import GradeCalculator from './components/GradeCalculator';
import AIScheduler from './components/AIScheduler';
import AIAssistant from './components/AIAssistant';
import TADashboard from './components/TADashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/calendar-sync" element={<CalendarSync />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-hub" element={<CourseHub />} />
        <Route path="/grade-calculator" element={<GradeCalculator />} />
        <Route path="/ai-scheduler" element={<AIScheduler />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/ta-dashboard" element={<TADashboard />} />
      </Routes>
    </Router>
  );
}

export default App
