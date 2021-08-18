import axios from "axios";

export default {
  actions: {
    async getQuestions(ctx) {
      const ArrOfId = [];
      for (let i = 0; i < 5; i++) {
        ArrOfId.push(Math.floor(Math.random() * 1000));
      }
      console.log(ArrOfId);
      await ArrOfId.map((id) => {
        axios
          .get(`https://jservice.io/api/category?id=${id}`)
          .then((resp) => {
            console.log(resp.data.clues);
            ctx.commit(
              "updateQuestions",
              resp.data.clues.map((item) => {
                return { ...item, answerIsCorrect: "default" };
              })
            );

            ctx.commit("updateTitles", resp.data.title);
          })
          .catch((e) => alert(e));
      });
    },
  },
  mutations: {
    updateQuestions(state, questions) {
      state.questions.push(questions);
    },
    updateTitles(state, titles) {
      state.titles.push(titles);
    },
    deleteValue(state, indx) {
      state.questions[indx[0]][indx[1]].value = null;
      console.log(state.questions[indx[0]][indx[1]]);
    },
    correctAnswer(state, indx) {
      state.questions[indx[0]][indx[1]].answerIsCorrect = "green";
    },
    uncorrectAnswer(state, indx) {
      state.questions[indx[0]][indx[1]].answerIsCorrect = "red";
    },
  },
  state: {
    questions: [],
    titles: [],
  },
  getters: {
    allQuestions(state) {
      return state.questions;
    },
    allTitles(state) {
      return state.titles;
    },
  },
};
