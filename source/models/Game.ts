import {GameFile} from './GameFile';
import {GameCategorySection} from './GameCategorySection';

export interface Game {
    ID: string,
    Name: string,
    Slug: string,
    SupportsAddons: boolean,
    SupportsVoice: boolean,
    GameFiles: Array<GameFile>,
    CategorySections: Array<GameCategorySection>

}
