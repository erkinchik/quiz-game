<template>
  <div class="game-wrapper" v-if="allQuestions.length > 0">
    <categories :questions-title="allTitles" />
    <PointsBlock
      :questions-arr="allQuestions"
      :selected-question="selectedQuestion"
      @getId="getQuestion"
    />
    <main-dialog v-show="!isGameStarted"/>
  </div>

  <preloader v-else/>
</template>

<script>
import Categories from "components/Categories";
import PointsBlock from "components/PointsBlock";
import Preloader from "components/Preloader";
import { mapGetters,mapMutations } from "vuex";
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
    ...mapMutations(["deleteValue"]),
    getQuestion(id,indx,questionIndex) {
      this.selectedQuestion = [];

      this.selectedQuestion.push(this.allQuestions[questionIndex][indx])
      this.selectedQuestion.push([questionIndex,indx])
     // this.allQuestions.forEach((questionArray) => {
     //    // this.selectedQuestion = questionArr.filter(
     //    //   (questionObj) => questionObj.id === id
     //    // );
     //    const filtredQuestions = questionArray.filter(
     //      (questionObj) => questionObj.id === id
     //    );
     //
     //    this.selectedQuestion.push(filtredQuestions);
     //
     //
     //  });

    },
  },
  async mounted() {
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
