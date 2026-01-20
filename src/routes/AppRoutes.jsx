import { Routes, Route } from 'react-router-dom';
import Auth from '../page/Auth';
import Feedback from '../page/Feedback';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default AppRoutes;
