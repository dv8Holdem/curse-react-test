import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { initGlobals } from './globals';
initGlobals();

import { Root } from './components/Root';
ReactDOM.render(<Root />, document.getElementById('app'));