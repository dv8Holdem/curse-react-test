import { GlobalStateGetter } from "../state/GlobalState";
import {Game} from '../models/Game';

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
        return fetch('https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json')
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
    };
}

//Get Game Details

//Get Games Details Error
export type GET_GAME_DETAIL_FAILED = 'GET_GAME_DETAIL_FAILED';
export const GET_GAME_DETAIL_FAILED: GET_GAME_DETAIL_FAILED = 'GET_GAME_DETAIL_FAILED';
export type GetGameDetailFailed = {
    type: GET_GAME_DETAIL_FAILED,
    error: string
};

function GetGameDetailFailed(error:string): GET_GAME_DETAIL_FAILED { 
    return { type: GET_GAME_DETAIL_FAILED, error };
}

//Get Games Details Succeeded
export type GET_GAME_DETAIL_SUCCEEDED = 'GET_GAME_DETAIL_SUCCEEDED';
export const GET_GAME_DETAIL_SUCCEEDED: GET_GAME_DETAIL_SUCCEEDED = 'GET_GAME_DETAIL_SUCCEEDED';
export type GetGameDetailSucceeded = {
    type: GET_GAME_DETAIL_SUCCEEDED,
    selectedGame: Object
};

function GetGameDetailSucceeded(game: Game): GET_GAME_DETAIL_SUCCEEDED { 
    return { type: GET_GAME_DETAIL_SUCCEEDED, game };
}

export function getGameDetails(id: string) {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        let game = _.find(getState().games.games, function(game) { return game.ID == id; });
        if (game){
            dispatch(GetGameDetailSucceeded(game));
        }else{
            let error = "Game Not Found";
            dispatch(GetGameDetailFailed(error)); 
        }
    };
}