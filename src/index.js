import React from 'react';
import './css/main.scss';
import ReactDOM from 'react-dom';
import store from './store/store';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.scss';
import { maintainSession } from './utils/common';



maintainSession();
const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <AppRouter />
</Provider>,
rootElement
);

//KUI VÄLJA KOMMENTEERISIN SIIS TOIMIKS JUSTKUI
//export default App;
