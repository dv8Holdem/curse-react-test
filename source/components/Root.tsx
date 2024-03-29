import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from '../globals';
import { App } from './App';
import { GameListContainer } from './games/GameListContainer';
import { GameDetailsContainer } from './games/GameDetailsContainer';
import Home from './home/Home';

export class Root extends React.Component<void, void> {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home} />
                        <Route path = "games" component={GameListContainer} />
                        <Route path = "game/:id" component={GameDetailsContainer} />
                    </Route>

                </Router>
            </Provider>
        );
    }
}
