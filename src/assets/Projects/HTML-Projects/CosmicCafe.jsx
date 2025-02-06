import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //importerar useNavigate, hjälper oss att navigera mellan sidor
import './CosmicCafe.css';
import cLogo from './Cafe/c-logo.png';
import darkMatterBrew from './Cafe/darkmatterbrew.jpg';
import calyp from './Cafe/calyppuccino.jpg';
import starlight from './Cafe/starlightmocha.jpg';
import meteor from './Cafe/meteoritemilkshake.jpg';
import celeste from './Cafe/celestetea.jpg';
import stellar from './Cafe/stellastellartea.jpg';

const CosmicCafe = () => {
    const navigate = useNavigate(); //Hjälper till att navigera mellan sidor
    const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 6) newIndex = 1;
      if (newIndex < 1) newIndex = 6;
      return newIndex;
    });
  };

  const showSlides = () => {
    return (
      <article className="slideshow-container">
        {[...Array(6)].map((_, i) => (
          <figure
            key={i}
            className={`menuSlides ${slideIndex === i + 1 ? 'active' : 'none'}`}
          >
            <mark className="imgnumber">{i + 1}/6</mark>
            <img
              className="cosmic-picture"
              src={slideImages[i]}
              alt={slideCaptions[i]}
            />
            <mark className="img-txt">{slideCaptions[i]}</mark>
          </figure>
        ))}
      </article>
    );
  };

  const slideImages = [
    darkMatterBrew,
    calyp,
    starlight,
    meteor,
    celeste,
    stellar,
  ];

  const slideCaptions = [
    'Dark Matter Brew',
    'Calyppuccino',
    'Starlight Mocha',
    'Meteorite Milkshake',
    'Celeste Tea',
    'Stella Stellar Tea',
  ];

  return (
    <main className='cosmic-main'>
        <button className='back-button' onClick={() => navigate('/projects')}>Go Back</button>
        <header>
        <nav className="cosmic-navbar">
          <span className="left">
            <a className="nav-a" href=""><img className="logo" src={cLogo} alt="cosmic-logo" /></a>
            <a className="nav-a nav-txt" href="">Food and Drinks</a>
            <a className="nav-a nav-txt" href="">About</a>
            <a className="nav-a nav-txt" href="">Blog</a>
          </span>
          <span className="right">
            <a className="nav-a order" href="">Order</a>
          </span>
        </nav>
      </header>

      <section>
        <section className="welcome-section">
          <section className="welcome-txt">
            <h1>Welcome to the Cosmic Café!</h1>
            <h2>A unique cafe in space where you can enjoy cosmic flavors.</h2>
          </section>
        </section>

        <section className="cosmic-section">
          <section className="cosmic-menu">
            <h2>Our Galactic Drinks and Food</h2>
            <article className="drink-list">
              <h3>Drink</h3>
              <ul>
                <li>Dark Matter Brew</li>
                <li>Calyppuccino</li>
                <li>Milky Way Macchiato</li>
                <li>Novaspresso</li>
                <li>Starlight Mocha</li>
                <li>Celeste Tea</li>
                <li>Stella Stellar Tea</li>
                <li>Meteorite Milkshake</li>
                <li>Aurora Blend</li>
                <li>Cosmo Punch</li>
                <li>Nebula Nectar</li>
              </ul>
            </article>

            <article className="food-list">
              <h3>Food</h3>
              <ul>
                <li>Astro Donuts</li>
                <li>Cosmic Cookies</li>
                <li>Cosmo Cake</li>
                <li>Galactic Grilled Cheese</li>
                <li>Moon Brownies</li>
                <li>Starlight Muffins</li>
                <li>Comet Burger</li>
                <li>Orion Burger</li>
                <li>Asteroid Bites</li>
                <li>Supernova Sliders</li>
                <li>Star Cluster Salad</li>
                <li>Sunny Eggs and Space Bacons</li>
              </ul>
            </article>
          </section>

          <section className="cosmic-menu cosmic-img">
            {showSlides()}
            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
          </section>
        </section>
      </section>
    </main>
  );
};

export default CosmicCafe;
