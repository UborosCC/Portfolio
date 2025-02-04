import './Header.css';

const Header = ({ onReset }) => (
  <header className='color-header'>
    <h1 className='color-h1'>Color Memory Game</h1>
    <button className='color-button' onClick={onReset}>Reset Game</button>
  </header>
);

export default Header;