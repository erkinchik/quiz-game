<template>
  <div>
    <q-dialog v-model="isShowingDialog" maximized>
      <q-card>
        <q-toolbar>
          <q-btn @click="toggleDialog" flat icon="close" round v-close-popup>
          </q-btn>
        </q-toolbar>
        <q-card-section>
          <!--          <div v-for="question in selectedQuestion" :key="question.id">-->
          <!--            <div v-for="questionI in question" :key="questionI.id">-->
          <!--              <h4 style="text-align: center">{{ questionI.question }}</h4>-->
          <!--              <p>{{ questionI.value }}</p>-->
          <!--            </div>-->
          <!--          </div>-->
          <h4 style="text-align: center">
            {{ selectedQuestion.length && selectedQuestion[0].question }}
          </h4>
          <q-input label="Standard" v-model.trim="userAnswer" />
        </q-card-section>
        <q-card-section style="text-align: center" v-show="isShowingDialog">
          <q-btn label="проверить" @click="checkAnswer"></q-btn>
        </q-card-section>
        <p
          :class="currentTime <= 10 ? 'last-time' : ''"
          style="text-align: center; font-size: 24px; margin-top: 40px"
        >
          {{ changeTimeWord(currentTime) }}
        </p>
      </q-card>
    </q-dialog>
  </div>
  <!--    <div v-if="selectedQuestion.length">-->
  <!--      <div v-for="question in selectedQuestion" :key="question.id">-->
  <!--        <div v-for="questionI in question" :key="questionI.id">-->
  <!--          {{ questionI.value }}-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div v-else-if="selectedQuestion.length>0">-->
  <!--      <h3>error</h3>-->
  <!--    </div>-->
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "dialog-window",
  data() {
    return {
      userAnswer: "",
      currentTime: 60,
      timer: null,
    };
  },
  props: {
    selectedQuestion: {
      type: Array,
      required: true,
    },
    showDialog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["isShowingDialog", "getUserInfo"]),
  },
  methods: {
    ...mapMutations([
      "toggleDialog",
      "changeMainStats",
      "deleteValue",
      "changeUncorrect",
      "changeCorrect",
      "incPoints",
      "decPoints",
      "correctAnswer",
      "uncorrectAnswer",
    ]),
    // closeDialog() {
    //   this.toggleDialog();
    // },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
      console.log(this.selectedQuestion[0]);
    },
    stopTimer() {
      clearTimeout(this.timer);
      this.userAnswer = ""
    },

    changeTimeWord(time) {
      let word;
      if (time <= 14 && time >= 11) word = `${time} секунд`;
      else if (time % 10 === 1) word = `${time} секунда`;
      else if (time % 10 === 4 || time % 10 === 3 || time % 10 === 2)
        word = `${time} секунды`;
      else word = `${time} секунд`;
      return word;
    },
    checkAnswer() {
      const answer1 = this.selectedQuestion[0].answer
        .toLowerCase()
        .replace(/\\|\//g, "")
        .replace(/['"]+/g, "");

      if (answer1 != this.userAnswer.toLowerCase() && this.userAnswer != "") {
        alert(`Ответ неверный -${this.selectedQuestion[0].value} points`);
        this.userAnswer = "";
        this.changeUncorrect();
        this.decPoints(this.selectedQuestion[0].value);
        this.toggleDialog();
        this.deleteValue(this.selectedQuestion[1]);
        this.uncorrectAnswer(this.selectedQuestion[1]);
        this.$emit("checkAnswer", this.selectedQuestion[1]);
      } else if (answer1 == this.userAnswer.toLowerCase()) {
        alert("ответ верный");
        this.changeCorrect();
        this.incPoints(this.selectedQuestion[0].value);
        this.deleteValue(this.selectedQuestion[1]);
        this.correctAnswer(this.selectedQuestion[1]);
        this.userAnswer = "";
        this.toggleDialog();
      }
    },
  },
  watch: {
    currentTime(time) {
      // let word;
      // if (time <= 14 && time >= 11) word = `${time} секунд`;
      // else if (time % 10 === 1) word = `${time} секунда`;
      // else if (time % 10 === 4 || time % 10 === 3 || time % 10 === 2)
      //   word = `${time} секунды`;
      // else word = `${time} секунд`;
      // return word;

      if (time === 0) {
        alert(`-${this.selectedQuestion[0].value} points`);
        this.stopTimer();
        this.userAnswer = "";
        this.changeUncorrect();
        this.decPoints(this.selectedQuestion[0].value);
        this.toggleDialog();
        this.deleteValue(this.selectedQuestion[1]);
        this.uncorrectAnswer(this.selectedQuestion[1]);
        // this.uncorrectAnswer(this.selectedQuestion[1]);
        // // localStorage.setItem("uncorrectQuestions", +1);
        // this.changeUncorrect();
        // this.decPoints(this.selectedQuestion[0].value);
        // this.deleteValue(this.selectedQuestion[1]);
        // this.toggleDialog();
        // this.userAnswer = "";
      }
    },
    isShowingDialog(newValue) {
      if (newValue) {
        this.currentTime = 60;
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped>
.last-time {
  color: red;
}
</style>
