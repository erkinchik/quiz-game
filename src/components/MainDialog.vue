<template>
  <div class="dialog">
    <div class="dialog-block">
      <q-input
        rounded
        outlined
        label="Введите имя"
        v-model="name"
        class="input"
      />
      <q-btn class="btn" label="Начать игру" @click="startGame"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: mapGetters(["isGameStarted"]),
  methods: {
    ...mapMutations(["toggleGame", "changeName","checkUser"]),
    startGame() {
      if (this.name.length) {
        this.toggleGame();
        this.checkUser(this.name)
        this.changeName(this.name);
        localStorage.setItem("gameIsStarted", true);
        localStorage.setItem("userName", this.name)
      }
    },
  },


};
</script>

<style scoped lang="scss">
.dialog {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(112, 102, 102, 0.7);
}
.dialog-block {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 50%;
}
.input {
  margin-bottom: 10px;
  width: 90%;
}

.btn {
  background-color: #31ccec;
  color: #ffffff;
  width: 40%;
}
</style>
