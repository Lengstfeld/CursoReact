import React from 'react';
import reactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';



const divRoot = document.querySelector('#root');

reactDom.render(<CounterApp value={0}/>, divRoot);