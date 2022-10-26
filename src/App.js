import logo from './logo.svg';
import './App.css';
import Home from './Componants/Home';
import Nav from './Componants/Nav';
import Footer from './Componants/Footer';
import Single from './Componants/SinglePost';
import Category from './Componants/Category';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Single/:id" element={<Single />}></Route>
          <Route path="/Category/:name" element={<Category />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
