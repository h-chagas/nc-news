import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlePage from "./components/ArticlePage";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import { UserContext } from "./context/Users";

function App() {

   const value = useContext(UserContext)
   
   return (
      <div className="App">
         <Header />
         <Nav />

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
               path="/topics"
               element={<Topics/>}
            />
            <Route
               path="/topics/:topic_slug"
               element={<Articles />}
            />
            <Route
               path="/articles"
               element={<Articles/>}
            />
            <Route
               path="/articles/:article_id"
               element={<ArticlePage/>} //This route goes to a article page
            />
            <Route path="*" element={<p>404 not found</p>} />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
