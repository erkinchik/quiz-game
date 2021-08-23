<template>
  <div class="game-wrapper" v-if="allQuestions.length > 0">
    <my-header />
    <router-view />
    <main-dialog v-show="!isGameStarted" />
  </div>
  <preloader v-else />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Preloader from "components/Preloader";
import MainDialog from "components/MainDialog";
// import questionsPage from "pages/questionsPage";
import MyHeader from "components/MyHeader";

export default {
  components: {
    Preloader,
    MainDialog,
    // questionsPage,
    MyHeader,
  },
  computed: {
    ...mapGetters(["allQuestions", "allTitles", "isGameStarted"]),
  },

  methods: {
    ...mapMutations(["deleteValue"]),
  },
  async mounted() {
    if (this.allQuestions.length === 0 && this.allTitles.length == 0) {
      this.$store.dispatch("getClues");
    }
  },
};
</script>

<style lang="scss">
.game-wrapper {
  width: 100%;
  height: 100vh;

  padding: 10px;
}

.category-name {
  background-color: #1d1d1d;
}
.quiz {
  display: flex;
}
</style>
