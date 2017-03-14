import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: [],
    isFetching:false,
    error:"",
    isLoaded:false
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            // Handle action
            console.log('FETCH_GAMES_STARTED', action)
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })

        
        case FETCH_GAMES_FAILED:
            // Handle action
            console.log('FETCH_GAMES_FAILED', action)
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                error: action.error
            })
        
        case FETCH_GAMES_SUCCEEDED:
            // Handle action
            console.log('FETCH_GAMES_SUCCEEDED', action)
              return Object.assign({}, state, {
                isFetching: action.isFetching,
                games:action.games.data,
                isLoaded: true
              })
    }
    console.log('state :', state)
    return state;
}
