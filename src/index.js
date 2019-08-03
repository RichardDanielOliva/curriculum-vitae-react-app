import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import { Provider} from 'react-redux';
import i18n from "./config/i18n";

import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
    );

