export default {
  actions: {},
  mutations: {
    changeName: (state, name) => (state.userInfo.userName = name),

    changeQuestionsStat(state, stringOfStatQuestion) {
      ++state.users[state.user][stringOfStatQuestion];
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    changePointsStat(state, { points, isCorrect }) {
      if (isCorrect) {
        state.users[state.user].points += points;
      } else {
        state.users[state.user].points -= points;
      }
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    checkUser(state, name) {
      const findUser = () => state.users.find((item) => item.name == name);

      if (findUser() == undefined && !findUser()) {
        state.users.push({
          name,
          id: state.users.length,
          correctQuestions: 0,
          uncorrectQuestions: 0,
          points: 0,
        });
        state.user = findUser().id;
      } else {
        state.user = findUser().id;
      }
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("userId", JSON.stringify(state.user));
    },
  },
  state: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("userId")) || null,
    userInfo: {
      userName: localStorage.userName || "",
      // questionsCount:
      //   parseInt(localStorage.correctQuestions) +
      //     parseInt(localStorage.uncorrectQuestions) || 0,
      correctQuestions: localStorage.correctQuestions || 0,
      uncorrectQuestions: localStorage.uncorrectQuestions || 0,
      points: parseInt(localStorage.points) || 0,
    },
  },
  getters: {
    getUserInfo: (state) => state.userInfo,
    getUsers: (state) => state.users,
  },
};
