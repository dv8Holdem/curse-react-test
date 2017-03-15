//game details
import * as React from 'react';
import { Link } from 'react-router';
import {lodash} from 'lodash';
import {Game} from '../../models/Game';
export interface GameDetailsProps extends React.Props<GameDetails> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    games: Array<Game>,
    isFetching: boolean,
    error: string,
    isLoaded: boolean,
    selectedGame: Game
}

export interface ConnectedDispatch {
    getGames:()=>void,
    isFetching:()=>void,
    getGameDetails:(id:string)=>void
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