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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignInSignup/SignIn';
import SignUp from './components/SignInSignup/SignUp';
import { useState } from 'react';
import NewPost from './Dashboard/Blogs/NewPost';
import Dashboard from './Dashboard/Dashboard';
import RequireAuth from './components/RequireAuth/RequireAuth';
import HeaderTop from './components/Header/HeaderTop';
import Blogs from './Dashboard/Blogs/Blogs';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

function App() {
  const [header, setHeader] = useState(true)
  const [headerTop, setHeaderTop] = useState(false)
  const [user] = useAuthState(auth);
  return (
    <div>
      {
        header && <Header></Header>
      }
      {
        (headerTop || user) && <HeaderTop></HeaderTop>
      }

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth><Dashboard
            header={setHeader}
            headerTop={setHeaderTop}
          ></Dashboard></RequireAuth>
        }>
          <Route path='post' element={<Blogs></Blogs>}></Route>
          <Route path='addpost' element={<NewPost></NewPost>}></Route>
        </Route>

        <Route path="/login" element={<SignIn header={setHeader}></SignIn>}></Route>
        <Route path="/register" element={<SignUp header={setHeader}></SignUp>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
        <Route path="/*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
