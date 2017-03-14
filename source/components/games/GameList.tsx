import * as React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
    games: Object,
    isFetching: boolean
    error: string
    isLoaded: boolean
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
    getGames:()=>void,
    isFetching:()=> void
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    componentDidMount() {
        this.props.getGames();
        console.log("this.props.games :", this.props);
    }
    render() {
        console.log('this.props.games 1:' this.props);
        if(this.props.isFetching){
            return <p>Loading</p>;
        }

        if(this.props.isLoaded){
            return <div className='GameList--root'>
              <table>
                  <thead>
                      <tr Link to="/game/">
                          <th>Game</th>
                          <th>Game Id</th>
                          <th>Game Name</th>
                          <th>Support Addons</th>
                          <th>Support Voice</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.props.games.map((game) => (
                        <tr key={game.ID}>
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



            }
        );
    }
} 