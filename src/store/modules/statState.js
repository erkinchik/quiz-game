export default {
  actions: {},
  mutations: {
    changeName: (state, name) => (state.userInfo.userName = name),

    changeQuestionsStat(state, stringOfStatQuestion) {
      // localStorage.setItem(
      //   stringOfStatQuestion,
      //   ++state.userInfo[stringOfStatQuestion]
      // );
      // console.log(state.user[stringOfStatQuestion]);
      ++state.user[stringOfStatQuestion];
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    changePointsStat(state, { points, isCorrect }) {
      isCorrect
        ? localStorage.setItem("points", (state.userInfo.points += points))
        : localStorage.setItem("points", (state.userInfo.points -= points));
    },

    checkUser(state, name) {
      const findUser = () => state.users.find((item) => item.name == name);

      if (findUser() == undefined && !findUser()) {
        state.users.push({
          name,
          correctQuestions: 0,
          uncorrectQuestions: 0,
          points: 0,
        });
        state.user = findUser();
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        state.user = findUser();
        localStorage.setItem("user", JSON.stringify(state.user));
      }
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    // decPoints(state, points) {
    //   if (
    //     localStorage.getItem("points") == points ||
    //     localStorage.getItem("points") > points
    //   ) {
    //     localStorage.setItem("points", (state.userInfo.points -= points));
    //   }
    // },
    // questionsAmount(state) {
    //   state.userInfo.questionsCount =
    //     state.userInfo.correctQuestions + state.userInfo.uncorrectQuestions;
    //   localStorage.setItem("questionsAmount", state.userInfo.questionsCount);
    // },
  },
  state: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    user: JSON.parse(localStorage.getItem("user")) || {},
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
