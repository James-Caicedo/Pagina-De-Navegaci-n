import React from 'react';
import './Home.css';
import buscar from './Assets/img/buscar.jpg';
import ReactPlayer from 'react-player';
const Home = () => {
  const vidUrl = "https://www.youtube.com/watch?v=-rZGi1xjZNU"
  return (
    <div className='body-home'>
      <div className='body-card'>
        <div className='card-one'>
          <img src={buscar} alt="imagen de empleo" />
          <p>En esta aplicacion podras encontrar miles de ofertas laborales que se ajusten a tu perfirl laboral y de acuerdo a tu experiencia y aspiracion salarial. En Job trabajamos para que tengas una mejor opcion dia a dia. Job is Job.</p>
        </div>
        <div className='card-two'>
          <ReactPlayer 
            url={vidUrl}
            playing={false}
            volume={0.5}
            controls
          />
          <p>En esta aplicacion podras encontrar miles d ofertas laborales que se ajusten a tu perfirl laboral y de acuerdo a tu experiencia y aspiracion salarial. En Job trabajamos para que tengas una mejor opcion dia a dia. Job is Job.</p>
        </div>
       </div>
    </div>
  );
};

export default Home;