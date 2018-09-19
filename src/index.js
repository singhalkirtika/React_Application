import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bootstrap-social/bootstrap-social.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
