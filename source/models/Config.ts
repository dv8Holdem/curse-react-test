import { template } from "lodash";

export class Config {
    public gamesDataURL(){
        return "https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json";
    }

    public gameIconURLTemplate(id:number){
        var temp = template('https://clientupdate-v6.cursecdn.com/GameAssets/<%= gameID %>/Icon64.png')
        return temp({gameID:id})
    }

    public gameIconLargeURLTemplate(id:number){
        var temp = template('https://clientupdate-v6.cursecdn.com/GameAssets/<%= gameID %>/Icon128.png')
        return temp({gameID:id})
    }

}
