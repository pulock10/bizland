
import './assets/vendor/aos/aos.css'; 
import './assets/vendor/bootstrap/css/bootstrap.min.css'; 
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'; 
import './assets/vendor/boxicons/css/boxicons.min.css'; 
import './assets/vendor/glightbox/css/glightbox.min.css'; 
import './assets/vendor/swiper/swiper-bundle.min.css'; 
import './assets/css/style.css';  
import React from 'react';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './App.css'; 
import About from './pages/About'; 
import Menu from './pages/menu'; 
import Herosection from './pages/herosection'; 
import Htmlfooter from './pages/htmlfooter'; 
import Home from './pages/home'; 
import Service from './pages/Service'; 
import Portfolio from './pages/Portfolio'; 
import Team from './pages/Team'; 
import Contact from './pages/Contact'; 
import Appletouch from './assets/img/apple-touch-icon.png'; 
import { Component } from 'react';
import Hearder  from './components/Hearder';
 
class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render (){ 

   
  return (
   
  
 <div>
 
<Hearder title="ok"></Hearder>
 
<main id="main"> 
 
    <BrowserRouter >
    <Menu />
      <Herosection></Herosection>
   
        <Routes >
         <Route path="/"  element={<Home />}/> 
          <Route exact path="/About" caseSensitive={false} element={<About />} />   
          <Route exact path="/Service" caseSensitive={false} element={<Service />} />   
          <Route exact path="/Portfolio" caseSensitive={false} element={<Portfolio />} />   
          <Route exact path="/Team" caseSensitive={false} element={<Team />} />   
          <Route exact path="/Contact" caseSensitive={false} element={<Contact />} />   
          

        </Routes>

        <Htmlfooter></Htmlfooter>   
      </BrowserRouter>
  </main>



   
     
 </div>
    
  );
  }

  
}

  
 
 
 
 

export default App;