import MainHeader from './components/MainHeader';
import Main from './components/MainBoard';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
