<template>
  <div class="game-wrapper" v-if="allQuestions.length > 0">
    <categories :questions-title="allTitles" />
    <PointsBlock
      :questions-arr="allQuestions"
      :selected-question="selectedQuestion"
      @getId="getQuestion"
    />
    <main-dialog v-show="!isGameStarted"></main-dialog>
  </div>

  <preloader v-else></preloader>
</template>

<script>
import Categories from "components/Categories";
import PointsBlock from "components/PointsBlock";
import Preloader from "components/Preloader";
import { mapGetters } from "vuex";
import MainDialog from "components/MainDialog";

export default {
  // data() {
  //   return {
  //     isGameStarted: localStorage.gameIsStarted,
  //   };
  // },
  components: {
    Categories,
    PointsBlock,
    Preloader,
    MainDialog,
  },
  computed: {
    ...mapGetters(["allQuestions", "allTitles", "isGameStarted"]),
    // isGameStarted() {
    //   return localStorage.gameIsStarted;
    // },
  },

  data: () => {
    return {
      selectedQuestion: [],
    };
  },
  methods: {
    getQuestion(id,indx) {
      this.selectedQuestion = [];
     this.allQuestions.forEach((questionArray) => {
        // this.selectedQuestion = questionArr.filter(
        //   (questionObj) => questionObj.id === id
        // );
        const filtredQuestions = questionArray.filter(
          (questionObj) => questionObj.id === id
        );

        this.selectedQuestion.push(filtredQuestions);
      });

    },
    gameWatcher(value) {
      console.log(value);
      return value;
    },
  },
  async mounted() {
    console.log(this.isGameStarted);
    if (this.allQuestions.length === 0 && this.allTitles.length == 0) {
      this.$store.dispatch("getQuestions");
    }
  },
};
</script>

<style lang="scss">
.game-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.category-name {
  background-color: #1d1d1d;
}
.quiz {
  display: flex;
}
</style>
