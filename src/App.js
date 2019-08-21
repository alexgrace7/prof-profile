import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-awesome-slider/dist/styles.css';
import image from './background.jpg';
import lepar from './lepar.jpg'
import bonnier from './bonnier.jpg'
import raycom from './raycom.jpg'
import apus from './apus.jpg'
import arc from './arc.jpg'
import wapo from './wapo.jpg'
import bglobe from './bglobe.jpg'
import bmore from './bmoresun.png'
import nacion from './nacion.jpg'
import rnd from './rnd.jpg'
import linked from './linked.png'
import git from './git.png'
import gmail from './gmail.jpg'





function App() {

  return (
<html className="whole">
 <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"/>

    <div className="containerOne">
      <div className="name"> ALEXANDRA GRACE </div>
      <div className = "subName"> SOFTWARE AS AN ART</div>
    </div>

      <div className="App">

        <div className="containerTwo">
        <div className="title"> Who Am I?</div>
        <div className="content"> Hello, World! I firmly believe that software is not
         merely code and a breakdown to binary numbers, but rather an art to make life 
         more simple and enjoyable.  I plan to contribute to our growing world of software.
          </div>
          <div className="content"> I go to the University of Virginia. 
          I am studying at the School of Engineering and Applied Sciences.
           I will graduate with a BS in Computer Science in May 2020. </div>
        </div>

        <div className="containerThree">
        <div className="title"> Experience</div>
        <a className="link" href="https://www.washingtonpost.com/"> The Washington Post </a>
        <div className="content"> Worked for two summers and one winter as a backend and 
        frontend software engineer.  </div>

        <a className="link" href="https://github.com/alexgrace7"> Personal Projects </a>
        <div className="content"> I have begun several projects of my own, unrelated to
        courses I take at university. One of which is a fullstack site for a clothing line.
         This will be deployed to production in the fall of 2019.  </div>

        <a className="link" href="https://www.apus.edu/"> American Public University System </a>
        <div className="content"> Interned as a systems analyst and web developer. </div>

        </div>

        <div className="containerFour">
        <div className="title"> Websites I Have Contributed To</div>

          <div className="photoGrid"> 

          <a href="https://www.bonniercorp.com/">
            <img className= "im" src={bonnier}/>
          </a>
          <a href="http://www.leparisien.fr/">
            <img className= "im" src={lepar}/>
          </a>

          <a href="http://raycomsports.com/">
            <img className= "im" src={raycom}/>
          </a>

          <a href="https://www.apus.edu/">
            <img className= "im" src={apus}/>
          </a>

          <a href="https://www.arcpublishing.com/">
          <img className= "im" src={arc}/>
          </a>

          <a href="https://www.washingtonpost.com/">
          <img className= "im" src={wapo}/>
          </a>

          <a href="https://www.bostonglobe.com/">
          <img className= "im" src={bglobe}/>
          </a>

          <a href="https://www.baltimoresun.com/">
          <img className= "im" src={bmore}/>
          </a>

          <a href="https://www.lanacion.com.ar/">
          <img className= "im" src={nacion}/>
          </a>

          <a href="https://www.rnd-news.de/">
          <img className= "im" src={rnd}/>
          </a>


          </div>
      
          </div>


          <div className="containerFive">
          <div className="title"> Contact Me!</div>

          <div className="contactThumb">

          <a className="link" href="mailto:alexgrace7@gmail.com"> 
            <img className="imB" src={gmail}></img>
          </a>

          <a className="link" href="https://www.linkedin.com/in/alexandra-grace-9316a7131/"> 
            <img className="imB" src={linked}></img>
          </a>

          <a className="link" href="https://github.com/alexgrace7"> 
            <img className="imB" src={git}></img>
          </a>

          </div>

          </div>
        </div>
    </html>
  );
}

export default App;
