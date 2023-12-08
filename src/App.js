import React from 'react';
import BookApp from './components/bookApp/BookApp';
//import './App.css'
import './app2.css'

function App() {
  return (
   <div>
  <BookApp />
  <footer className='footer'>
    <div className='footerContent'>
      <div className='footerLogo'>
        <img src="ibooks.png" alt='Ico' className='Ico' />
        <h3>BookApp<sub className='subRight'>®</sub></h3>
      </div>
      <div className='footerCopyright'>
        © 2023-2024 BookApp, Inc. All rights reserved.
      </div>
      <div className='footerVersion'>
        <sub>v.2.5.9</sub>
      </div>
    </div>
  </footer>
</div>

  );
}

export default App;
