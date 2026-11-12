import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Game Saving Loaded:', saving);
  } catch (error) {
    console.error('Error:', error);
  }
})();