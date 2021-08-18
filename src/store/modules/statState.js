export default {
  actions: {},
  mutations: {
    changeName: (state, name) => (state.userInfo.userName = name),

    changeUncorrect(state) {
      localStorage.setItem(
        "uncorrectQuestions",
        ++state.userInfo.uncorrectQuestions
      );
    },
    changeCorrect(state) {
      localStorage.setItem(
        "correctQuestions",
        ++state.userInfo.correctQuestions
      );
    },
    incPoints(state, points) {
      localStorage.setItem("points", (state.userInfo.points += points));
    },
    decPoints(state, points) {
      if (
        localStorage.getItem("points") == points ||
        localStorage.getItem("points") > points
      ) {
        localStorage.setItem("points", (state.userInfo.points -= points));
      } else {
        localStorage.setItem("points", 0);
      }
    },
  },
  state: {
    userInfo: {
      userName: localStorage.userName || "",
      questionsCount:
        parseInt(localStorage.correctQuestions) +
          parseInt(localStorage.uncorrectQuestions) || 0,
      correctQuestions: parseInt(localStorage.correctQuestions) || 0,
      uncorrectQuestions: parseInt(localStorage.uncorrectQuestions) || 0,
      points: parseInt(localStorage.points) || 0,
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
  },
};
