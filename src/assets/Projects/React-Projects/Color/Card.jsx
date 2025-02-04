import './Card.css';

const Card = ({ color, isFlipped, onClick }) => (
  <article
    className={`card ${isFlipped ? 'flipped' : ''}`}
    style={{ backgroundColor: isFlipped ? color : '#000000' }}
    onClick={onClick}
  ></article>
);

export default Card;