export default {
  actions: {},
  mutations: {
    changeName: (state, name) => (state.userInfo.userName = name),
    changeMainStats(state, basicQuestions) {
      state.userInfo.questionsCount = basicQuestions.questionsCount;
      state.userInfo.correctQuestions = basicQuestions.correctQuestions;
      state.userInfo.uncorrectQuestions = basicQuestions.uncorrectQuestions;
      state.userInfo.points = basicQuestions.points;
    },
  },
  state: {
    userInfo: {
      userName: localStorage.userName || "",
      questionsCount: 0,
      correctQuestions: 0,
      uncorrectQuestions: 0,
      points: 0,
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
};
