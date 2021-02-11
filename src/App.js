import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MenuContext } from "react-flexible-sliding-menu";
import { HamburgerSVG } from './svgs';
import './index.css';
import Home from './pages/home';
import Abotu from './pages/about';
import About from "./pages/about";

function App() {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="App">

        <div onClick={toggleMenu} className='hamburger'>
          <HamburgerSVG/>
        </div>

      <Route exact path="/" component={() => <Home />} />
      <Route path="/about" component={() => <About />} />
      <Route path="/gallery" component={() => <h2>Gallery Component</h2>} />

    </div>
  );
}

export default App;

// import React, {useState} from 'react';
// import './App.css';
// import Navigation from './components/navigation';


// const App = () => {

//   const [page, setPage] = useState('home');

//   return (
//     <div className='page'>

//       <div className='navbar'>
//         <Navigation handlechange={setPage} activePage={page} />
//       </div>

//       <div className='container'>



//       </div>
//     </div>
//   );
// }

// export default App;




// <div className="containerTwo">
// <div className="title"> Who Am I?</div>
// <div className="content"> Hello, World! I firmly believe that software is not
//  merely code and a breakdown to binary numbers, but rather an art to make life 
//  more simple and enjoyable.  I plan to contribute to our growing world of software.
//   </div>
//   <div className="content"> I go to the University of Virginia. 
//   I am studying at the School of Engineering and Applied Sciences.
//    I will graduate with a BS in Computer Science in May 2020. </div>
// </div>

// <div className="containerThree">
// <div className="title"> Experience</div>
// <a className="link" href="https://www.washingtonpost.com/"> The Washington Post </a>
// <div className="content"> Worked for two summers and one winter as a backend and 
// frontend software engineer.  </div>

// <a className="link" href="https://github.com/alexgrace7"> Personal Projects </a>
// <div className="content"> I have begun several projects of my own, unrelated to
// courses I take at university. One of which is a fullstack site for a clothing line.
//  This will be deployed to production in the fall of 2019.  </div>

// <a className="link" href="https://www.apus.edu/"> American Public University System </a>
// <div className="content"> Interned as a systems analyst and web developer. </div>

// </div>