import React, { useState } from "react";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/Home/Home.component";
import { Outlet, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PostDetail from "./routes/post-detail/post-detail.comopnent";
import Blog from "./routes/Blog/blog.component";
import About from "./routes/About/about.component";
import Contact from "./routes/Contact/contact.component";
import Header from "./components/header/header.component";
import "./app.css";
import BlogRedirect from "./components/blog-redirect/blogRedirect.component";
import NotFound from "./components/not-found 404/not-found-404.component";
import Resume from "./routes/resume/resume.component";

const App = () => {
  const [isNavOpened, setIsNavOpened] = useState(true);

  return (
    <>
      <div className="app">
        <Header setIsNavOpen={setIsNavOpened} isNavOpen={isNavOpened} />
        <AnimatePresence>
          {isNavOpened && <Navigation isNavOpened={isNavOpened} />}
        </AnimatePresence>
        <main className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="blog/*" element={<Outlet />}>
              <Route path="" element={<BlogRedirect />} />
              <Route path=":category" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
