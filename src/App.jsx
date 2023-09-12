import React, { useState } from "react";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/Home/Home.component";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./routes/post-detail/post-detail.comopnent";
import Blog from "./routes/Blog/blog.component";
import About from "./routes/About/about.component";
import Contact from "./routes/Contact/contact.component";
import Header from "./components/header/header.component";
import "./app.css";
import Notification from "./components/notification/notification";
import { useSelector } from "react-redux";

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
            <Route path="/" element={<Home />} />
            <Route path="posts/:postId" element={<PostDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
