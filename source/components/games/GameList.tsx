import * as React from 'react';
import { Router } from 'react-router';
import {lodash} from 'lodash';
import {Game} from '../../models/Game';
export interface GameListProps extends React.Props<GameList> {

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
    isFetching:()=>void
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    constructor(props){
        super(props);
        this.state = {
            searchQuery:'',
            currentList:this.props.games
        }

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object
    };

    onSearchInputChange(event){
        //let newList = _.filter(this.props.games, game => game.Name.contains(event.target.value.toLowerCase()));
        let newList = _.filter(this.props.games, function(game){
            let name = game.Name.toLowerCase();
            return game.Name.toLowerCase().indexOf(event.target.value.toLowerCase()) >-1;
        });

        this.setState({
            searchQuery:event.target.value,
            currentList:newList
        })

        console.log('this.state:', this.state)
    }

    componentDidMount() {
        if(!this.props.isLoaded){
            this.props.getGames().then(()=>{
                this.setState({
                    currentList:this.props.games
                })
            });
        }
    }

    viewDetails(gameID:string){
        this.context.router.push('game/'+gameID);
    }

    render() {
        if(this.props.isFetching){
            return <p>Loading</p>;
        }

        if(this.props.isLoaded){
            return <div className='GameList--root'>
                <input type="text" value={this.state.searchQuery} onChange={this.onSearchInputChange} />
                <table>
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Game Id</th>
                            <th>Game Name</th>
                            <th>Support Addons</th>
                            <th>Support Voice</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.currentList.map((game:Game) => (

                        <tr key={game.ID} onClick={()=>this.viewDetails(game.ID)}>
                            <td>{game.ID}</td>
                            <td>{game.ID}</td>
                            <td>{game.Name}</td>
                            <td>{game.SupportsAddons.toString()}</td>
                            <td>{game.SupportsVoice.toString()}</td>
                        </tr>

                    ))}                  
                    </tbody>
                </table>
            </div> 
        }
        return (
            <div className='GameList--root'>
                <img src="/assets/images/flame.png" />
                <h1>Curse React Test Error </h1>
                <p>An error has occurred</p>
            </div>
        );
    }
} 