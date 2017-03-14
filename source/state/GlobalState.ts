import { GamesState } from './GamesState';

export interface GlobalState {
    games: GamesState;
}

export interface GlobalStateGetter { 
    (): GlobalState;
}
