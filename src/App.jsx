import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";

function App() {

   return (
      <div className="App">
         <Header />
         <Nav />

         <Routes>
            <Route path="/" element={<p>Home</p>} />
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
            <Route path="/users" element={<p>Users</p>} />
            <Route path="*" element={<p>404 not found</p>} />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
