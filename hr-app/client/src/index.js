import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import { API_ENDPOINT } from './constants';
import App from './components/App';

axios.defaults.baseURL = API_ENDPOINT;

ReactDOM.render(<App />, document.getElementById('root'));
