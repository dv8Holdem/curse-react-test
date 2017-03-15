//game details
import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchGames } from '../../actions/games'
import { getGameDetails } from '../../actions/games'
import { GameDetails, GameDetailsProps, ConnectedProps, ConnectedDispatch } from './GameDetails';
import { GlobalState } from '../../state/GlobalState';
import {gamesReducer} from '../../reducers/gamesReducer';

function mapStateToProps(state: GlobalState, props: GameDetailsProps): ConnectedProps {
    return {
    	games: state.games.games,
    	isFetching: state.games.isFetching,
    	isLoaded: state.games.isLoaded,
    	error:state.games.error,
    	selectedGame:state.games.selectedGame
    }
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ getGames: fetchGames, getGameDetails: getGameDetails}, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GameDetails) as React.ComponentClass<GameDetailsProps>;