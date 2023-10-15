import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Transcation from './pages/Transcation';
import Schedules from './pages/Schedules';
import Users from './pages/Users';
import Setting from './pages/Setting';
import './App.css';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { query } from './store/http';

function App() {
  return (
    <QueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="root" element={<Root />}>
            <Route index element={<Dashboard />} />
            <Route path="transcation" element={<Transcation />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="user" element={<Users />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
