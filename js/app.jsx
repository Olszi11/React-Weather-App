import React from 'react';
import ReactDOM from 'react-dom';

import '../style.css';
import App from './main.jsx';



document.addEventListener('DOMContentLoaded', function() 
{
	ReactDOM.render(<App />, document.getElementById('app'));
});