<template>
  <div class="main-wrapper">
    <div class="main-menu">
      <div class="game-menu">
        <button class="btn" @click="$router.push('game')">Играть</button>
        <button class="btn">Статистика</button>
      </div>
    </div>
  </div>
</template>

<script>
//   import { mapGetters } from "vuex";
// export default {
//   computed: mapGetters(["allQuestions"]),
//   methods: {
//     gameLayout() {
//       this.$router.push("game");
//       if (this.allQuestions.length === 0) {
//         this.$store.dispatch("getQuestions");
//       }
//     },
//   },
//
// };
</script>

<style scoped>
.main-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: lightpink;
}
.game-menu {
  width: 500px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.btn {
  width: 85%;
  height: 40px;
  background-color: lightcoral;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  /*border: 1px solid #1D1D1D;*/
  color: #ffffff;
  font-size: 22px;
}
</style>
