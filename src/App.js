import './App.css';
import Footer from './Components/Features/Footer/Footer';
import Header from './Components/Features/Header/Header';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Home from './Components/Pages/Home/Home';
import TimeLine from './Components/Pages/TimeLine/TimeLine';
import Routing from './Components/Features/Routing/Routing';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header/>
      <Routing/>
   <Footer/>
    </div>
  );
}

export default App;
