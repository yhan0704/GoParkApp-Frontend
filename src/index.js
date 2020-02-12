import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(<Router><Provider store={store}><MuiPickersUtilsProvider utils={DateFnsUtils}><App /></MuiPickersUtilsProvider></Provider></Router>, document.getElementById('root'));

serviceWorker.unregister();
