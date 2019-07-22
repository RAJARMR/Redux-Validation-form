import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import SimpleForm from './simpleForm'
import showResults from "./showResults.js";
import store from "./store.js";  




ReactDOM.render(<Provider store={store}>

 <SimpleForm onSubmit={showResults} />

  </Provider>, document.getElementById('root'));
