<template>
  <div style="text-align: center">
    <h3><strong>Имя:</strong> {{ this.users[id].name }}</h3>
    <h3>
      <b>Общее кол-во вопросов:</b>
      {{
        parseInt(this.users[id].uncorrectQuestions) +
        parseInt(this.users[id].correctQuestions)
      }}
    </h3>
    <h3>
      <b>Все правильные вопросы:</b> {{ this.users[id].correctQuestions }}
    </h3>
    <h3><b>Все неправильные вопросы:</b> {{ this.users[id].uncorrectQuestions }}</h3>
    <h3><b>Очки:</b> {{ this.users[id].points }}</h3>
    <q-btn label="Завершить игру!" @click="endGame" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")),
      id: parseInt(localStorage.getItem("userId")),
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
