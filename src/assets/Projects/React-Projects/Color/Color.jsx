import { useState, useEffect } from 'react'; //importerar useState och useEffect, useState hanterar state variabler, useEffect kör sid effekter som att starta och preperera spelet 
import { useNavigate } from 'react-router-dom'; //importerar useNavigate, hjälper oss att navigera mellan sidor
import './Color.css'; //importerar Color.css
import Card from './Card';
import Header from './Header'; //importerar jsx filer

const Color = () => {
  const navigate = useNavigate(); //Hjälper till att navigera mellan sidor
  const [cards, setCards] = useState([]); //Memory korter, har en color och id property
  const [flippedCards, setFlippedCards] = useState([]); //Håller koll på vilka kort som är uppvänd, högst två korter får vara uppvänt samtidigt 
  const [matchedCards, setMatchedCards] = useState([]); //Håller koll på alla kort som har matchat

  //En array av färger som alla memory kort använder, två av varjer färg används per spel
  const colors = ['#fcba03', '#fc0303', '#35fc03', '#03adfc', '#5603fc', '#fc03d2', '#1c592a', '#ff6f00'];

  //Nollställer spelet
  useEffect(() => {
    resetGame();
  }, []);

  //En array shuffler, blandar en array slumpmässig
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const resetGame = () => {
    const shuffledColors = shuffleArray([...colors, ...colors]); //duplicerar färgerna och blandar de slumpmässig
    setCards(shuffledColors.map((color, index) => ({ color, id: index }))); //Skapar memory kort med color och en unik id för varje blandat färg och uppdaterar kortens state
    setFlippedCards([]);
    setMatchedCards([]); //Nollställer både flippedCards och matchedCards
  };

  const handleCardClick = (id) => {
    //Hindrar spelaren att klicka memory kort om två kort är redan uppvänd, om memory korten klickad är redan matchat med en annan kort, om korten klickad är redan uppvänd  
    if (flippedCards.length === 2 || matchedCards.includes(id) || flippedCards.includes(id)) return;

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped); //Lägger till alla memory kort som har bliviy matchad eller klickad till flippedCards state, för att hålla koll på vilka är uppvända eller inte

    if (newFlipped.length === 2) {
      const firstCard = cards[newFlipped[0]];
      const secondCard = cards[newFlipped[1]]; //Håller koll på både uppvända korts index med firstCard och secondCard

      if (firstCard.color === secondCard.color) { //Om båda kort matchar,
        setMatchedCards((prev) => [...prev, ...newFlipped]);  //Uppdatera setMatchedCards genom att lägga till båda korten till listan
      }

      setTimeout(() => setFlippedCards([]), 1000); //Om båda kort matchar inte, vänta 1 sekund innan båda kort vänder tillbaka
    }
  };

  return (
    <main className='color-main'>
      <button className='back-button' onClick={() => navigate('/greeting')}>Go Back</button>
      <Header onReset={resetGame} />
      <section className='color-grid'>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            color={card.color}
            isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </section>
    </main>
  );
};

export default Color