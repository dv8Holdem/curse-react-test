//game details
import * as React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
import {Game} from '../../models/Game';
import {GameFile} from '../../models/GameFile';
import {GameCategorySection} from '../../models/GameCategorySection';
import {Panel, Row, Col, Well, Glyphicon}  from 'react-bootstrap';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../error-message/ErrorMessage';
import { Config } from '../../models/Config';

export interface GameDetailsProps extends React.Props<GameDetails> {
    // Define any props taken by List itself.
    params: any
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
    getGameDetails:(id:string)=>void
}
type CombinedTypes = GameDetailsProps & ConnectedProps & ConnectedDispatch;

export class GameDetails extends React.Component<CombinedTypes, void> {
    
    constructor(props:any){
        super(props);
        this.config = new Config();
    }

    componentDidMount() {
        if(this.props.isLoaded){
            this.props.getGameDetails(this.props.params.id);
        }else{
            this.props.getGames().then(()=>{
                this.props.getGameDetails(this.props.params.id);
            });
        }
    }
    
    render() {
        if(this.props.isFetching){
            return (
                <Spinner />
            )
        }        
        if(this.props.selectedGame !=null){
            return (
                <div className='GameDetails--root'>
                    <h5 className="bread-crumb"> <a href="/">Games</a> / {this.props.selectedGame.Name}</h5>
                    <Panel header={this.props.selectedGame.Name}>
                        <Well>
                            <Row>
                                <Col md={2}>
                                    <img src={this.config.gameIconLargeURLTemplate(this.props.selectedGame.ID)} />
                                </Col>
                                <Col md={10}>
                                    <h4>Slug:{this.props.selectedGame.Slug}</h4>
                                    <ul>
                                        <li><Glyphicon glyph={this.props.selectedGame.SupportsAddons ? 'ok-circle' : 'remove-circle'}/> Addon Supported </li>
                                        <li><Glyphicon glyph={this.props.selectedGame.SupportsVoice ? 'ok-circle' : 'remove-circle'}/> Voice Supported </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Well>  
                        <Row>
                            <Col md={6}>
                                <Panel header="Category">
                                    {this.props.selectedGame.CategorySections.length > 0 &&
                                        <ul className="cat-file-list">
                                            {this.props.selectedGame.CategorySections.map((cat:GameCategorySection) => (
                                                <li  key={cat.ID}>{cat.Name}</li>
                                            ))}
                                        </ul>
                                    }
                                    {this.props.selectedGame.CategorySections.length == 0 &&
                                        <h5>No Categories</h5>
                                    }
                                </Panel>
                            </Col>
                            <Col md={6}>
                                <Panel header="Game Files">
                                    {this.props.selectedGame.GameFiles.length > 0 &&
                                        <ul className="cat-file-list">
                                            {this.props.selectedGame.GameFiles.map((file:GameFile) => (
                                                <li key={file.Id}>{file.FileName}</li>
                                            ))}
                                        </ul>
                                    }
                                    {this.props.selectedGame.GameFiles.length == 0 &&
                                        <h5>No Files</h5>
                                    }
                                </Panel>
                            </Col>
                        </Row>
                    </Panel>
                </div>

            );
        }

        return (
            <div className='GameDetails--root'>
                <ErrorMessage/>
            </div>

        );
    }
} 