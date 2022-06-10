import AnimatedCursor from 'react-animated-cursor';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import ContactMe from './components/ContactMe/ContactMe';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/NotFount/Notfound';
import ProjectDetails from './components/Projects/ProjectDetails';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
        <Route path="/*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <AnimatedCursor />
    </div>
  );
}

export default App;
