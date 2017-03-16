#TODO
Sort the game list by OrderId
Update Game object
Try to fix the errors in console
Use config file for URL of the json file

# Curse React Test

The purpose of this test is to evaluate your skill as developer. It should take you about 2 hours to complete, although you may take more time if you wish.

## Getting Started

1. Use the latest Node LTS
2. From the project root, run `npm install`
3. To build the project, run `npm start`
4. A browser should automatically open after the build is complete. If not, go to http://localhost:8080/

A Gulp task will watch all the files in the project and automatically rebuild the bundle whenever a change is made to the code.

## Spec

When a user navigates to the app for the first time, the app should download the games data from the Curse CDN. While the game data is being fetched from the CDN, an indication of progress should be displayed.

Upon the completion of the game download, a listing of games should be displayed on screen. The order of the listing should be determined by the `Order` field in the game data. Each item in the listing should display the following:

- Game icon
- Game name 
- Whether the game supports addons
- Whether the game supports voice

When a user clicks on an item in the listing, the app should display a view which shows the details of the game. The game detail view should include all the data from the item in listing and the following additions:

- Game slug
- List of game files names
- List of category section names

We've provided you with a basic structure to get you started. However, feel free to change it in any way you see fit.

## Technical

### Data
- The URL of the games data file is contained in the `gamesDataURL` property on the `config` object in the `globals` module. Example in the List.tsx file:

```
import { config } from "./../../globals";

config.gamesDataURL
``` 

- In the games data, the game id (number) is located at the path `data[].ID`
- In the games data, the game name (string) is located at the path `data[].Name`
- In the game data, whether or not the game supports addons (boolean) is located at the path `data[].SupportsAddons`
- In the game data, whether or not the game supports voice (boolean) is located at the path `data[].SupportsVoice`
- In the game data, the order of the game (number) is located at the path `data[].Order`
- In the game data, the slug of the game (string) is located at the path `data[].Slug`
- In the game data, the game file names (string) are located at the path `data[].GameFiles[].FileName`
- In the game data, the category section names (string) are located at the path `data[].CategorySections[].Name`
- The URL of the game icon image can be constructed using the `gameIconURLTemplate` property on the `config` object in the `globals` module and the game ID. The template is called as a function with an object as its only argument containing a single property `gameID`. Example in the List.tsx file:

```
import { config } form "./../../globals";

const projectID = 1;
const gameIconURL = config.gameIconURLTemplate({gameID: gameID});
```

### Design

- The state of the application should be managed using Redux. Components should utilize data from the Redux store using React-Redux. The general structure of the application has been provided:

    - `source/actions/Games.ts` should contain Redux actions
    - `source/models/Config.ts` contains global config values
    - `source/models/Game.ts` should contain an interface describing the game data
    - `source/reducers/Games.ts` should contain a Redux reducer
    - `source/states/Games.ts` should contain an interface describing the Games reducer state
    - `source/globals.ts` contains the global application values including `config` and `store` (Redux Store)

- We've provided `source/components/games/GameListContainer.ts` as a starting presentation component.

## Bonus, Not Required

- Implement state and component testing using Jest
- Implement game search functionality
- Implement functionality to periodically re-download the game data file (in case it has updated)
- Provide details on choices on UI layout

