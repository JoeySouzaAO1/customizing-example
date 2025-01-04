import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Promo from './components/promo';
import Intro1 from './components/intro1';
import Intro2 from './components/intro2';
import Intro3 from './components/intro3';
import Footer from './components/footer';



function App() {
  return (
  <div>
  <div className = "main-title">
   < Nav />
  </div>

  <div className = "promo-1">
   < Promo />
  </div>

  <div className = "intro-1" >
   < Intro1 reaction = "Woohoo!"/>
  </div>

  <div className = "intro-2">
   < Intro2 reaction = "Curious?!"/>
  </div>

  <div className = "intro-3">
   < Intro3 reaction = "HMM??!!"/>
  </div>

  <div className = "footer-main">
   < Footer />
  </div>
  </div>
);
}

export default App;
