import AnimatedCursor from 'react-animated-cursor';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <AnimatedCursor />
    </div>
  );
}

export default App;
