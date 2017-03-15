import { Game } from "../models/Game";

export interface GamesState {
    games: Game[];
    isFetching: boolean
    error: string
    isLoaded: boolean
    selectedGame: Object
}
