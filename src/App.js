import React from 'react';
import BookApp from './components/bookApp/BookApp';
import './app2.css';

function App() {
  
  const handleSubClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <BookApp />
      <footer className='footer'>
        <div className='footerContent'>
          <div className='footerLogo'>
            <img src="ibooks.png" alt='Ico' className='Ico' />
            <h3>BookApp<sub className='subRightClick' onClick={handleSubClick}>®</sub></h3>
          </div>
          <div className='footerCopyright'>
            © 2023-2024 BookApp, Inc. All rights reserved.
          </div>
          <div className='footerVersion'>
            <sub>v.2.6.9</sub>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
