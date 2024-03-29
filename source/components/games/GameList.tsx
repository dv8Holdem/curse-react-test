import * as React from 'react';
import { Router } from 'react-router';
import {sortBy}  from 'lodash';
import { Game } from '../../models/Game';
import { FormControl, Panel, Well, ControlLabel, Glyphicon } from 'react-bootstrap';
import { Config } from "../../models/Config";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error-message/ErrorMessage";
import { fetchGames, FetchGamesSucceeded } from '../../actions/games';
import { Link } from 'react-router';
import { filter } from 'lodash';

export interface GameListProps extends React.Props<GameList> {
    
}

export interface GameListState {
    searchQuery:string,
    currentList:Array<Game>,

}

export interface ConnectedProps {
    games: Array<Game>,
    isFetching: boolean,
    error: string,
    isLoaded: boolean,
    selectedGame: Game,
}

export interface ConnectedDispatch {
    getGames:()=>void
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, GameListState> {
    constructor(props:any){
        super(props);
        this.state = {
            searchQuery: '',
            currentList: this.props.games
        }

        this.config = new Config();
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object
    };

    onSearchInputChange(event: Event){
        //let newList = _.filter(this.props.games, game => game.Name.contains(event.target.value.toLowerCase()));
        let orderedGames = sortBy(this.props.games, [(g:Game)=>{return g.Order}]);
        let newList = filter(orderedGames, function(game:Game){
            let name = game.Name.toLowerCase();
            return game.Name.toLowerCase().indexOf(event.target.value.toLowerCase()) >-1;;
        });

        this.setState({
            searchQuery:event.target.value,
            currentList:newList
        })
    }

    componentDidMount() {

        if(!this.props.isLoaded){
            this.props.getGames().then(()=>{
                this.orderGames();
            });
        }else{
            this.orderGames();
        }
    }

    orderGames(){
        let games = sortBy(this.props.games, [(g:Game)=>{return g.Order}]);
        this.setState({
            currentList: games,
            searchQuery: ''
        })
    }

    viewDetails(gameID:number){
        this.context.router.push('game/'+gameID);
    }

    render() {
        if(this.props.isFetching){
            return (
                <Spinner/>
            )
        }


        if(this.props.isLoaded){
            return (

                <div className='GameList--root'>
                    <h5 className="bread-crumb"><Link to="/">Home</Link> / Games</h5>
                    <Panel>
                        <FormControl type="text" value={this.state.searchQuery} placeholder="Search Games" onChange={this.onSearchInputChange}/>
                    </Panel>

                    <Panel header={"Results " + this.state.currentList.length} >
                        <div id="game-list-container">
                            {this.state.currentList.map((game:Game) => (
                                <div className="game-panel-wrapper" key={game.ID}>
                                    <Panel header={game.Name} bsSize="sm" onClick={()=>this.viewDetails(game.ID)}>
                                        <img src={this.config.gameIconURLTemplate(game.ID)} />
                                        <ul>
                                            <li><Glyphicon glyph={game.SupportsAddons ? 'ok-circle' : 'remove-circle'}/> Addon Supported </li>
                                            <li><Glyphicon glyph={game.SupportsVoice ? 'ok-circle' : 'remove-circle'}/> Voice Supported </li>
                                        </ul>
                                    </Panel>
                                </div>
                            ))}
                        </div>
                    </Panel> 
                </div> 
            )
        }

        return (
            <div className='GameList--root'>
                <ErrorMessage />
            </div>
        );
    }
}