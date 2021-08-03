/* eslint-disable import/no-cycle */
import React from 'react';
import BookList from '../containers/booklist';
import BookForm from '../containers/bookform';
import Navbar from './navbar';

function App() {
  return (
    <div className="app">
      <div className="modall">{}</div>
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
