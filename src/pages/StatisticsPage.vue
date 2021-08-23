<template>
  <div style="text-align: center">
    <h3><strong>Имя:</strong> {{ this.getUserInfo.userName }}</h3>
    <h3>
      <b>Общее кол-во вопросов:</b>
      {{
        parseInt(this.getUserInfo.uncorrectQuestions) +
        parseInt(this.getUserInfo.correctQuestions)
      }}
    </h3>
    <h3>
      <b>Все правильные вопросы:</b> {{ this.getUserInfo.correctQuestions }}
    </h3>
    <h3>
      <b>Все неправильные вопросы:</b> {{ this.getUserInfo.uncorrectQuestions }}
    </h3>
    <h3><b>Очки:</b> {{ points }}</h3>
    <q-btn label="Завершить игру!" @click="endGame" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      points: localStorage.points || 0,
    };
  },

  computed: { ...mapGetters(["getUserInfo"]) },
  methods: {
    endGame() {
      this.$router.push("/");
      localStorage.removeItem("gameIsStarted");
      location.reload();
    },
  },
};
</script>

<style scoped></style>
