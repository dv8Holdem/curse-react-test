import * as React from 'react';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
    games: Object
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
    getGames:()=>void
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    componentDidMount() {
        this.props.getGames();
    }
    render() {
        return (
            <div className='GameList--root'>
                <img src="/assets/images/flame.png" />
                <h1>Curse React Test</h1>
                <p>Test This is the GameList component, located in <code>components/games/GameList.tsx</code>. Start your implementation here.</p>
            </div>
        );
    }
} 
