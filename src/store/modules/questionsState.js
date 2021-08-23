import axios from "axios";
import {
  convertObj,
  getRandomItems,
  replaceInNewArr,
} from "../../utitlits/myfunc";
export default {
  actions: {
    async getClues({ commit }) {
      const { data } = await axios.get(`http://jservice.io/api/clues`);
      const newArr = replaceInNewArr(data);
      commit("updateQuestions", newArr);

      // const cluArr = convertObj(cluObj);
      //    .then(({ data }) => {
      //   let cluObj = convertIntoOneObj(data);
      //   const cluArr = convertObj(cluObj);
      //   ctx.commit("updateQuestions", cluArr);
      // });
    },
  },
  mutations: {
    updateQuestions(state, questions) {
      state.questions = getRandomItems(questions);
    },

    changeAnswerIsCorrect(state, { indexOfGroup, indexOfQuestion, isCorrect }) {
      state.questions[indexOfGroup].clues[indexOfQuestion].answerIsCorrect =
        isCorrect;
    },
    // uncorrectAnswer(state, { indexOfGroup, indexOfQuestion, isCorrect }) {
    //   console.log(isCorrect);
    //   state.questions[indexOfGroup].clues[
    //     indexOfQuestion
    //   ].answerIsCorrect = false;
    // },
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
