//game details
import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { GameDetails, GameDetailsProps, ConnectedProps, ConnectedDispatch } from './GameDetails';
import { GlobalState } from '../../state/GlobalState';
import {gamesReducer} from '../../reducers/gamesReducer';

function mapStateToProps(state: GlobalState, props: GameDetailsProps): ConnectedProps {
    return {

    }
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GameDetails) as React.ComponentClass<GameDetailsProps>;