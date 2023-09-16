import React, { useState } from "react";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/Home/Home.component";
import { Outlet, Route, Routes, Redirect } from "react-router-dom";
import PostDetail from "./routes/post-detail/post-detail.comopnent";
import Blog from "./routes/Blog/blog.component";
import About from "./routes/About/about.component";
import Contact from "./routes/Contact/contact.component";
import Header from "./components/header/header.component";
import "./app.css";
import Notification from "./components/notification/notification";
import { useSelector } from "react-redux";
import BlogRedirect from "./components/blog-redirect/blogRedirect.component";
import NotFound from "./components/not-found 404/not-found-404.component";

const App = () => {
  const [isNavOpened, setIsNavOpened] = useState(true);
  const notification = useSelector((state) => state.notification);

  return (
    <>
      {notification.message && <Notification notification={notification} />}
      <div className="app">
        <main className="container">
          <Header setIsNavOpen={setIsNavOpened} isNavOpen={isNavOpened} />
          {isNavOpened && <Navigation isNavOpened={isNavOpened} />}
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
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
