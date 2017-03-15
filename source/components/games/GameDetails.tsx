//game details
import * as React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
export interface GameDetailsProps extends React.Props<GameDetails> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
    games: Object,
    isFetching: boolean,
    error: string,
    isLoaded: boolean,
    selectedGame: Object
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
    getGames:(),
    isFetching:()
}
type CombinedTypes = GameDetailsProps & ConnectedProps & ConnectedDispatch;

export class GameDetails extends React.Component<CombinedTypes, void> {
    componentDidMount() {
        if(this.props.isLoaded){
            console.log("no games")
            this.getDetails()
        }else{
            console.log("no games else")

            this.props.getGames().then(()=>{
                this.getDetails()
            })       
        }
	    console.log("this.props.params:", this.props);
        var id=this.props.params.id;
        let game = _.find(this.props.games, function(game) { return game.ID == id; });
        console.log("game : ", game)

    }
    
    getDetails(){
        var id=this.props.params.id;
        let game = _.find(this.props.games, function(game) { return game.ID == id; });
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