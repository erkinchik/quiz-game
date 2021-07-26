import axios from "axios";

export default {
  actions: {
    async getQuestions(ctx) {
      const ArrOfId = [1626, 718, 1923, 516, 722];

      await ArrOfId.map((id) => {
        axios
          .get(`https://jservice.io/api/category?id=${id}`)
          .then((resp) => {
            ctx.commit("updateQuestions", resp.data.clues);
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
