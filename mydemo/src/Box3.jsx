import React, { useContext } from 'react';
import StyleContext from './StyleContext';

function Box3() {
  const { styles, setStyles } = useContext(StyleContext);

  const handleClick = () => {
    setStyles(prev => ({
      ...prev,
      box3: { backgroundColor: 'lightcoral', padding: '20px', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' },
      page: { backgroundColor: '#ffe5e5' }
    }));
  };

  return (
    <div style={{ width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #000', transition: '0.3s', ...styles.box3 }}>
      <button onClick={handleClick}>Style Me</button>
    </div>
  );
}

export default Box3;
