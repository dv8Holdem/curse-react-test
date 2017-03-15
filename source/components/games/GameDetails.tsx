//game details
import * as React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
export interface GameDetailsProps extends React.Props<GameDetails> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    games: Object,
    isFetching: boolean,
    error: string,
    isLoaded: boolean,
    selectedGame: Object
}

export interface ConnectedDispatch {
    getGames:()=>void,
    isFetching:()=>void,
    getGameDetails:()=>void
}
type CombinedTypes = GameDetailsProps & ConnectedProps & ConnectedDispatch;

export class GameDetails extends React.Component<CombinedTypes, void> {
    componentDidMount() {
        if(this.props.isLoaded){
            this.props.getGameDetails(this.props.params.id);
        }else{
            this.props.getGames().then(()=>{
                this.props.getGameDetails(this.props.params.id);
                console.log('this.props.selectedGame', this.props)
            });
        }

    }
    
    render() {
        if(this.props.selectedGame !=null){
            return (
                <div className='GameDetails--root'>
                    Game Details for {this.props.selectedGame.Name}
                </div>

            );
        }

        return (
            <div className='GameDetails--root'>
                Error
            </div>

        );
    }
} 