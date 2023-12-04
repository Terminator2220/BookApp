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
              <h3>
                <img src="ibooks.png" alt='Ico' className='Ico' />
                BookApp
                <sub className='subRight'>®</sub>
              </h3> 
          </div>
          <div>
            © 2023-2024, Inc. All right reserved.
          </div>
        </div>
    <div className='VersionName'><sub>v.2.5.9</sub></div>
      </footer>
    </div>
  );
}

export default App;
