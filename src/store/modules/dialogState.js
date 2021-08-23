export default {
  actions: {},
  mutations: {
    toggleDialog: (state) => (state.showDialog = !state.showDialog),
  },
  state: {
    showDialog: false,
  },
  getters: {
    isShowingDialog: (state) => state.showDialog,
  },
};
