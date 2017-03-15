import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
    GetGameDetailSuceeded, GetGamesDetailFailed,
    GET_GAME_DETAIL_SUCCEEDED, GET_GAME_DETAIL_FAILED
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: [],
    isFetching:false,
    error:"",
    isLoaded:false,
    selectedGame: null
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })

        
        case FETCH_GAMES_FAILED:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error
            })
        
        case FETCH_GAMES_SUCCEEDED:
              return Object.assign({}, state, {
                isFetching: action.isFetching,
                games:action.games.data,
                isLoaded: true
              })

        case GET_GAME_DETAIL_SUCCEEDED:
              return Object.assign({}, state, {
                  selectedGame: action.game;
              })

        case GET_GAME_DETAIL_FAILED:
            return Object.assign({}, state, {
                error: action.error
            })
    }
    console.log('state :', state)
    return state;
}
