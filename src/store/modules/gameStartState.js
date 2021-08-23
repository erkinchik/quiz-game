export default {
  actions: {},
  mutations: {
    toggleGame: (state) => (state.gameStarted = !state.gameStarted),
  },
  state: {
    gameStarted: localStorage.gameIsStarted || false,
  },
  getters: {
    isGameStarted: (state) => state.gameStarted,
  },
};
