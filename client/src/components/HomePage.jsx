import GamePicker from './GamePicker';
import GamePackagesView from './GamePackagesView';
import { GAME_CONFIG } from '../data/games';
import {
  MOBILE_LEGENDS_PACKAGES,
  PUBG_PACKAGES,
  WILDRIFT_PACKAGES,
  GENSHIN_PACKAGES,
  FREEFIRE_PACKAGES,
  CODM_PACKAGES,
  VALORANT_PACKAGES,
  LEAGUE_PACKAGES,
  FORTNITE_PACKAGES,
  ROBLOX_PACKAGES,
  STEAM_PACKAGES,
  GTA5_PACKAGES,
  OVERWATCH_PACKAGES,
  APEX_PACKAGES,
  CS2_PACKAGES,
  DOTA2_PACKAGES,
  MINECRAFT_PACKAGES,
  CLASH_PACKAGES,
  BRAWLSTARS_PACKAGES,
  AMONGUS_PACKAGES,
  DISCORD_PACKAGES,
} from '../data/packages';

const PACKAGES_BY_GAME = {
  'mobile-legends': MOBILE_LEGENDS_PACKAGES,
  'pubg-mobile': PUBG_PACKAGES,
  'wildrift': WILDRIFT_PACKAGES,
  'genshin': GENSHIN_PACKAGES,
  'freefire': FREEFIRE_PACKAGES,
  'codm': CODM_PACKAGES,
  'valorant': VALORANT_PACKAGES,
  'league': LEAGUE_PACKAGES,
  'fortnite': FORTNITE_PACKAGES,
  'roblox': ROBLOX_PACKAGES,
  'steam': STEAM_PACKAGES,
  'gta5': GTA5_PACKAGES,
  'overwatch': OVERWATCH_PACKAGES,
  'apex': APEX_PACKAGES,
  'cs2': CS2_PACKAGES,
  'dota2': DOTA2_PACKAGES,
  'minecraft': MINECRAFT_PACKAGES,
  'clash': CLASH_PACKAGES,
  'brawlstars': BRAWLSTARS_PACKAGES,
  'amongus': AMONGUS_PACKAGES,
  'discord': DISCORD_PACKAGES,
};

function HomePage({ selectedGame, onGameSelect, onSelect }) {
  if (selectedGame) {
    return (
      <GamePackagesView
        gameId={selectedGame.id}
        packages={PACKAGES_BY_GAME[selectedGame.id]}
        onSelect={onSelect}
        onBack={() => onGameSelect(null)}
      />
    );
  }

  return <GamePicker onSelect={onGameSelect} />;
}

export default HomePage;
