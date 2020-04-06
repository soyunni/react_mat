import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './Root';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store/configureStore';
const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
