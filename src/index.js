import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SapientGames from './components/SapientGames.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SapientGames />, document.getElementById('root'));
registerServiceWorker();
