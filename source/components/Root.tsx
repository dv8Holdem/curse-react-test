import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from '../globals';
import { App } from './App';
import { GameListContainer } from './games/GameListContainer';

export class Root extends React.Component<void, void> {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={GameListContainer} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
