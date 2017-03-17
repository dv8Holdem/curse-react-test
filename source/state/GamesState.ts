import { Game } from "../models/Game";

export interface GamesState {
    games: Array<Game>,
    isFetching: boolean,
    error: string,
    isLoaded: boolean,
    selectedGame: Game,
}
