<template>
  <div>
    <q-dialog v-model="isShowingDialog" maximized>
      <q-card>
        <q-toolbar>
          <q-btn @click="toggleDialog" flat icon="close" round v-close-popup>
          </q-btn>
        </q-toolbar>
        <q-card-section>
          <h4 style="text-align: center">
            {{ selectedQuestion.question }}
          </h4>
          <q-input label="Standard" v-model.trim="userAnswer" />
        </q-card-section>
        <q-card-section style="text-align: center" v-show="isShowingDialog">
          <q-btn label="проверить" @click="checkAnswer" />
        </q-card-section>
        <p class="timer" :class="currentTime <= 10 && 'last-time'">
          {{ changeTimeWord(currentTime) }}
        </p>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "dialog-window",

  data() {
    return {
      userAnswer: "",
      currentTime: 15,
      timer: null,
    };
  },

  props: {
    selectedQuestion: {
      type: Object,
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
      "changeQuestionsStat",
      // "incPoints",
      // "decPoints",
      "changeAnswerIsCorrect",
      "changePointsStat",
      // "correctAnswer",
      // "uncorrectAnswer",
    ]),

    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },

    stopTimer() {
      clearTimeout(this.timer);
      this.userAnswer = "";
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
      const userAnswer = this.userAnswer.toLowerCase();
      const answer = this.selectedQuestion.answer
        .toLowerCase()
        .replace(/\\|\//g, "")
        .replace(/['"]+/g, "");

      const selectedQuestionVal = {
        indexOfGroup: this.selectedQuestion.indexOfGroup,
        indexOfQuestion: this.selectedQuestion.indexOfQuestion,
        isCorrect: answer == userAnswer,
        points: this.selectedQuestion.value,
      };

      if (answer != userAnswer && this.userAnswer != "") {
        alert(`Ответ неверный -${this.selectedQuestion.value} points`);
        this.changeQuestionsStat("uncorrectQuestions");
        this.changePointsStat(selectedQuestionVal);
        this.changeAnswerIsCorrect(selectedQuestionVal);
        this.userAnswer = "";
        this.toggleDialog();
      } else {
        alert("ответ верный");
        this.changeQuestionsStat("correctQuestions");
        this.changePointsStat(selectedQuestionVal);
        this.changeAnswerIsCorrect(selectedQuestionVal);
        this.userAnswer = "";
        this.toggleDialog();
      }
    },
  },

  watch: {
    currentTime(time) {
      if (time === 0) {
        alert(`-${this.selectedQuestion.value} points`);
        this.stopTimer();
        this.userAnswer = "";
        this.changeUncorrect();
        this.decPoints(this.selectedQuestion.value);
        this.toggleDialog();
        this.uncorrectAnswer(this.selectedQuestion);
      }
    },

    isShowingDialog(newValue) {
      if (newValue) {
        this.currentTime = 30;
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
.timer {
  text-align: center;
  font-size: 24px;
  margin-top: 40px;
}
</style>
