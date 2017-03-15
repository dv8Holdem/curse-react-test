import { GlobalStateGetter } from "../state/GlobalState";

// Fetch Games Started
export type FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_STARTED: FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
    type: FETCH_GAMES_STARTED,
    isFetching: true
};

function fetchGamesStarted(): FetchGamesStarted { 
    return { type: FETCH_GAMES_STARTED, isFetching:true};
}

// Fetch Games Succeeded
export type FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export const FETCH_GAMES_SUCCEEDED: FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
    type: FETCH_GAMES_SUCCEEDED,
    isFetching: false,
    games: Object
};

function fetchGamesSucceeded(games: Object): FetchGamesSucceeded { 
    return { type: FETCH_GAMES_SUCCEEDED, isFetching:false, games };
}

// Fetch Games Failed
export type FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const FETCH_GAMES_FAILED: FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: FETCH_GAMES_FAILED,
    isFetching:false,
    error: string
};

function fetchGamesFailed(error:string): FetchGamesFailed { 
    return { type: FETCH_GAMES_FAILED,isFetching:false, error };
}

// Fetch Games Thunk
export function fetchGames() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        console.log("fetchGames()")
        dispatch(fetchGamesStarted());
        setTimeout(()=>{
            fetch('https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json')
                .then((response)=>{
                    if(!response.ok){
                        //throw error
                        console.log('!response.ok')
                        throw Error(response.statusText)
                    }

                    return response;
                })
                .then((response) => response.json())
                .then((games) => dispatch(fetchGamesSucceeded(games)))
                .catch((error)=> dispatch(fetchGamesFailed(error)))            
        },5000)

    };
}