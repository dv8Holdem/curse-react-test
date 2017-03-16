import * as React from 'react';
import { Router } from 'react-router';
import { lodash } from 'lodash';
import { Game } from '../../models/Game';
import { FormControl, Panel, Well, ControlLabel, Glyphicon } from 'react-bootstrap';
import { Config } from "../../models/Config";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error-message/ErrorMessage";



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
            return (
                <Spinner/>
            )
        }


        if(this.props.isLoaded){
            return (
                <div className='GameList--root'>
                    <Panel>
                        <FormControl type="text" value={this.state.searchQuery} placeholder="Search Games" onChange={this.onSearchInputChange}/>
                    </Panel>

                    <Panel header="Games" >
                        <div id="game-list-container">
                            {this.state.currentList.map((game:Game) => (
                                <div className="game-panel-wrapper" key={game.ID}>
                                    <Panel header={game.Name} bsSize="sm" onClick={()=>this.viewDetails(game.ID)}>
                                        <img src={"https://clientupdate-v6.cursecdn.com/GameAssets/"+game.ID+"/Icon64.png"} />
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
        })
        return (
            <div className='GameList--root'>
                <ErrorMessage />
            </div>
        );
    }
}