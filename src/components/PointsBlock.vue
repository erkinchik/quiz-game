<template>
  <div class="points-block" style="margin-top: 30px">
    <div class="points" v-for="item in questionsArr" :key="item.id">
      <div v-for="(point,indx) in item" :key="point.id" @click="getQuestion(point.id,indx)" style="margin: 0">
        {{ point.value }}
      </div>
    </div>
    <dialog-window
      :selected-question="selectedQuestion"
    ></dialog-window>
  </div>
</template>

<script>
import dialogWindow from "../components/Dialog";
import { mapMutations,mapGetters } from "vuex";
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
    getQuestion(id,indx) {
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
      this.$emit("getId", id,indx);

      // this.showDialog = true;
      this.toggleDialog();
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
</style>
