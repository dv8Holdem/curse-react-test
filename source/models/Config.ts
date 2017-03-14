import { template } from "lodash";

export class Config {
    gamesDataURL = "https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json";
    gameIconURLTemplate = template("https://clientupdate-v6.cursecdn.com/GameAssets/<%= gameID %>/Icon64.png");
}
