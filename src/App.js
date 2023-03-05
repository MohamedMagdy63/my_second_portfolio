import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
