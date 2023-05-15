import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <div id="conteiner">
        <img src="..\..\src\assets\images\bannerPernaLonga.png"></img>
        <h1>Bora meditar juntos?</h1>
        <p>Respira fundo e solta o play! Pois a oração abaixo representa todos nos programadores...</p>
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Bv2sDkQitLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Home;