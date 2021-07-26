<template>
  <div>
    <q-dialog v-model="isShowingDialog" maximized>
      <q-card>
        <q-toolbar>
          <q-btn @click="closeDialog" flat icon="close" round v-close-popup>
          </q-btn>
        </q-toolbar>
        <q-card-section>
          <div v-for="question in selectedQuestion" :key="question.id">
            <div v-for="questionI in question" :key="questionI.id">
              <h4 style="text-align: center">{{ questionI.question }}</h4>
              <p>{{questionI.value}}</p>
            </div>
          </div>
          <q-input label="Standard" />
        </q-card-section>
        <q-card-section
          style="text-align: center"
          v-show="isShowingDialog"
          @click="timer"
        >
          <q-btn label="проверить" @click="changeStat"></q-btn>
        </q-card-section>
        <p style="text-align: center; font-size: 24px; margin-top: 40px">
          {{ currentTime }} сек.
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
      currentTime: 10,
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
  computed: mapGetters(["isShowingDialog", "getUserInfo"]),
  methods: {
    ...mapMutations(["toggleDialog", "changeMainStats"]),
    closeDialog() {
      this.toggleDialog();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    changeStat() {
      console.log(this.selectedQuestion);
    },
    uncorrectAnswer() {
      return true;
    },
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer();
        this.uncorrectAnswer();
      }
    },
    isShowingDialog(newValue) {
      if (newValue) {
        this.currentTime = 10;
        this.startTimer();
      } else {
        this.stopTimer();
      }
    },
  },
};
</script>

<style scoped></style>
