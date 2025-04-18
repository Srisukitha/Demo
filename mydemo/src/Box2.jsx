import React, { useContext } from 'react';
import StyleContext from './StyleContext';

function Box2() {
  const { styles, setStyles } = useContext(StyleContext);

  const handleClick = () => {
    setStyles(prev => ({
      ...prev,
      box2: { backgroundColor: 'lightgreen', padding: '20px', transform: 'rotate(2deg)' },
      page: { backgroundColor: '#eaffea' }
    }));
  };

  return (
    <div style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #000', transition: '0.3s', ...styles.box2 }}>
      <button onClick={handleClick}>Style Me</button>
    </div>
  );
}

export default Box2;
