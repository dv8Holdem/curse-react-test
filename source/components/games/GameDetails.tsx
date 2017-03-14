//game details
import * as React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
export interface GameDetailsProps extends React.Props<GameDetails> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)

}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
}

type CombinedTypes = GameDetailsProps & ConnectedProps & ConnectedDispatch;

export class GameDetails extends React.Component<CombinedTypes, void> {
    componentDidMount() {
	console.log("this.props.params:", this.props);
    }
    

    render() {
        return (
            <div className='GameDetails--root'>
				Game Details
            </div>



            }
        );
    }
} 