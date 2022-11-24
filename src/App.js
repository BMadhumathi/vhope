//import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contact';
import Login from './components/login';
import SignUpForm from './components/signup';
import About from './components/about';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    
    <Route path="/signup" element={<SignUpForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    );
}

export default App;
