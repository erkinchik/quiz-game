<template>
  <div class="points-block" style="margin-top: 30px">
    <div
      class="points"
      v-for="(item, questionIndex) in questionsArr"
      :key="item.id"
    >
      <div
        v-for="(point, indx) in item"
        :key="point.id"
        style="width: 100%; display: flex; justify-content: space-around"
      >
        <div
          v-if="point.answerIsCorrect == 'green'"
          style="
            width: 50%;
            margin: 0 5px;
            background-color: #21ba45;
            text-align: center;
          "
        >
          <h5>correct</h5>
        </div>
        <div
          v-else-if="point.answerIsCorrect == 'default' && point.value != null"
          class="point"
          @click="getQuestion(point.id, indx, questionIndex)"
          style="width: 50%; margin: 0 5px"
        >
          <h5>{{ point.value }}</h5>
        </div>
        <div
          v-if="point.answerIsCorrect == 'red'"
          style="
            width: 50%;
            margin: 0 5px;
            background-color: red;
            text-align: center;
          "
        >
          <h5>uncorrect</h5>
        </div>
      </div>
    </div>
    <dialog-window
      :selected-question="selectedQuestion"
      @checkAnswer="uncorrectAnswer"
    ></dialog-window>
  </div>
</template>

<script>
import dialogWindow from "../components/Dialog";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    ...mapGetters(["allQuestions"]),
    dialogWindow,
  },
  props: {
    questionsArr: {
      type: Array,
      required: true,
    },
    selectedQuestion: {
      type: Array,
      required: true,
    },
  },
  // data() {
  //   return {
  //     showDialog: false,
  //     selectedQuestion: []
  //   };
  // },
  methods: {
    ...mapMutations(["toggleDialog"]),
    getQuestion(id, indx, questionIndex) {
      // this.selectedQuestion = [];
      // this.questionsArr.forEach((questionArray) => {
      //   // this.selectedQuestion = questionArr.filter(
      //   //   (questionObj) => questionObj.id === id
      //   // );
      //   const filtredQuestions = questionArray.filter(
      //     (questionObj) => questionObj.id === id
      //   );
      //   this.selectedQuestion.push(filtredQuestions);
      // });
      this.$emit("getId", id, indx, questionIndex);
      // this.showDialog = true;
      this.toggleDialog();
    },
    uncorrectAnswer(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.points-block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
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
}
</style>
