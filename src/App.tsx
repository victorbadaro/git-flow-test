import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { AppRoutes } from './routes';
import './styles/global.css';

export function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}