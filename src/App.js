import React from 'react';
import BookApp from './components/bookApp/BookApp';
//import './App.css'
import './app2.css'

function App() {
  return (
    <div>
      <BookApp />
      <footer className='footer'>
        <div className='footerCopyright'>
          <div>
            © 2023-2024, Inc. All right reserved.
          </div>
          <div>
              <h3>
                <img src="ibooks.png" className='Ico' />
                BookApp
                <sub className='subRight'>®</sub>
              </h3> 
          </div>
        </div>
        <div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
