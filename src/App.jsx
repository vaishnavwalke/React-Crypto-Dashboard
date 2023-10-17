import Dashboard from './pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Transactions from './pages/Dashboard/components/Transactions';
import Support from './pages/Support/Support';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/transactions',
    element: <Transactions />,
  },
  {
    path: '/support',
    element: <Support />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
