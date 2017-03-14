import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { GameList, GameListProps, ConnectedProps, ConnectedDispatch } from './GameList';
import { GlobalState } from '../../state/GlobalState';

function mapStateToProps(state: GlobalState, props: GameListProps): ConnectedProps {
    return {

    }
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
        
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<GameListProps>;
