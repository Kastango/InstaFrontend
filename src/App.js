import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

const App = () => (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>  
    </div>
)

export default App;

