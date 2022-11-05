import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div className='w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
