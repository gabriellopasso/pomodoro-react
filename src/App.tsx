//PascalCase
//App
//HeaderHeading
import './styles/theme.css';
import './styles/goblal.css';
import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />;
    </TaskContextProvider>
  );
}
