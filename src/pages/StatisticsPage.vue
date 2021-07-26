<template>
  <div style="text-align: center">
    <h3><strong>name:</strong> {{ this.getUserInfo.userName }}</h3>
    <h3><b>all questions:</b> {{this.getUserInfo.questionsCount }}</h3>
    <h3><b>all correct questions:</b> {{ this.getUserInfo.correctQuestions }}</h3>
    <h3><b>all uncorrect questions:</b> {{ this.getUserInfo.uncorrectQuestions }}</h3>
    <h3><b>points:</b> {{ this.getUserInfo.points }}</h3>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return {
      userName:localStorage.userName
    }
  },
  computed: mapGetters(["getUserInfo"]),
};
</script>

<style scoped></style>
