import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchGames } from '../../actions/games'
import { GameList, GameListProps, ConnectedProps, ConnectedDispatch } from './GameList';
import { GlobalState } from '../../state/GlobalState';
import {gamesReducer} from '../../reducers/gamesReducer';

function mapStateToProps(state: GlobalState, props: GameListProps): ConnectedProps {
	console.log('state mapStateToProps:', state)
    return {
    	games: state.games.games,
    	isFetching: state.games.isFetching,
    	isLoaded: state.games.isLoaded
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
        getGames: fetchGames
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<GameListProps>;
