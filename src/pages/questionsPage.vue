<template>
  <div class="points-block">
    <div
      class="points"
      v-for="(item, groupIndex) in allQuestions"
      :key="item.id"
    >
      <h5 class="title-category">{{ item.title }}</h5>
      <div
        @click="getQuestion(point.id, groupIndex, questionIndex)"
        v-for="(point, questionIndex) in item.clues"
        :key="point.id"
        class="point"
      >
        <h5
          class="points-block-default"
          :class="
            (point.answerIsCorrect && 'correct') ||
            (point.answerIsCorrect == false && 'uncorrect')
          "
        >
          {{ point.value }}
        </h5>
      </div>
    </div>
    <dialog-window :selected-question="selectedQuestion" />
  </div>
</template>

<script>
import dialogWindow from "../components/Dialog";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedQuestion: {},
    };
  },
  components: {
    dialogWindow,
  },
  // props: {
  //   questionsArr: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  mounted() {
    console.log(this.getUsers);
  },
  computed: {
    ...mapGetters(["allQuestions", "getUsers"]),
  },
  methods: {
    ...mapMutations(["toggleDialog"]),

    getQuestion(id, groupIndex, questionIndex) {
      if (
        this.allQuestions[groupIndex].clues[questionIndex].answerIsCorrect ==
        null
      ) {
        this.selectedQuestion = {};
        this.selectedQuestion = {
          ...this.allQuestions[groupIndex].clues[questionIndex],
          indexOfGroup: groupIndex,
          indexOfQuestion: questionIndex,
        };
        console.log(this.selectedQuestion);
        this.toggleDialog();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.points-block-default {
}
.correct {
  width: 100%;
  padding: 40px 0;
  margin: 0;
  background-color: green;
  text-align: center;
}
.uncorrect {
  @extend .correct;
  background-color: red;
}
.points-block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  margin-top: 30px;
}
.points {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.point {
  margin: 0;
  text-align: center;
  cursor: pointer;
  background-color: #777777;
  width: 30%;
  margin: 0 10px;
}
.title-category {
  width: 30%;
  text-align: center;
}
@media (max-width: 1000px) {
  .points-block {
    flex-direction: row;
    align-items: center;
  }
  .points {
    flex-direction: column;
    margin-bottom: 60px;
  }
  .point {
    width: 90%;
    margin-bottom: 10px;
  }
  .title-category {
    width: auto;
    margin: auto;
  }
}
</style>
