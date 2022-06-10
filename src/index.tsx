import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer  from './Redux/reducer';

const reduce= createStore(reducer)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

<Provider store={reduce}>
<App />
</Provider>,

    
  </React.StrictMode>
);


reportWebVitals();
