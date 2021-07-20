import './App.css';
import Footer from './Components/Features/Footer/Footer';
import Header from './Components/Features/Header/Header';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Home from './Components/Pages/Home/Home';
import TimeLine from './Components/Pages/TimeLine/TimeLine';
function App() {
  return (
    <div className="App">
    <Header/>
    <TimeLine/>
    <Home/>
    <AboutMe/>
    <Footer/>
    </div>
  );
}

export default App;
