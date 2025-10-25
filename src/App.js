import React from 'react';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="app-header">
  <img
    alt="SheCodes"
    className="logo"
    src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
  />
  </header>
  <div>
   <h1 className='text-center'>Dictionary</h1>
   </div>
   
   <main>
    <div>
    <Dictionary />
    </div>
   </main>

   <footer className='text-center'>Coded by <a href="https://react-dictionary-ap.netlify.app/">Moisha💕</a></footer>
      
      </div>
    </div>
  );
}


