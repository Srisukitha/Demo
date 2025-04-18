import React, { useContext } from 'react';
import StyleContext from './StyleContext';

function Box1() {
  const { styles, setStyles } = useContext(StyleContext);

  const handleClick = () => {
    setStyles(prev => ({
      ...prev,
      box1: { backgroundColor: 'lightblue', padding: '20px', borderRadius: '10px' },
      page: { backgroundColor: '#d0f0fd' }
    }));
  };

  return (
    <div style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #000', transition: '0.3s', ...styles.box1 }}>
      <button onClick={handleClick}>Style Me</button>
    </div>
  );
}

export default Box1;
