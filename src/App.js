import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import "./App.css";
import WorkExperience from './pages/WorkExperience';


// intro profile photo all education all projects with github and hosting link
// add work exprericne section which would be initially empty
// view and download resume contact section with linkedin instagram github email
// also add leetcode, codeforces, gfg and codechef link
// make the project responsive
// if possible add all the interview experience

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='aboutme' element={<AboutMe />} />
            <Route path='contactme' element={<ContactMe />} />
            <Route path='projects' element={<Projects />} />
            <Route path='work-experience' element={<WorkExperience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;